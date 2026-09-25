import { describe, expect, it } from "vitest";
import { orderRequestSchema, orderTotalSek } from "./order";

const base = {
  customerType: "private",
  name: "Anna Svensson",
  email: "anna@example.com",
  items: [{ productId: "sommarhonung-500", quantity: 2 }],
  delivery: "pickup",
} as const;

describe("orderRequestSchema", () => {
  it("accepts a valid private order", () => {
    expect(orderRequestSchema.safeParse(base).success).toBe(true);
  });

  it("requires a class name for school-class orders", () => {
    const result = orderRequestSchema.safeParse({ ...base, customerType: "school-class" });
    expect(result.success).toBe(false);
  });

  it("rejects unknown products", () => {
    const result = orderRequestSchema.safeParse({
      ...base,
      items: [{ productId: "nope", quantity: 1 }],
    });
    expect(result.success).toBe(false);
  });
});

describe("orderTotalSek", () => {
  it("sums price times quantity", () => {
    expect(
      orderTotalSek([
        { productId: "sommarhonung-500", quantity: 2 },
        { productId: "sommarhonung-250", quantity: 1 },
      ]),
    ).toBe(335);
  });
});
