const Album = require('../models/album');

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
        return res.status(200).json(album);
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
            release: req.body.release,
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
            release: req.body.release,
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

