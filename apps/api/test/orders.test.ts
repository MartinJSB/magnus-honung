import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { loadConfig } from "../src/config";
import type { Mail, Mailer } from "../src/services/mailer";

function setup() {
  const sent: Mail[] = [];
  const mailer: Mailer = { send: async (mail) => void sent.push(mail) };
  const app = createApp(loadConfig({ ORDER_INBOX: "magnus@example.com" }), mailer);
  return { app, sent };
}

const validOrder = {
  customerType: "private",
  name: "Anna Svensson",
  email: "anna@example.com",
  items: [{ productId: "sommarhonung-500", quantity: 3 }],
  delivery: "pickup",
};

describe("POST /api/orders", () => {
  it("emails Magnus and the customer", async () => {
    const { app, sent } = setup();
    const res = await request(app).post("/api/orders").send(validOrder);

    expect(res.status).toBe(201);
    expect(res.body.orderId).toMatch(/^MH-/);
    expect(sent.map((m) => m.to)).toEqual(["magnus@example.com", "anna@example.com"]);
    expect(sent.map((m) => m.replyTo)).toEqual(["anna@example.com", "magnus@example.com"]);
    expect(sent[0]?.text).toContain("510 kr");
  });

  it("rejects invalid input", async () => {
    const { app, sent } = setup();
    const res = await request(app)
      .post("/api/orders")
      .send({ ...validOrder, email: "nope" });

    expect(res.status).toBe(400);
    expect(res.body.issues.email).toBeDefined();
    expect(sent).toHaveLength(0);
  });

  it("silently drops honeypot submissions", async () => {
    const { app, sent } = setup();
    const res = await request(app)
      .post("/api/orders")
      .send({ ...validOrder, website: "spam" });

    expect(res.status).toBe(201);
    expect(sent).toHaveLength(0);
  });
});
