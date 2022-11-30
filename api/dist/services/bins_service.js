"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBins = exports.createBin = exports.getBinById = exports.getBins = void 0;
const models_1 = require("../models");
function getBins() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield models_1.Bin.findAll({ include: models_1.Item });
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return [];
        }
    });
}
exports.getBins = getBins;
function getBinById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield models_1.Bin.findByPk(id, { include: models_1.Item });
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return {};
        }
    });
}
exports.getBinById = getBinById;
function createBin(newBin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (Array.isArray(newBin.items)) {
                newBin.items = newBin.items.map((item) => {
                    return {
                        name: item
                    };
                });
            }
            else {
                newBin.items = [{
                        name: newBin.items
                    }];
            }
            console.log(newBin);
            return yield models_1.Bin.create(newBin, {
                include: [models_1.Item]
            });
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return {};
        }
    });
}
exports.createBin = createBin;
function searchBins(userId, search) {
    return __awaiter(this, void 0, void 0, function* () {
        // let q = `%${search}%`;
        // const [items, metadata] = await sequelize.query(
        //     `SELECT i.name, b.name FROM bins AS b JOIN items AS i
        //         on i."binId" == b.id
        //      WHERE b."userId" == ${userId}
        //      AND   i.name like ${q}`);
        //
        // return items;
        return [];
    });
}
exports.searchBins = searchBins;
//# sourceMappingURL=bins_service.js.map