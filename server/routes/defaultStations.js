const { Router } = require('express')
const DefaultStations = require('../models/defaultStations')

const router = Router()

// Получение дефолтных станций
router.get('/', async (req, res) => {
	try {
		const DefaultStationsArr = await DefaultStations.findAll()
		res.status(200).json(DefaultStationsArr)
	} catch (e) {
		res.status(500).json({
			message: "server errror"
		})
	}
})

// Создание дефолтной станции
// router.post('/', async (req, res ) => {
// 	try {
// 		const defaultStations = await DefaultStations.create({
// 			title: req.body.title,
// 			url: req.body.url
// 		})
// 		res.sendStatus(201).json(defaultStations)
// 	} catch (e) {
// 		res.status(500).json({
// 			message: "server errror"
// 		})
// 	}
// })

// Изменение
// router.put('/', (res, req) => {

// })

// Удаление
// router.delete('/', (res, req) => {

// })

module.exports = router