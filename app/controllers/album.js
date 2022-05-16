const Album = require('../models/album');
const Song = require('../models/song');
const Artist = require('../models/artist');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Album.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const album = await Album.findByPk(req.params.id);
        const songs = await Song.findAll({
            where: {albumId: req.params.id}
        });
        const artist = await Artist.findOne({
            where: {id: album.dataValues.artistId}
        });

        const result = {
            ...album.dataValues,
            artist: artist,
            songs: songs
        }

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getByArtist = async (req, res, next) => {
    try {
        const ALL = await Album.findAll({
            where:{
                artistId: req.params.artistId
            }
        });
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const ALBUM_MODEL = {
            name: req.body.name,
            image: req.body.image,
            price_virtual: req.body.price_virtual,
            price_physical: req.body.price_physical,
            stock: req.body.stock,
            release_year: req.body.release_year,
            artistId: req.body.artistId,
            genreId: req.body.genreId
        }

        try {
            const album = await Album.create(ALBUM_MODEL);
            console.log('album created Successfully');
            return res.status(201).json(album);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateOne = async (req,res,next) => {
    try {
        const ALBUM_MODEL = {
            name: req.body.name,
            image: req.body.image,
            price_virtual: req.body.price_virtual,
            price_physical: req.body.price_physical,
            stock: req.body.stock,
            release_year: req.body.release_year,
            artistId: req.body.artistId,
            genreId: req.body.genre
        }

        try {
            const album = await Album.update(ALBUM_MODEL, {where: {id: req.params.id}});
            return res.status(200).json(album);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const album = await Album.destroy({where: {id: req.params.id}});
        return res.status(200).json(album);
    } catch (error) {
        return res.status(500).json(error);
    }
}

