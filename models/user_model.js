const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{});

module.exports = User;