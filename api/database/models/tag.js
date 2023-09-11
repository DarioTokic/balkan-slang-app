'use strict';

module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define(
		'Tag',
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
			tableName: 'tag',
		}
	);

	return Tag;
};
