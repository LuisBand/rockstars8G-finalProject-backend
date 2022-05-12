const Artist = require('../models/artist');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Artist.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const result = await Artist.findByPk(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const MODEL = {
            name: req.body.name,
            image: req.body.image,
            nationality: req.body.nationality,
            description: req.body.description,
            topFive: req.body.topFive,
        }

        try {
            const result = await Artist.create(MODEL);
            console.log('Artist created Successfully');
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
            image: req.body.image,
            nationality: req.body.nationality,
            description: req.body.description,
            topFive: req.body.topFive,
        }

        try {
            const response  = await Artist.update(MODEL, {where: {id: req.params.id}});
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const response = await Artist.destroy({where: {id: req.params.id}});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}