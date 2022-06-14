import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/command";

export const edit: Command = {
	data: new SlashCommandBuilder()
		.setName("edit")
		.setDescription("Edit a previous post.")
		.addStringOption((option) =>
			option
				.setName("embed-id")
				.setDescription("ID of the message to edit.")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("message")
				.setDescription("The message to go in your 100 Days of Code update.")
				.setRequired(true)
		),
	run: async (interaction) => {
		await interaction.deferReply();
		const { channel, user, options } = interaction;
		const targetId = options.getString("embed-id", true);
		const text = options.getString("message", true);

		if (!channel) {
			await interaction.editReply({
				content: "Channel is invalid.",
			});
			return;
		}

		const targetMessage = await channel.messages.fetch(targetId);

		if (!targetMessage) {
			await interaction.editReply({
				content: "Message not found."
			});
			return;
		}

		const targetEmbed = targetMessage.embeds[0];

		if (targetEmbed.author?.name !== user.tag) {
			await interaction.editReply({
				content: "Message not yours."
			});
			return;
		}

		targetEmbed.setDescription(text);
		await targetMessage.edit({
			embeds: [targetEmbed]
		});
		await interaction.editReply({
			content: "Message edited."
		});
	},
};