import AthleteModel from '../models/Athlete.model.js';

class AthleteService {
	async findAllByCompetitionId(competitionId) {
		const competitions = await AthleteModel.findAll({
			where: {
				competitionId: competitionId,		
			},
		});

		return competitions;
	}

	async findByNameAndCompetitionId(name, competitionId) {
		const athlete = await AthleteModel.findOne({
			where: {
				name,
				competitionId,
			},
		});

		return athlete;
	}

	async create(data) {
		const { name, value, unit, competitionId, } = data;

		const athleteExists = await this.findByNameAndCompetitionId(name, competitionId);

		if (athleteExists) {
			await AthleteModel.update({
				value,
				unit,
			}, {
				where: {
					id: athleteExists.id,
				},
			});

			const athlete = await AthleteModel.findOne({
				where: {
					name,
					competitionId,
				},
			});

			return athlete;
		}

		const athlete = await AthleteModel.create({
			name,
			value,
			unit,
			competitionId,
		});

		return athlete;
	}
}

export default new AthleteService();