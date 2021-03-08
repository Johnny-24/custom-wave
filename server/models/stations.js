const Sequelize = require('sequelize')
const sequelize = require('./../utils/database')

const stations = sequelize.define('stations', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = stations