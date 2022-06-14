import { Client } from "discord.js";

export const deleteCommands = async (bot: Client, guildId: string) => {
	await bot.application?.commands.set([]);
	(await bot.guilds.fetch(guildId)).commands.set([]);
	console.log("Commands deleted!");
}