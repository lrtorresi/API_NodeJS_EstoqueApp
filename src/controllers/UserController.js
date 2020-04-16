const connection = require('../database/connection'); //string de conexão
const crypto = require('crypto');

//Funções executadas (chamadas pelas Rotas)
module.exports = {


    //selecionar todos usuarios
    async getAllUser(request, response) {
        try {
            const AllUser = await connection('User').select('*').orderBy('Name');
            return response.status(201).json(AllUser);
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao pesquisar usuarios.' }) }
    },


    //selecionar apenas 1 usuario pelo ID
    async getUserById(request, response) {
        try {
            const { Id } = request.params;

            const UserById = await connection('User').where('Id', Id).select('*');
            return response.json(UserById);
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao selecionar usuario.' }) }
    },


    //selecionar usuario pelo E-mail e Senha
    async getUserLogin(request, response) {
        try {
            const { Email, Password } = request.body; //campos que o json vai aceitar

            const UserLogin = await connection('User').where('Email', Email).where('Password', Password).select('Id', 'Email');

            if(UserLogin == ''){
                return response.status(400).json({ msg: 'Usuario não encontrado.' })
            }
            
            return response.json(UserLogin);
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao selecionar usuario.' }) }
    },


    //deletar usuario
    async deleteUser(request, response) {
        try {
            const { Id } = request.params;

            //verificando se o usuario existe
            const user = await connection('User').where('Id', Id).select('Id').first();

            if (user.Id != Id) {
                return response.status(401).json({ Error: 'Usario não foi encontrado.' })
            }

            await connection('User').where('Id', Id).delete();
            return response.status(202).json({ msg: 'Usuario excluido com sucesso!' })

        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao excluir usuario.' }) }
    },


    //Criar novo usuario
    async createUser(request, response) {
        try {
            const { Name, Cnpj, NameStore, Cep, Address, Email, Password, SegmentStore } = request.body; //campos que o json vai aceitar
            const Id = crypto.randomBytes(4).toString('HEX'); //gera um ID automaticamente criptografado

            await connection('User').insert({
                Id, Name, Cnpj, NameStore, Cep, Address, Email, Password, SegmentStore,
            });
            return response.status(201).json({ Id, Name, Cnpj, NameStore, Cep, Address, Email, Password, SegmentStore });
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao cadastrar novo usuario.' }) }
    },




};