import { Command } from "../interfaces/command";
import { edit } from "./edit";
import { help } from "./help";
import { oneHundred } from "./oneHundred";
import { view } from "./view";

export const commandList: Command[] = [
	oneHundred, edit, view, help
];