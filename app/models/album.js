const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Album = sequelize.define('album',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price_virtual: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    price_physical: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    stock:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    release: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
})
module.exports = Album;