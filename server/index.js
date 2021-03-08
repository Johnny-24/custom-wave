const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const defaultStations = require('./routes/defaultStations')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/defaultStations', defaultStations)

app.use((req, res, next) => {
	res.sendFile('/index.html')
})

async function start() {
	try {
		// await sequelize.sync({ force: true })
		await sequelize.sync()
		app.listen(PORT)
	} catch(e) {
		console.log(e);
	}
}

start()
