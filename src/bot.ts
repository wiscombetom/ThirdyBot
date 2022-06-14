import { Client } from "discord.js";
import { BOT_TOKEN } from "./config.json"

console.log("Bot is starting...");

const client = new Client({
	intents: [],
});

console.log(client);

const ready = (client: Client) => {
	console.log("Bot is online.")
	console.log(`Logged in as ${client.user?.tag}`)
}

client.on("ready", ready);

client.login(BOT_TOKEN);