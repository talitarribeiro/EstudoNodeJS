const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.STRING
    }
})

//Agendamentos.sync({force: true})

/*Agendamentos.create({
    nome: "Talita Ribeiro",
    endereco: "Rua das Flores",
    bairro: "Praça da Arvore",
    cep: 12345678,
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Teste para aula"
})*/

module.exports = Agendamentos