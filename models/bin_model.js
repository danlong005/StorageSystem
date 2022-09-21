const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Item = require('./item_model');
const User = require('./user_model');

const Bin = sequelize.define('bin', {
    name: {
        type: DataTypes.STRING
    }
},{});

// associations
Bin.hasMany(Item);
Bin.hasOne(User);

module.exports = Bin;