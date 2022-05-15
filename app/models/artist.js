const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Artist = sequelize.define('Artist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nationality:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true
    },
    topfive:{
        type: Sequelize.JSON,
        allowNull: true
    }
})

module.exports = Artist;