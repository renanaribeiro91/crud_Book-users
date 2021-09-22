const {findOne} = require('../../repository/userRepository')

module.exports = {
    async findOne (req,res){
        try{
        const {id} = req.params
        const user = await findOne(id)
        return res.status(200).send(user)
        }catch(err){
        return res.status(500).send({menssege:"error"})
        }
        
    }
}