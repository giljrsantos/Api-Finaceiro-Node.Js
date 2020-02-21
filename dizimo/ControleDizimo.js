const express = require("express");
const rota = express.Router();
const dizimo = require("./dizimo");
const categoria = require("../categoria/categoria");
const slugify = require("slugify");


rota.get("/dizimo/new", (req, res) =>{
    categoria.findAll().then(categorias => {
        res.render("dizimo/new", { categorias: categorias });
    });

});

rota.get("/dizimo", (req, res) => {
    dizimo.findAll().then( dizimos => {
        res.render("dizimo/index", { dizimos: dizimos});
    });
    
});

rota.post("/dizimo/save", (req, res) => {
    var descricao = req.body.descricao;
    var valorreal = req.body.valorreal;
    //var data = req.body.data;
    //var dataCorreta = new Date(req.body.data); //recuperando a data do formulario
    var dataCorreta = new Date(Date.parse(req.body.data));
    //esse formato esta com erro
    dataCorreta.setTime(dataCorreta.getDate() + (3*60*60*1000)); //somando a data com mais 3 horas
    var valordizimo = (req.body.valorreal/100)*10;
    var slug = slugify(req.body.descricao);
    var cat = req.body.cat;

    if(descricao != undefined && valorreal != undefined && dataCorreta != undefined){
        dizimo.create({

            descricao: descricao,
            valorreal: valorreal,
            data: dataCorreta,
            valordizimo: valordizimo,
            slug: slug,
            categoriumId: cat
            
        }).then(() => {
            res.redirect("/dizimo");
        });
    }else{
        res.redirect("/dizimo/new");
    }
});

module.exports = rota;