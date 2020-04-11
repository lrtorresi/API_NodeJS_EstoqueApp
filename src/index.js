const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(cors());
app.use(express.json()); //Para aceitar Request do tipo JSON
app.use(routes);

app.listen(3333); //Porta que vai rodar o NODEJS