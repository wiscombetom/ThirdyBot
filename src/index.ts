import { Client } from "discord.js";
import { BOT_TOKEN } from "./config.json"
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready"

console.log("Bot is starting...");

const client = new Client({
	intents: [],
});

// const ready = (client: Client) => {
// 	console.log("Bot is online.");
// 	console.log(`Logged in as ${client.user?.tag}`);
// }
// client.on("ready", ready);
	
// console.log(client);
ready(client);
interactionCreate(client);

client.login(BOT_TOKEN);

// import { Client, Interaction } from "discord.js"
// import { BOT_TOKEN } from "./config.json"
// import { INTENT_OPTIONS } from "./config/intentOptions";
// import { connectDatabase } from "./database/connectDatabase";
// import { onInteraction } from "./events/onInteraction";
// import { onReady } from "./events/onReady";
// import { validateConfig } from "./utils/validateConfig";
// (async () => {
// 	if (!validateConfig()) {
// 		return;
// 	}

// 	const BOT = new Client({
// 		intents: INTENT_OPTIONS
// 	});

// 	BOT.on("ready", async () => await onReady(BOT));

// 	BOT.on("interactionCreate", async (interaction: Interaction) => {
// 		await onInteraction(interaction);
// 	})

// 	await connectDatabase();
// 	await BOT.login(BOT_TOKEN);
// })();
