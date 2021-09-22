const mongoose = require('mongoose')

const mongoUrl = process.env.MONGOURL || 'mongodb://localhost:27017/DESAFIONOVO'
const options = {useNewUrlParser:true,useUnifiedTopology: true}


mongoose.connect(mongoUrl,options),(err) => {
    if(err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    }else {
        console.log('Connected to Server successfully!');
    }
};

module.exports = mongoose

