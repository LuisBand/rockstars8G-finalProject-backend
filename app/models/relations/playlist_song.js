const Sequelize = require('sequelize');
const sequelize = require('../../util/database');
const Playlist = require('../playlist');
const Song = require('../song');

const PlaylistSong = sequelize.define('playlist_song',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

Playlist.belongsToMany(Song, {through: PlaylistSong});
Song.belongsToMany(Playlist, {through: PlaylistSong});
module.exports= PlaylistSong;