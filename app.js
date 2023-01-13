import express from 'express';
import database from './db/database.js';
import config from './config/config.js';
import logger from './config/logger.js';
import CompetitionRouter from './routes/competition.router.js';
import AthleteRouter from './routes/athlete.router.js';

// Create database...
database.sync({ force: false, }).then(() => {
	logger.info('Database Synced!');
}).catch(reason => {
	logger.error(reason);
});

// Start express server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));

// Routes
app.use('/competition', CompetitionRouter);
app.use('/athlete', AthleteRouter);

// Error handler
app.get('/*', function (req, res) {
	res.status(500);
	res.send({
		'error': true,
		'msg': 'a',
	});
});

app.listen(config.port, () => {
	logger.info(`Server is running at http://localhost:${config.port}`);
});
