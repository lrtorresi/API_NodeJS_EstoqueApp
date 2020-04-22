const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const SegmentController = require('./controllers/SegmentController');
const ProductController = require('./controllers/ProductController');



////////////////////////////////////// Usuarios //////////////////////////////////////
//Selecionar todos usuarios
routes.get('/users', UserController.getAllUser);

//selecionar usuario pelo ID
routes.get('/user/:Id', UserController.getUserById);

//Criar novo usuario
routes.post('/user/newUser', UserController.createUser);

//Deletar usuario
routes.delete('/User/:Id', UserController.deleteUser);

//Login do usuario (E-mail e Senha)
routes.post('/user/login', UserController.getUserLogin);

//Enviar a senha do usuario por e-mail
routes.post('/user/recoverPassword', UserController.recoverPasswordUser);

////////////////////////////////////// Segmentos //////////////////////////////////////
//Criar novo segmento
routes.post('/Segment', SegmentController.createSegment);

//Selecionar todos segmentos
routes.get('/Segments', SegmentController.selectAllSegment);

//deletar segmento
routes.delete('/Segment/:Id', SegmentController.deleteSegmento);



////////////////////////////////////// Produtos //////////////////////////////////////
//Criar novo produto
routes.post('/Product', ProductController.createProduct);

//Selecionar todos os produtos
routes.get('/Products', ProductController.getAllProduct);

//Selecionar produto por Codigo do Usuario
routes.get('/Products/:Id', ProductController.getProductUserId);

//Selecionar produto por nome
routes.get('/Product', ProductController.getProductName);  

//deletar produto
routes.delete('/Product/:Id', ProductController.deleteProduct);

//Editar produto
routes.put('/Product/:Id', ProductController.putProduct);




//exportando as rotas
module.exports = routes;
