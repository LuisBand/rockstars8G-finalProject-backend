// need to keep this also if i'm not using them because it makes sequelize create this tables
//MODELS
const Album = require('./models/album');
const Genre = require('./models/genre');
const Song = require('./models/song');
const User = require('./models/users');
const Address = require('./models/address');
const Artist = require('./models/artist');
const Playlist = require('./models/playlist');
//RELATIONS
const UserAdress = require('./models/relations/user_address');
const UserSong = require('./models/relations/user_song');
const PlaylistSong = require('./models/relations/playlist_song');
const ArtistAlbum = require('./models/relations/artist_album');
const AlbumGenre = require('./models/relations/album_genre');


//Here is where the configutation of app starts
const express = require('express');
const sequelize = require('./util/database');
const app  = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

app.use('/dev', require('./routes/dev'));
app.use('/users', require('./routes/users'));
app.use('/address', require('./routes/address'));

(async () => {
    try {
        await sequelize.sync(
            {force: false}
        );
        console.log('connection established Successfully');
        app.listen(process.env.EXTERNAL_PORT || 5522) 
    } catch (error) {
        console.error(error);
    }
})();