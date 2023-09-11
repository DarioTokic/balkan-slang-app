'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('rijec_tag', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
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
			tag_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'tag', // The name of the referenced table
					key: 'id', // The name of the referenced column
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('rijec_tag');
	},
};
