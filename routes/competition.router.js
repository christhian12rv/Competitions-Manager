import express from 'express';
import * as CompetitionValidator from '../middlewares/validators/competition.validator.js';
import CompetitionController from '../controllers/competition.controller.js';

const router = express.Router();

router.get('/', CompetitionController.findAll);
router.get('/active', CompetitionController.findAllActive);
router.get('/:id', CompetitionController.findById);
router.post('/', CompetitionValidator.create, CompetitionController.create);
router.post('/finish/:id',  CompetitionController.finish);
router.get('/rank/:id', CompetitionController.rank);

export default router;
