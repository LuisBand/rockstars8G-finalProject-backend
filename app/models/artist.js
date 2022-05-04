const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Artist = sequelize.define('artist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nationality:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    topfive:{
        type: Sequelize.JSON,
        allowNull: true
    }
})

module.exports = Artist;