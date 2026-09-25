import nodemailer from "nodemailer";
import type { Config } from "../config";

export type Mail = { to: string; subject: string; text: string; replyTo?: string };
export type Mailer = { send(mail: Mail): Promise<void> };

export function createMailer(config: Config): Mailer {
  if (!config.SMTP_HOST) {
    return {
      async send(mail) {
        console.info(`\n📧 [dev mail] to=${mail.to} subject="${mail.subject}"\n${mail.text}\n`);
      },
    };
  }

  const transport = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_PORT === 465,
    auth: config.SMTP_USER ? { user: config.SMTP_USER, pass: config.SMTP_PASS } : undefined,
  });

  return {
    async send(mail) {
      await transport.sendMail({ from: config.MAIL_FROM, ...mail });
    },
  };
}
