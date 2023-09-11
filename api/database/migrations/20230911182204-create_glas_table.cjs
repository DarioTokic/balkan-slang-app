'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('glas', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			vrsta_glasa: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
			},
			korisnik_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'korisnik', // The name of the referenced table
					key: 'id', // The name of the referenced column
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			definicija_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'definicija', // The name of the referenced table
					key: 'id', // The name of the referenced column
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('glas');
	},
};
