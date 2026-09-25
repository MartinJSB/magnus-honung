import { findProduct, orderTotalSek, type OrderRequest } from "@magnus-honung/shared";
import type { Mail } from "./mailer";

const DELIVERY_LABEL: Record<OrderRequest["delivery"], string> = {
  pickup: "Hämtar i Sundby i Spånga eller på gården i Nykvarn, efter överenskommelse",
  "local-delivery": "Leverans i närområdet",
};

function itemLines(order: OrderRequest): string {
  return order.items
    .map((item) => {
      const product = findProduct(item.productId);
      return `  ${item.quantity} st ${product?.name} ${product?.sizeGrams} g à ${product?.priceSek} kr`;
    })
    .join("\n");
}

export function buildOrderEmails(order: OrderRequest, orderId: string, inbox: string): Mail[] {
  const total = orderTotalSek(order.items);
  const summary = [
    `Ordernummer: ${orderId}`,
    `Typ: ${order.customerType === "school-class" ? `Klassförsäljning (${order.className})` : "Privatperson"}`,
    "",
    itemLines(order),
    "",
    `Summa enligt ordinarie pris: ${total} kr`,
    `Leverans: ${DELIVERY_LABEL[order.delivery]}`,
    order.message ? `\nMeddelande:\n${order.message}` : "",
  ].join("\n");

  return [
    {
      to: inbox,
      replyTo: order.email,
      subject: `Ny beställning ${orderId} från ${order.name}`,
      text: `${summary}\n\nKontakt: ${order.name}, ${order.email}${order.phone ? `, ${order.phone}` : ""}`,
    },
    {
      to: order.email,
      // Mail is sent from no-reply, so customer replies must go to Magnus.
      replyTo: inbox,
      subject: `Tack för din beställning! (${orderId})`,
      text: `Hej ${order.name}!\n\nTack för din beställning hos Magnus Honung. Magnus hör av sig inom ett par dagar för att bekräfta och berätta hur du betalar (Swish) och hämtar.\n\n${summary}\n\nSurriga hälsningar,\nMagnus`,
    },
  ];
}
