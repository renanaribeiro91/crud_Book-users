const {addBook} = require('../../repository/userRepository')

module.exports = {

    async addBookUser (req,res){
        try{
            const {id} = req.params
            const {name} = req.body
            const add = await addBook(id,name)
            return res.status(200).send(add)
        }catch(err){
            return res.status(500).send({menssege:"error"})
        }
        
    }
}