const Sequelize = require('sequelize');
const connection = require('../database/database');

const usuario = connection.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//usuario.sync({ force: true });
module.exports = usuario;