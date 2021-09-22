const User = require('../models/user')
const Book = require('../models/book')

module.exports = {

    async findAll (){
        const user = await User.find()
        return user                 
    },

    async findOne (id){
        const user = await User.findById({_id:id}).populate('books')
        // for(const idBook of user.books) {
        //     const book = await Book.findById(idBook)
        // }
        return user
    },

    async create (users){
        const user = await User.create(users)
        return user               
    },

    async remove (id){
        const user = await User.remove({id})
        return user
    },

    async update (users){
        const user = await users.save()
        return user
    },

    async addBook (id,name){
       const user = await Users.findOne({_id:id})
       const book = await Book.findOne({name})
       const bookId = book.id
       user.books.push(bookId)
       await user.save()
       return user
    }
}
