const User = require('../models/users');
const Address = require('../models/address');


exports.getAll = async (req, res, next) => {
    try {
        const ALL = await User.findAll({
            // attributes: {
            //     include: [{
            //         model: Address,
            //         as: 'address' 
            //     }]
            // }
        });
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {id: req.params.id},
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createOne = async (req,res, next) => {
    try {
        const USER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        try {
            const user = await User.create(USER_MODEL);
            console.log('User created Successfully');
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateOne = async (req,res,next) => {
    try {
        const USER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        try {
            const user  = await User.update(USER_MODEL, {where: {id: req.params.id}});
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }

    } catch (error) {
        
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const user = await User.destroy({where: {id: req.params.id}});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getDirections = async(req, res) => {
    try{
        const response = await Address.findAll({where: {userId: req.body.userId}});
        return res.status(200).json(response);
    }catch(error){
        return res.status(500).json(error);
    }
}