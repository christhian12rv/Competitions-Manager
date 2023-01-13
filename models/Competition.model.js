import Sequelize from 'sequelize';
import db from '../db/database.js';
import CompetitionTypeEnum from '../enums/CompetitionType.enum.js';
import Athlete from './Athlete.model.js';

const Competition = db.define('competition', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	type: {
		type: Sequelize.ENUM(Object.values(CompetitionTypeEnum)),
		allowNull: false,
	},
	finished: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});

Competition.hasMany(Athlete, { as: 'athletes', });

export default Competition;