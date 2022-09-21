const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Item = sequelize.define('item', {
    binId: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
},{});

module.exports = Item;