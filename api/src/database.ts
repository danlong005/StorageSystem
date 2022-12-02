import config from './config';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
    host: config.DB.HOST,
    dialect: "postgres",
    pool: {
        max: config.DB.POOL.MAX,
        min: config.DB.POOL.MIN,
        acquire: config.DB.POOL.ACQUIRE,
        idle: config.DB.POOL.IDLE
    }
});

export default sequelize;
