"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('', (req, res) => {
    const data = {
        title: "Home"
    };
    res.render('home/index', data);
});
exports.default = router;
//# sourceMappingURL=home_router.js.map