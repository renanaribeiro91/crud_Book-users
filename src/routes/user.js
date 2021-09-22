const express = require('express')

const routes = express.Router()

const {createUser} = require('../controller/user/userCreate')
const {userFindAll}  = require('../controller/user/userFindAll')
const {userFindOne} = require('../controller/user/userFindOne')
const {updateUser} = require('../controller/user/userUpdate')
const {userDelete} = require('../controller/user/userDelete')
const {addBookUser} = require('../controller/user/userAddBook')

routes.post('/create',createUser)
routes.get('/findAll',userFindAll)
routes.get('/findOne/:id',userFindOne)
routes.put('/update/:id',updateUser)
routes.delete('delete/:id',userDelete)
routes.put('/add/:id',addBookUser)

module.exports = routes
