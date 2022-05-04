const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Song = sequelize.define('song',{
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
    duration: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    file: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    preview: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    albumId:{
        type: Sequelize.INTEGER,
        references:{
            model: 'albums',
            key: 'id'
        }
    },
    genreId:{
        type: Sequelize.INTEGER,
        references:{
            model: 'genres',
            key: 'id'
        }
    }
})

module.exports = Song;