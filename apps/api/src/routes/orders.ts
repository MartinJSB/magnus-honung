import { randomBytes } from "node:crypto";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { orderRequestSchema, z } from "@magnus-honung/shared";
import type { Mailer } from "../services/mailer";
import { buildOrderEmails } from "../services/orderEmails";

function newOrderId(): string {
  return `MH-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export function ordersRouter(mailer: Mailer, inbox: string): Router {
  const router = Router();

  router.post("/", rateLimit({ windowMs: 15 * 60_000, limit: 10 }), async (req, res) => {
    const parsed = orderRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({ error: "validation", issues: z.flattenError(parsed.error).fieldErrors });
      return;
    }
    const order = parsed.data;
    const orderId = newOrderId();

    // Honeypot filled in: pretend success so bots learn nothing.
    if (order.website) {
      res.status(201).json({ orderId });
      return;
    }

    await Promise.all(buildOrderEmails(order, orderId, inbox).map((mail) => mailer.send(mail)));
    res.status(201).json({ orderId });
  });

  return router;
}
