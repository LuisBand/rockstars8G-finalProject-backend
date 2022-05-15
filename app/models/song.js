const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Song = sequelize.define('Song',{
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
        type: Sequelize.STRING,
        allowNull: false,
    },
    preview: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    albumId:{
        type: Sequelize.INTEGER,
        references:{
            model: 'Albums',
            key: 'id'
        }
    },
    genreId:{
        type: Sequelize.INTEGER,
        references:{
            model: 'Genres',
            key: 'id'
        }
    }
})

module.exports = Song;