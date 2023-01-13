import Sequelize from 'sequelize';
import db from '../db/database.js';

const Athlete = db.define('athlete', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	value: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	unit: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});

Athlete.associations = (models) => {
	Athlete.belongsTo(models.Competition, { foreignKey: 'competitionId', targetKey: 'id', });
};

export default Athlete;