import { Sequelize } from 'sequelize';

const database = new Sequelize({
	dialect: 'sqlite',
	storage: './db/competitions.sqlite',
	logging: false,
});

export default database;
