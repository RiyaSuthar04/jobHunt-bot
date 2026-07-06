import { client } from "./client.js";
import { env } from "./config/env.js";
import { registerReadyEvent } from "./events/ready.js";

// Register Events
registerReadyEvent(client);

// Login Bot
client.login(env.DISCORD_TOKEN);