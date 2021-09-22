const {findAll} = require('../../repository/bookRepository')

module.exports = {
    async bookFindAll (req,res){
    try{
    const book = await findAll()
    return res.status(200).send(book)
    }catch(err){
    return res.status(500).send({menssege:"error"})
    }
      
    }
}