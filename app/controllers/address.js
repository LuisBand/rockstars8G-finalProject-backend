const Address = require('../models/address');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Address.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const address = await Address.findByPk(req.params.id);
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const ADDRESS_MODEL = {
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            street: req.body.street,
            number: req.body.number,
            zip_code: req.body.zip_code,
            phone_number: req.body.phone_number,
        }

        try {
            const address = await Address.create(ADDRESS_MODEL);
            console.log('Address created Successfully');
            return res.status(201).json(address);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateOne = async (req,res,next) => {
    try {
        const ADDRESS_MODEL = {
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            street: req.body.street,
            number: req.body.number,
            zip_code: req.body.zip_code,
            phone_number: req.body.phone_number,
        }

        try {
            const address  = await Address.update(ADDRESS_MODEL, {where: {id: req.params.id}});
            return res.status(200).json(address);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

