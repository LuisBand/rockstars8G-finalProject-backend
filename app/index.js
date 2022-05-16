// need to keep this also if i'm not using them because it makes sequelize create this tables
//MODELS
const Album = require('./models/album');
const Genre = require('./models/genre');
const Song = require('./models/song');
const User = require('./models/users');
const Address = require('./models/address');
const Artist = require('./models/artist');
//RELATIONS
// const UserAdress = require('./models/relations/user_address');
const UserSong = require('./models/relations/user_song');

//ROUTES
const login = require('./routes/login')
const dev = require('./routes/dev');

const album = require('./routes/album');
const genre = require('./routes/genre');
const song = require('./routes/song');
const users = require('./routes/users');
const address = require('./routes/address');
const artist = require('./routes/artist');


//Here is where the configutation of app starts
const express = require('express');
const cors = require('cors');
const sequelize = require('./util/database');
const app  = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const options = {
    definition: {
        openapi: '3.0.0',
        info:{
            tittle: 'Node JS API project for rockstars 8g',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:9022/'
            }
        ]
    },
    apis:[
        './controllers/address.js'
    ]
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not.
 *      description: This api is used to check if get method is working or not.
 *      responses:
 *          200:
 *              description: To test Get method
 */
app.get('/', (req, resp) => {
    resp.send('Welcome to musirockstars API')
})

app.use('/login', login);
app.use('/dev', dev);
app.use('/users', users);
app.use('/address', address);
app.use('/album', album);
app.use('/genre', genre);
app.use('/song', song);
app.use('/artist', artist);

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