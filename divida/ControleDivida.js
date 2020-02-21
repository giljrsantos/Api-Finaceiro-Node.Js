const express = require("express");
const rota = express.Router();
const divida = require("./divida");
const connection = require("../database/database");
const categoria = require("../categoria/categoria");
const slugify = require("slugify");


//rota principal
rota.get("/divida", (req, res) => {
    divida.findAll().then( dividas => {
        res.render("divida/index", { dividas: dividas });
    });
});

//rota de cadastro
rota.get("/divida/new", (req, res) => {
    categoria.findAll().then( categorias => {
        res.render("divida/new", { categorias: categorias });
    });
});

//rota salvar
rota.post("/divida/save", (req, res) => {
    var dividendo = req.body.dividendo;
    var valor_divida = req.body.valor_divida;
    //var data_divida = req.body.data_divida;
    var dataCorreta = new Date(req.body.data_divida); //recuperando a data do formulario
    dataCorreta.setTime(dataCorreta.getDate() + (3*60*60*1000)); //somando a data com mais 3 horas;     
    var cat = req.body.cat;

    if(dividendo != undefined || valor_divida != undefined || dataCorreta != undefined){
        divida.create({

            dividendo: dividendo,
            valor_divida: valor_divida,
            data_divida: dataCorreta,
            categoriumId: cat

        }).then(() => {
            res.redirect("/divida");
        });
    }else{
        res.redirect("/divida/new")
    }

});


module.exports = rota;