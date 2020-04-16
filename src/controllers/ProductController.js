const connection = require('../database/connection'); //string de conexão
const crypto = require('crypto');


module.exports = {
    //Criar novo produto
    async createProduct(request, response) {
        try {
            const { Name, DateDue, AlertDateDue, UserId, Quantity } = request.body; //campos que o json vai aceitar
            const Id = crypto.randomBytes(4).toString('HEX'); //gera um ID automaticamente criptografado
            if (Quantity == null) {
                Quantity = 0
            }
            await connection('Product').insert({
                Id, Name, DateDue, AlertDateDue, UserId, Quantity
            });
            return response.status(201).json({ Id, Name, DateDue, AlertDateDue, UserId, Quantity });
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao cadastrar novo produto.' }) }
    },


    //selecionar todos produtos
    async getAllProduct(request, response) {

        try {
            const AllProduct = await connection('Product').select('*').orderBy('Name');

            return response.status(200).json(AllProduct);
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao pesquisar produtos.' }) }
    },


    //selecionar produto por nome
    async getProductName(request, response) {
        try {
            const { Name } = request.body;
            const ProductName = await connection('Product').where('Name', Name).select('*').first();

            if (ProductName == null) {
                return response.status(404).json({ msg: 'Produto não encontrado.' })
            }

            return response.status(200).json({ ProductName });
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao pesquisar produto.' }) }
    },

    //deletar produto
    async deleteProduct(request, response) {
        try {
            const { Id } = request.params;

            //verificando se o produto existe
            const ProductId = await connection('Product').where('Id', Id).select('Id').first();

            if (ProductId == null) {
                return response.status(404).json({ msg: 'Produto não encontrado.' })
            }

            await connection('Product').where('Id', Id).delete();
            return response.status(202).json({ msg: 'Produto excluído com sucesso!' })

        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao excluir produto.' }) }
    },


    //editar produto
    async putProduct(request, response) {
        try {
            const { Id } = request.params;
            const { Name, DateDue, AlertDateDue, UserId, Quantity } = request.body;

            //verificando se o produto existe
            const ProductId = await connection('Product').where('Id', Id).select('Id').first();

            if (ProductId == null) {
                return response.status(404).json({ msg: 'Produto não encontrado.' })
            }

            await connection('Product').update({
                Name, DateDue, AlertDateDue, UserId, Quantity
            });
            return response.status(201).json({ Id, Name, DateDue, AlertDateDue, UserId, Quantity });
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao editar produto.' }) }
    },

}