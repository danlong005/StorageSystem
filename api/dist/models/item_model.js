"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
const Item = database_1.default.define('item', {
    binId: {
        type: sequelize_1.DataTypes.BIGINT
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    }
}, {});
exports.default = Item;
//# sourceMappingURL=item_model.js.map