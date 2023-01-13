import { body } from 'express-validator';
import CompetitionTypeUnits from '../../enums/CompetitionTypeUnits.js';
import competitionService from '../../services/competition.service.js';

export const create = [
	body('name')
		.notEmpty()
		.withMessage('Name cannot be null')
		.bail()
		.isString()
		.withMessage('Name is invalid'),

	body('value')
		.notEmpty()
		.withMessage('Value cannot be null')
		.bail()
		.isFloat()
		.withMessage('Value is invalid'),

	body('competitionId')
		.notEmpty()
		.withMessage('CompetitionId cannot be null')
		.bail()
		.isInt()
		.withMessage('CompetitionId is invalid'),

	body('unit')
		.notEmpty()
		.withMessage('Unit cannot be null')
		.bail()
		.isString()
		.withMessage('Unit is invalid')
		.custom(async (value, { req, }) => {
			const { competitionId, } = req.body;

			const competition = await competitionService.findById(competitionId);

			if (competition) {
				const acceptableUnits = CompetitionTypeUnits[competition.type];

				if (!acceptableUnits.includes(value))
					throw new Error('Unit is invalid. The acceptables unit types is ' + acceptableUnits.join(', '));
			}

			return true;
		})
];