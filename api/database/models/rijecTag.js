// rijecTag.js (or any name you prefer)
'use strict';

module.exports = (sequelize, DataTypes) => {
	const RijecTag = sequelize.define(
		'RijecTag',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
		},
		{
			tableName: 'rijec_tag',
		}
	);

	return RijecTag;
};
