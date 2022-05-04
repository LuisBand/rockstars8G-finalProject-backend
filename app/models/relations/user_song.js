const Sequelize = require('sequelize');
const sequelize = require('../../util/database');
const User = require('../users');
const Song = require('../song');

const UserSong = sequelize.define('user_song',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

User.belongsToMany(Song, {through: UserSong});
Song.belongsToMany(User, {through: UserSong});
module.exports= UserSong;