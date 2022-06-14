import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { commandList } from "../commands/_commandList";
import { CLIENT_ID, GUILD_ID, BOT_TOKEN } from "../config.json"

export const onReady = async (bot: Client) => {
	const rest = new REST({
		version: "9"
	}).setToken(BOT_TOKEN);

	const commandData = commandList.map((command) => command.data.toJSON());

	await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
		body: commandData
	});

	console.log("Bot is ready!");
}