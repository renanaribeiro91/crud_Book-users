const {findOne} = require('../../repository/bookRepository')

module.exports = {
    async bookFindOne (req,res){
        try{
        const {id} = req.params
        const book = await findOne(id)
        return res.status(200).send(book)
        }catch(err){
        return res.status(500).send({menssege:"error"})
        }
        
    }
}