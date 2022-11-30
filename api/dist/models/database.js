"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(config_1.default.DB.NAME, config_1.default.DB.USER, config_1.default.DB.PASSWORD, {
    host: config_1.default.DB.HOST,
    dialect: "postgres",
    pool: {
        max: config_1.default.DB.POOL.MAX,
        min: config_1.default.DB.POOL.MIN,
        acquire: config_1.default.DB.POOL.ACQUIRE,
        idle: config_1.default.DB.POOL.IDLE
    }
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map