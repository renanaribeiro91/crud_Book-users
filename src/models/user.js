const { Schema,model } = require('mongoose')                  

const UserSchema = new Schema({

    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required: true,
        select: false                                             
    },
    email:{
        type:String,
        required: true
    },
    books:[{
        type:Schema.Types.ObjectId,
        ref:'Books'
    }]
    

},{timestamps:true})



module.exports = model('Users',UserSchema)
