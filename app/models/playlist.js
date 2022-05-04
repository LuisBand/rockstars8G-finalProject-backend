const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Playlist = sequelize.define('playlist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references:{
            model: 'users',
            key: 'id'
        }
    }
});

module.exports= Playlist;