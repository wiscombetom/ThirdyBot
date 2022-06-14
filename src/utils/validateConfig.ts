import config from "../config.json";

export const validateConfig = () => {
	if (!(config.BOT_TOKEN as string)) {
	  console.warn("Missing Discord bot token string from config.");
	  return false;
	}
  
	if (!(config.GUILD_ID as string)) {
	  console.warn("Missing GUILD_ID string from config.");
	  return false;
	}
  
	if (!(config.MONGO_URI as string)) {
	  console.warn("Missing MONGO_URI string from config.");
	  return false;
	}
	return true;
  };