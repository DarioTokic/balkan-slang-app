'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('definicija', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			sadrzaj: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			rijec_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'rijec', // The name of the referenced table
					key: 'id', // The name of the referenced column
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('definicija');
	},
};
