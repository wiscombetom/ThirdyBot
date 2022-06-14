import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { Command } from "../interfaces/command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const oneHundred: Command = {
	data: new SlashCommandBuilder()
		.setName("100")
		.setDescription("Check in for the 100 Days of Code challenge.")
		.addStringOption((option: SlashCommandStringOption) => option
			.setName("message")
			.setDescription("The message to go in your update.")
			.setRequired(true)
		),

	run: async (interaction: CommandInteraction) => {
		await interaction.deferReply();
		const { user } = interaction;
		const text = interaction.options.getString("message", true);
		const targetCamper = await getCamperData(user.id);
		const updatedCamper = await updateCamperData(targetCamper);
		const oneHundredEmbed = new MessageEmbed()
			.setAuthor({
				name: user.tag,
				iconURL: user.displayAvatarURL()
			})
			.setTitle("100 Days of Code")
			.setDescription(text)
			.addField("Round", updatedCamper.round.toString(), true)
			.addField("Day", updatedCamper.day.toString(), true)
			.setFooter({
				text: `Day completed: ${new Date(updatedCamper.timestamp).toLocaleDateString()}`
			});
		await interaction.editReply({
			embeds: [oneHundredEmbed]
		});
	}
}