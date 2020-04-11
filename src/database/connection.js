//Arquivo para conectar ao banco de dados (BD utilizado = MySql)

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //pegando a conexão do arquivo knex.js
module.exports = connection; //exportando a conexão