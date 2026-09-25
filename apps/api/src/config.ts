import { z } from "zod";

const envSchema = z.object({
  // API_PORT wins over PORT so a PORT meant for the web dev server never collides.
  API_PORT: z.coerce.number().int().optional(),
  PORT: z.coerce.number().int().default(3001),
  ORDER_INBOX: z.email().default("magnus@example.com"),
  MAIL_FROM: z.string().default("Magnus Honung <no-reply@magnushonung.se>"),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().default(587),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  STATIC_DIR: z.string().optional(),
});

export type Config = z.infer<typeof envSchema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  // Treat empty strings in .env as "not set".
  const cleaned = Object.fromEntries(Object.entries(env).filter(([, v]) => v !== ""));
  return envSchema.parse(cleaned);
}
