"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
const item_model_1 = __importDefault(require("./item_model"));
const user_model_1 = __importDefault(require("./user_model"));
const Bin = database_1.default.define('bin', {
    name: {
        type: sequelize_1.DataTypes.STRING
    }
}, {});
// associations
Bin.hasMany(item_model_1.default);
user_model_1.default.hasMany(Bin);
exports.default = Bin;
//# sourceMappingURL=bin_model.js.map