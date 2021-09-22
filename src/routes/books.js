const express = require('express')
const routes = express.Router()

const {createBook} = require('../controller/book/bookCreate')
const {bookFindAll} = require('../controller/book/bookFindAll')
const {bookFindOne} = require('../controller/book/bookFindOne')
const {updateBook} = require('../controller/book/bookUpdate')
const {bookDelete} = require('../controller/book/bookDelete')

routes.post('/create',createBook)
routes.get('/findAll',bookFindAll)
routes.get('/findOne/:id',bookFindOne)
routes.put('/update/:id',updateBook)
routes.delete('/delete/:id',bookDelete)

module.exports = routes