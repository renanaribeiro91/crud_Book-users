const Book = require('../models/book')

module.exports = {
    async findAll (){
        const book = await Book.find({})
        return book              
    },

    async findOne (id){
        const book = await Book.findById({_id:id})
        return book
    },

    async create (books){
        const book = await Book.create(books)
        return book 
    },

    async remove (id){
        const book = await Book.remove({id})
        return book
    },

    async update (books){

        const book = await books.save()
        return book
    }
}
