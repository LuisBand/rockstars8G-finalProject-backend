const Genre = require('../models/genre');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Genre.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const result = await Genre.findByPk(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const MODEL = {
            name: req.body.name,
            description: req.body.description,
        }

        try {
            const result = await Genre.create(MODEL);
            console.log('Genre created Successfully');
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
            description: req.body.description,
        }

        try {
            const response  = await Genre.update(MODEL, {where: {id: req.params.id}});
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const response = await Genre.destroy({where: {id: req.params.id}});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}