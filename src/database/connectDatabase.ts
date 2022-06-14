import { connect } from "mongoose";
import { MONGO_URI } from "../config.json";

export const connectDatabase = async () => {
	await connect(MONGO_URI);
	console.log("Database connected!");
}