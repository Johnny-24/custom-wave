const { Router } = require('express')


const router = Router()

// Получение дефолтных станций
router.get('/', (req, res) => {
	res.json({'a': 'as'})
})

// Создание
// router.post('/', (res, req) => {

// })

// Изменение
// router.put('/', (res, req) => {

// })

// Удаление
// router.delete('/', (res, req) => {

// })

module.exports = router