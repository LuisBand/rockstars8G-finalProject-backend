const Address = require('../address');
const User = require('../users');
const Sequelize = require('sequelize');
const sequelize = require('../../util/database');

const UserAdress = sequelize.define('user_address',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

Address.belongsToMany(User, {through: UserAdress});
User.belongsToMany(Address, {through: UserAdress});
module.exports= UserAdress;