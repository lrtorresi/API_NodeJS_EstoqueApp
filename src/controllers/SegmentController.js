const connection = require('../database/connection'); //string de conexão
const crypto = require('crypto');

module.exports = {


    //Criar segmentos
    async createSegment(request, response) {
        try {
            const { Segment } = request.body; //campos que o json vai aceitar
            const Id = crypto.randomBytes(4).toString('HEX'); //gera um ID automaticamente criptografado

            await connection('Segment').insert({
                Id, Segment,
            });
            return response.status(201).json({ Id, Segment });
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao cadastrar novo segmento.' }) }
    },


    //Selecionar todos os segmentos
    async selectAllSegment(request, response) {
        try {
            const AllSegement = await connection('Segment').select('*').orderBy('Segment');
            return response.status(200).json(AllSegement);
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao cadastrar ao exibir Segmentos.' }) }
    },

    //Apagar segmento
    async deleteSegmento(request, response) {
        try {
            const { Id } = request.params;

            //verificando se o segmento existe
            const segmentId = await connection('Segment').where('Id', Id).select('Id').first();

            if (segmentId.Id != Id) {
                return response.status(401).json({ Error: 'Segmento não foi encontrado.' })
            }

            await connection('Segment').where('Id', Id).delete();
            return response.status(202).json({ msg: 'Segmento excluido com sucesso!' })
        }
        catch (ex) { return response.status(400).json({ msg: 'Erro ao excluir Segmento.' }) }

    },
};