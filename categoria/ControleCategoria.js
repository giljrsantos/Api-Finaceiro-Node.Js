const express = require("express");
const rota = express.Router();
const categoria = require("./categoria");
const slugify = require("slugify");

//Rota para entrar no formulario de Cadastrar
rota.get("/categoria/new", (req, res) => {
    res.render("categoria/new");
});

//Rota para salvar a categoria
rota.post("/categoria/save", (req, res) => {

    var titulo = req.body.titulo;
    if(titulo != undefined){
        categoria.create({
            titulo: titulo,
            slug: slugify(titulo)
        }).then(() => {
            res.redirect("/categoria");
        });
    }else{
        res.redirect("/categoria/new");
    }    

});

rota.get("/categoria", (req, res) => {
    categoria.findAll().then(categorias => {
        res.render("categoria/index", { categorias: categorias});
    });
});

module.exports = rota;

