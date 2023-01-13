import logger from '../config/logger.js';
import { validationResult } from 'express-validator';
import AthleteService from '../services/athlete.service.js';
import competitionService from '../services/competition.service.js';


class AthleteController {
	async findAllByCompetitionId(req, res) {
		logger.info(`Calling findAllByCompetitionId of ${req.originalUrl}`);

		const { competitionId, } = req.params;

		try {
			const athletes = await AthleteService.findAllByCompetitionId(competitionId);
			
			const message = 'Athletes searched successfully';
			logger.info(message);

			return res.status(200).send({ message, athletes, });
		} catch(e) {
			const message = 'Some internal error occurred while searching athletes';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}

	async create(req, res) {
		logger.info(`Calling create of ${req.originalUrl}`);

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const message = 'There were some errors when creating athlete';
			logger.info(message);

			return res.status(400).send({ message, errors: errors.array().map(e => e.msg), });
		}

		const data = req.body;

		try {
			const competition = await competitionService.findByIdAndFinished(data.competitionId, false);
			if (!competition) {
				const message = `Competition with id = ${data.competitionId} not exists or has already been finished`;
				logger.info(message);
				return res.status(201).send({ message, });
			}
			
			const athlete = await AthleteService.create(data);
			
			const message = 'Athlete created successfully';
			logger.info(message);

			return res.status(201).send({ message, athlete, });
		} catch(e) {
			const message = 'Some internal error occurred while creating athlete';
			logger.error(message);

			return res.status(500).send({ message, });
		}
	}
}

export default new AthleteController();