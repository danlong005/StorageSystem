const config = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    host: config.DB.HOST,
    dialect: "postgres",
    operatorsAliases: false,
    pool: {
        max: config.DB.POOL.MAX,
        min: config.DB.POOL.MIN,
        acquire: config.DB.POOL.ACQUIRE,
        idle: config.DB.POOL.IDLE
    }
});

module.exports = sequelize;
