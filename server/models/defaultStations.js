const Sequelize = require('sequelize')
const sequelize = require('./../utils/database')

const defaultStations = sequelize.define('defaultStations', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = defaultStations