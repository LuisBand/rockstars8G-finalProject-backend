const Sequelize = require('sequelize');;
const sequelize = require('../util/database');

const Address = sequelize.define('address', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    country:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    is_default: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = Address;