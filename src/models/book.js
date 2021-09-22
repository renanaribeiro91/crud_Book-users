const { Schema,model } = require('mongoose')
 

const BooksSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    number_pages:{
        type:Number,
        required:true
    },
    prices:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
       
},{timestamps:true})

module.exports = model('Books',BooksSchema)