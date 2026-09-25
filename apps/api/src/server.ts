import { createApp } from "./app";
import { loadConfig } from "./config";
import { createMailer } from "./services/mailer";

const config = loadConfig();
const port = config.API_PORT ?? config.PORT;
const app = createApp(config, createMailer(config));

app.listen(port, () => {
  console.info(`🐝 API listening on http://localhost:${port}`);
});
