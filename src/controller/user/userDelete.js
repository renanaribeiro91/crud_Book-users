const {remove} = require('../../repository/userRepository')
const {findOne} = require('../../repository/userRepository')

module.exports = {

    async userDelete (req,res){
      try{
        const { id } = req.params
        await findOne(id)
        await remove(id)
        return res.status(200).send({menssage:`Usuário ${id} deletado`})

      }catch(err){
        res.status(400).send({error:'Erro ao buscar usuário ' +err})
      
    }
}
}