import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { commands } from "../commands";

export default (client: Client): void => {
	client.on("interactionCreate", async (interaction: Interaction) => {
		if (interaction.isCommand() || interaction.isContextMenu()) {
			await handleCommand(client, interaction);
		}
	});
}

const handleCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
	const {commandName} = interaction;
	const command = commands.find(c => c.name === commandName);
	if (!command) {
		const content = "Command error."
		interaction.followUp({
			ephemeral: true,
			content
		});
		return;
	}
	await interaction.deferReply();
	command.run(client, interaction);
}