const Sequelize = require("sequelize");
const connection = require("../database/database");
const categoria = require("../categoria/categoria");

const dizimo = connection.define('dizimo', {

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorreal: {
        type: Sequelize.DECIMAL(17,2),
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    valordizimo: {
        type: Sequelize.DECIMAL(17,2),
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }

});
categoria.hasMany(dizimo);
//dizimo.sync({ force: true });
module.exports = dizimo;