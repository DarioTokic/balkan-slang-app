'use strict';

module.exports = (sequelize, DataTypes) => {
	const Rijec = sequelize.define(
		'Rijec',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			naziv: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			tableName: 'rijec',
		}
	);

	return Rijec;
};
