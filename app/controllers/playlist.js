const Playlist = require('../models/playlist');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Playlist.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const result = await Playlist.findByPk(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const MODEL = {
            name: req.body.name,
            userId: req.body.userId,
        }

        try {
            const result = await Playlist.create(MODEL);
            console.log('Playlist created Successfully');
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateOne = async (req,res,next) => {
    try {
        const MODEL = {
            name: req.body.name,
            userId: req.body.userId,
        }

        try {
            const response  = await Playlist.update(MODEL, {where: {id: req.params.id}});
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const response = await Playlist.destroy({where: {id: req.params.id}});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}