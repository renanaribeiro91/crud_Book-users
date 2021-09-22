const {create} = require('../../repository/userRepository')

module.exports = {

    async createUser (req,res){
    try{
        const user = await create(req.body)
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({menssege:"error"})
    }
   
}
}





