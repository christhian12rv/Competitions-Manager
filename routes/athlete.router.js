import express from 'express';
import * as AthleteValidator from '../middlewares/validators/athlete.validator.js';
import AthleteController from '../controllers/athlete.controller.js';

const router = express.Router();

router.get('/:competitionId', AthleteController.findAllByCompetitionId);
router.post('/', AthleteValidator.create, AthleteController.create);

export default router;
