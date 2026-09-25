import { z } from "zod";
import { PRODUCT_IDS, findProduct } from "./products";

export const orderItemSchema = z.object({
  productId: z.enum(PRODUCT_IDS),
  quantity: z.number().int().min(1).max(100),
});

export const orderRequestSchema = z
  .object({
    customerType: z.enum(["private", "school-class"]),
    name: z.string().trim().min(2, "Skriv ditt namn").max(100),
    email: z.email("Ogiltig e-postadress"),
    phone: z.string().trim().max(30).optional(),
    className: z.string().trim().max(100).optional(),
    items: z.array(orderItemSchema).min(1, "Välj minst en burk"),
    delivery: z.enum(["pickup", "local-delivery"]),
    message: z.string().trim().max(1000).optional(),
    /** Honeypot: real users never see or fill this field. */
    website: z.string().max(200).optional(),
  })
  .refine((o) => o.customerType !== "school-class" || (o.className?.length ?? 0) > 0, {
    path: ["className"],
    message: "Ange skola och klass",
  });

export type OrderRequest = z.infer<typeof orderRequestSchema>;

export function orderTotalSek(items: OrderRequest["items"]): number {
  return items.reduce(
    (sum, item) => sum + (findProduct(item.productId)?.priceSek ?? 0) * item.quantity,
    0,
  );
}
