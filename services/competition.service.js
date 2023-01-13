import AthleteModel from '../models/Athlete.model.js';
import CompetitionModel from '../models/Competition.model.js';

class CompetitionService {
	async findAll() {
		const competitions = await CompetitionModel.findAll();

		return competitions;
	}

	async findAllActive() {
		const competitions = await CompetitionModel.findAll({
			where: {
				finished: false,
			},
		});

		return competitions;
	}

	async findById(id) {
		const competition = await CompetitionModel.findByPk(id);

		return competition;
	}

	async findByIdAndFinished(id, finished) {
		const competition = await CompetitionModel.findOne({
			where: {
				id,
				finished,
			},
		});

		return competition;
	}

	async create(data) {
		const { type, } = data;

		const competition = await CompetitionModel.create({
			type,
		});

		return competition;
	}

	async finish(id) {
		await CompetitionModel.update({
			finished: true,
		}, {
			where: {
				id,
			},
		});
	}
	
	async rankThorHammer(id) {
		let athletes = await AthleteModel.findAll({
			where: {
				competitionId: id,
			},
		});

		athletes = athletes.map(m => {
			if (m.unit === 'min')
				m.value = m.value * 60;

			return {
				name: m.name,
				total: m.value,
			};
		}).sort((a, b) => b.total - a.total);

		return athletes;
	}

	async rankDartThrow(id) {
		let athletes = await AthleteModel.findAll({
			where: {
				competitionId: id,
			},
		});

		athletes = athletes.map(m => {
			if (m.unit === 'm')
				m.value = m.value * 100;

			return {
				name: m.name,
				total: m.value,
			};
		}).sort((a, b) => b.total - a.total);

		return athletes;
	}

	async rankDrinkWater(id) {
		let athletes = await AthleteModel.findAll({
			where: {
				competitionId: id,
			},
		});

		athletes = athletes.map(m => {
			if (m.unit === 'l')
				m.value = m.value * 1000;

			return {
				name: m.name,
				total: m.value,
			};
		}).sort((a, b) => b.total - a.total);

		return athletes;
	}
}

export default new CompetitionService();