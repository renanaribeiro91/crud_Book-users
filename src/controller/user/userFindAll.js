const {findAll} = require('../../repository/userRepository')

module.exports = {
    async userFindAll (req,res){
    try{
        const user = await findAll()
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({menssege:"error"+err})
    }
      
    }
}