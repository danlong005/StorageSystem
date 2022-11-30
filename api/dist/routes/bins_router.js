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
const bins_service_1 = require("../services/bins_service");
const express_1 = require("express");
const router = (0, express_1.Router)();
// return a list of bins
router.get('/users/:id/bins', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bins = yield (0, bins_service_1.getBins)();
    const data = {
        bins,
        title: "List Bins",
        authentication: req.session.authentication
    };
    res.render('bins/index', data);
}));
// show the page for entering the new bin
router.get('/users/:id/bins/new', (req, res) => {
    const data = {
        title: "Create Bin",
        id: req.params.id,
        authentication: req.session.authentication
    };
    res.render('bins/new', data);
});
// submit the form for the new bin creation
router.post('/users/:id/bins/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newBin = yield (0, bins_service_1.createBin)(req.body);
    const data = {
        title: "Bin Created",
        bin: newBin,
        id: req.params.id,
        authentication: req.session.authentication
    };
    res.render("bins/create", data);
}));
// find the specific bin and display the contents
router.get('/users/:id/bins/:binId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const binId = req.params.binId;
    const bin = yield (0, bins_service_1.getBinById)(binId);
    const data = {
        bin,
        title: `List Bin ${bin.name}`,
        authentication: req.session.authentication
    };
    res.render('bins/show', data);
}));
exports.default = router;
//# sourceMappingURL=bins_router.js.map