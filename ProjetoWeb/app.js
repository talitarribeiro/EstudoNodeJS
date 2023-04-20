const express = require("express")
const app = express()
const handlebars = require ("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")


//Engine
app.engine("handlebars", handlebars ({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Body-Parser
app.use(bodyParser.urlencoded({extend: false}))
app.set(bodyParser.json())

app.get ("/", function(req, res){
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req,res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_cadastro: req.body.data_cadastro,
        observacao: req.body.observacao
    }).then(function(){
        res.send("Dados enviados com sucesso!")
    }).catch(function(erro){
        res.send("Falha ao cadastrar: " + erro)
    })
})

app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("segunda_pagina", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados:" + erro)
    })
})

//Excluir
app.get("/excluir/:id", function(req, res){
    post.destroy({ where:{'id': req.params.id}}).then(function(){
        res.render("/primeira_pagina")
    }).catch(function(erro){
        console.log("Erro ao excluir ou encontrar os dados do banco:" + erro);
    })
  
})

//Segunda Página
app.get("/segunda", function(req, res){
    res.render("segunda_pagina")
})

//Porta 8081
app.listen(8081, function(){
    console.log("Servidor ativo!")
})
