'use strict';

module.exports = (sequelize, DataTypes) => {
	const Glas = sequelize.define(
		'Glas',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			vrsta_glasa: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
		},
		{
			tableName: 'glas',
		}
	);

	// Define associations
	Glas.associate = (models) => {
		Glas.belongsTo(models.Korisnik, {
			foreignKey: 'korisnik_id',
			onDelete: 'CASCADE',
		});
		Glas.belongsTo(models.Definicija, {
			foreignKey: 'definicija_id',
			onDelete: 'CASCADE',
		});
	};

	return Glas;
};
