import path from "node:path";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import { PRODUCTS } from "@magnus-honung/shared";
import type { Config } from "./config";
import type { Mailer } from "./services/mailer";
import { ordersRouter } from "./routes/orders";

export function createApp(config: Config, mailer: Mailer) {
  const app = express();
  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(express.json({ limit: "20kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });
  app.get("/api/products", (_req, res) => {
    res.json(PRODUCTS);
  });
  app.use("/api/orders", ordersRouter(mailer, config.ORDER_INBOX));

  if (config.STATIC_DIR) {
    const dir = path.resolve(config.STATIC_DIR);
    app.use(express.static(dir));
    app.get(/^(?!\/api\/).*/, (_req, res) => {
      res.sendFile(path.join(dir, "index.html"));
    });
  }

  const onError: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: "internal" });
  };
  app.use(onError);

  return app;
}
