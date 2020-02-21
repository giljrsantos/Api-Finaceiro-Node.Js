const Sequelize = require('sequelize');
const connection = require('../database/database');

const categoria = connection.define('categoria', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '1'
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//categoria.sync({ force: true });

module.exports = categoria;