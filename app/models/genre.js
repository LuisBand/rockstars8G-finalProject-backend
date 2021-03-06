const Sequelize = require('sequelize');
const sequelize = require('../util/database')
const Genre = sequelize.define('Genre',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Genre;
