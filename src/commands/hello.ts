import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "src/command";

export const hello: Command = {
	name: "hello",
	description: "Returns a greeting.",
	run: async (client: Client, interaction: BaseCommandInteraction) => {
		const content = "Hello there!";

		await interaction.followUp({
			ephemeral: true,
			content
		});
	},
}