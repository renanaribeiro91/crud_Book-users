const {create} = require('../../repository/bookRepository')

module.exports = {

    async createBook (req,res){
    try{
        const book = await create(req.body)
        return res.status(200).send(book)
    }catch(err){
        return res.status(500).send({menssege:"error"})
    }
   
}
}





