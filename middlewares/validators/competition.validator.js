import { body } from 'express-validator';
import CompetitionTypeEnum from '../../enums/CompetitionType.enum.js';

export const create = [
	body('type')
		.notEmpty()
		.withMessage('Type cannot be null')
		.bail()
		.isIn(Object.values(CompetitionTypeEnum))
		.withMessage('Type is invalid')
];