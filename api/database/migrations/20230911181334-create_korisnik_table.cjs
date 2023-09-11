'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('korisnik', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			ime: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prezime: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			username: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			lozinka: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			tip: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('korisnik');
	},
};
