'use strict';

module.exports = (sequelize, DataTypes) => {
	const Korisnik = sequelize.define(
		'Korisnik',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			ime: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			prezime: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			lozinka: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			tip: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			tableName: 'korisnik',
		}
	);

	return Korisnik;
};
