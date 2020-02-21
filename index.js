const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port= 3000;

const connection = require('./database/database');
const categoria = require('./categoria/categoria');
const dizimo = require("./dizimo/dizimo");
const controledizimo = require("./dizimo/ControleDizimo");
const controlecategoria = require('./categoria/ControleCategoria');
const controledivida = require('./divida/ControleDivida');
const usuario = require('./usuario/ususario');
const slugify = require("slugify");

//view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Session
app.use(session({
    secret: "qualquercoisa", cookie: {maxAge: 3000000}
}));

//Estatico
app.use(express.static('public'));

//Body Parser
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

//DataBase
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    });

app.use("/", controlecategoria);
app.use("/", controledizimo);
app.use("/", controledivida);

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("App rodando na porta 3000");
    }
})