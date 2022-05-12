const Song = require('../models/song');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Song.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const song = await Song.findByPk(req.params.id);
        return res.status(200).json(song);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const SONG_MODEL = {
            name: req.body.name,
            duration: req.body.duration,
            file: req.body.file,
            preview: req.body.preview,
            price: req.body.price,
            albumId: req.body.albumId,
            genreId: req.body.genreId,
        }

        try {
            const song = await Song.create(SONG_MODEL);
            console.log('Song created Successfully');
            return res.status(201).json(song);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateOne = async (req,res,next) => {
    try {
        const SONG_MODEL = {
            name: req.body.name,
            duration: req.body.duration,
            file: req.body.file,
            preview: req.body.preview,
            price: req.body.price,
            albumId: req.body.albumId,
            genreId: req.body.genreId,
        }

        try {
            const song  = await Song.update(SONG_MODEL, {where: {id: req.params.id}});
            return res.status(200).json(song);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const song = await Song.destroy({where: {id: req.params.id}});
        return res.status(200).json(song);
    } catch (error) {
        return res.status(500).json(error);
    }
}

