import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { Command } from "../interfaces/command";
import { getCamperData } from "../modules/getCamperData";

export const view: Command = {
	data: new SlashCommandBuilder()
		.setName("view")
		.setDescription("View progress for the 100 Days of Code challenge."),
	run: async (interaction: CommandInteraction) => {
		await interaction.deferReply();
		const { user } = interaction;
		const targetCamper = await getCamperData(user.id);
		const day = targetCamper.day;
		const oneHundredEmbed = new MessageEmbed()
			.setAuthor({
				name: user.tag,
				iconURL: user.displayAvatarURL()
			})
			.setTitle("100 Days of Code")
			.setDescription("Here is my 100 Days of Code progress.")
			.addField("Round", targetCamper.round.toString(), true)
			.addField("Day", targetCamper.day.toString(), true)
			.setFooter({
				text: `Last report: ${new Date(targetCamper.timestamp).toLocaleDateString()}`
			});
			if (day == 0) {
				oneHundredEmbed.addField("Challenge Not Started!", "Start the challenge with the ```/100``` command.");
			}
		await interaction.editReply({
			embeds: [oneHundredEmbed]
		});
	}
}