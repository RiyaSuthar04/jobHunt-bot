import { Client } from "discord.js";

export const registerReadyEvent = (client: Client) => {
    client.once("ready", (readyClient) => {
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("🤖 JobPilot AI is Online");
        console.log(`👤 Logged in as: ${readyClient.user.tag}`);
        console.log(`🆔 Bot ID: ${readyClient.user.id}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });
};