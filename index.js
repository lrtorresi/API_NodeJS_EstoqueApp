const express = require('express');
const app = express();
const routes = require('./src/routes');
const cors = require('cors');


app.use(cors());
app.use(express.json()); //Para aceitar Request do tipo JSON
app.use(routes);

//app.listen(3333); //Porta que vai rodar o NODEJS

app.listen(process.env.PORT || 3333, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  
app.get('/', function(req, res){
    res.redirect('/API_Estoque');
 });