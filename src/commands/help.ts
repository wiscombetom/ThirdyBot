import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { Command } from "../interfaces/command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const help: Command = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Display information on using the bot."),
	// .addStringOption((option: SlashCommandStringOption) => option
	// 	.setName("message")
	// 	.setDescription("The message to go in your update.")
	// 	.setRequired(true)
	// ),

	run: async (interaction: CommandInteraction) => {
		await interaction.deferReply();
		// const { user } = interaction;
		// const text = interaction.options.getString("message", true);
		// const targetCamper = await getCamperData(user.id);
		// const updatedCamper = await updateCamperData(targetCamper);
		const helpEmbed = new MessageEmbed()
			.setAuthor({
				name: interaction.client.user?.tag!,
				// iconURL: user.displayAvatarURL()
			})
			.setTitle("Help")
			// .setDescription(text)
			.addField("Start or Check In", "```/100```")
			.addField("Edit Check In Message", "```/edit```")
			.addField("View Progress", "```/view```");
			// .setFooter({
			// 	text: `Day completed: ${new Date(updatedCamper.timestamp).toLocaleDateString()}`
			// });
		await interaction.editReply({
			embeds: [helpEmbed]
		});
	}
}