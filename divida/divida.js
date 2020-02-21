const Sequelize = require("sequelize");
const connection = require("../database/database");
const categoria = require("../categoria/categoria");

const divida = connection.define('divida', {
    dividendo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_divida: {
        type:Sequelize.DECIMAL(17,2),
        allowNull: false
    },
    data_divida: {
        type: Sequelize.DATE,
        allowNull: false
    },
    situacao:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

categoria.hasMany(divida);
//divida.sync({ force: true });
module.exports = divida;