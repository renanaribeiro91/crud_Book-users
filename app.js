const express = require('express')
const app = express()

require('./src/mongoose/mongoose')

app.use(express.json());

const userRoutes = require('./src/routes/user')
const booksRoutes = require('./src/routes/books')

app.use('/user',userRoutes)
app.use('/books',booksRoutes)

const PORT = process.env.port || 8080

app.listen(PORT,()=>{
    console.log('Server on in ' + port)
})

module.exports = app