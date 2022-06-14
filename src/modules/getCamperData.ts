import camperModel, { CamperInt } from "../database/models/camperModel"

export const getCamperData = async (id: string): Promise<CamperInt> => {
	const camperData =
		(await camperModel.findOne({ discordId: id })) ||
		(await camperModel.create({
			discordId: id,
			round: 1,
			day: 0,
			date: Date.now()
		}));
	return camperData;
}