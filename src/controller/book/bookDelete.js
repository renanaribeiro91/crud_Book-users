const {remove} = require("../../repository/bookRepository")
const {findOne} = require('../../repository/bookRepository')

module.exports = {

    async bookDelete (req,res){
      try{
        const { id } = req.params
        await findOne(id)
        await remove(id)
        return res.status(200).send({menssage:`Livro ${$} deletado`})
      }catch(err){
          res.status(400).send({error:'Erro ao buscar livro ' +err})

      }
    }
}