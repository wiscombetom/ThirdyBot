import { Client } from "discord.js";
import { commands } from "../commands";

export default (client: Client): void => {
	client.on("ready", async () => {
		const {user, application} = client;
		if (!user || !application) {
			return;
		}

		await application.commands.set(commands)

		console.log(`${user.username} is online!`);
	});
}