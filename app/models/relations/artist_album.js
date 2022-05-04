const Sequelize = require('sequelize');
const sequelize = require('../../util/database');
const Artist = require('../artist');
const Album = require('../album');

const ArtistAlbum = sequelize.define('artist_album',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }
})

Artist.belongsToMany(Album, {through: ArtistAlbum});
Album.belongsToMany(Artist, {through: ArtistAlbum});
module.exports = ArtistAlbum