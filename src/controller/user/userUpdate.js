const {findOne} = require('../../repository/userRepository')
const {update} = require('../../repository/userRepository')

module.exports = {

async updateUser(req,res){
    try{
        const { id } = req.params
        const { age } = req.body
        const user = await findOne(id)
        user.age = age
        await update(user)
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send('erro ao atualizar')    
    }
}
}