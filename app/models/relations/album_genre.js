const Sequelize = require('sequelize');
const sequelize = require('../../util/database');
const Album = require('../album');
const Genre = require('../genre');

const AlbumGenre = sequelize.define('album_genre', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
});

Album.belongsToMany(Genre, {through: AlbumGenre});
Genre.belongsToMany(Album, {through: AlbumGenre});


module.exports = AlbumGenre;