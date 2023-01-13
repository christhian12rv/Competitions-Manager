import logger from '../config/logger.js';
import { validationResult } from 'express-validator';
import CompetitionService from '../services/competition.service.js';
import CompetitionTypeEnum from '../enums/CompetitionType.enum.js';


class CompetitionController {
	async findAll(req, res) {
		logger.info(`Calling findAll of ${req.originalUrl}`);

		try {
			const competitions = await CompetitionService.findAll();
			
			const message = 'Competitions searched successfully';
			logger.info(message);

			return res.status(200).send({ message, competitions, });
		} catch(e) {
			const message = 'Some internal error occurred while searching competitions';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}

	async findAllActive(req, res) {
		logger.info(`Calling findAllActive of ${req.originalUrl}`);

		try {
			const competitions = await CompetitionService.findAllActive();
			
			const message = 'Active competitions searched successfully';
			logger.info(message);

			return res.status(200).send({ message, competitions, });
		} catch(e) {
			const message = 'Some internal error occurred while searching active competitions';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}

	async findById(req, res) {
		logger.info(`Calling findById of ${req.originalUrl}`);

		const { id, } = req.params;

		try {
			const competition = await CompetitionService.findById(id);

			const message = 'Competition searched successfully';
			logger.info(message);

			return res.status(200).send({ message, competition, });
		} catch(e) {
			const message = 'Some internal error occurred while searching competition';
			logger.error(message);

			return res.status(500).send({ message: 'Some internal error occurred while searching competition', });
		}
	}

	async create(req, res) {
		logger.info(`Calling create of ${req.originalUrl}`);

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const message = 'There were some errors when creating competition';
			logger.info(message);

			return res.status(400).send({ message, errors: errors.array().map(e => e.msg), });
		}

		const data = req.body;

		try {
			const competition = await CompetitionService.create(data);

			const message = 'Competition created successfully';
			logger.info(message);

			return res.status(201).send({ message, competition, });
		} catch(e) {
			const message = 'Some internal error occurred while creating competition';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}

	async finish(req, res) {
		logger.info(`Calling finish of ${req.originalUrl}`);

		const { id, } = req.params;

		try {
			const competition = await CompetitionService.findByIdAndFinished(id, false);

			if (!competition) {
				const message = `There is no competition with id = ${id} or competition has already been finished`;
				logger.info(message);

				return res.status(400).send({ message, });
			}

			await CompetitionService.finish(id);

			const message = `Competition with id = ${id} finished successfully`;
			logger.info(message);

			return res.status(200).send({ message, });
		} catch(e) {
			const message = 'Some internal error occurred while finishing competition';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}

	async rank(req, res) {
		logger.info(`Calling rank of ${req.originalUrl}`);

		const { id, } = req.params;

		try {
			const competition = await CompetitionService.findById(id);

			if (!competition) {
				const message = `Competition with id = ${id} not exists`;
				logger.info(message);

				return res.status(400).send({ message, });
			}

			let rank = [];

			switch(competition.type) {
			case CompetitionTypeEnum.ThorHammer:
				rank = await CompetitionService.rankThorHammer(id);
				break;
			case CompetitionTypeEnum.DartThrow:
				rank = await CompetitionService.rankDartThrow(id);
				break;
			case CompetitionTypeEnum.DrinkWater:
				rank = await CompetitionService.rankDrinkWater(id);
				break;
			default:
				break;
			}

			const message = `Rank of competition with id = ${id} computed successfully`;
			logger.info(message);

			return res.status(200).send({ message, rank, });
		} catch(e) {
			const message = 'Some internal error occurred while ranking competition';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}
}

export default new CompetitionController();