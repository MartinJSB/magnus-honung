import type { OrderRequest } from "@magnus-honung/shared";

export type OrderResult =
  { ok: true; orderId: string } | { ok: false; fieldErrors: Record<string, string[] | undefined> };

export async function submitOrder(order: OrderRequest): Promise<OrderResult> {
  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (res.status === 400) {
    const body = (await res.json()) as { issues: Record<string, string[]> };
    return { ok: false, fieldErrors: body.issues };
  }
  if (!res.ok) throw new Error(`Order failed: ${res.status}`);
  const body = (await res.json()) as { orderId: string };
  return { ok: true, orderId: body.orderId };
}
