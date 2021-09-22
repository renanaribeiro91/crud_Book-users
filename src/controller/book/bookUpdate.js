const {findOne} = require('../../repository/bookRepository')
const {update} = require('../../repository/bookRepository')

module.exports = {

async updateBook(req,res){
    try{
        const { id } = req.params
        const { year } = req.body
        const book = await findOne(id)
        book.year = year
        await update(book)
        return res.status(200).send(book)
    }catch(err){
        return res.status(500).send('erro ao atualizar')
    
    }
}
}