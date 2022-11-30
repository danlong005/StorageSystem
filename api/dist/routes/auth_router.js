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
const express_1 = require("express");
const authentication_service_1 = require("../services/authentication_service");
const authenticated_middleware_1 = require("../middleware/authenticated_middleware");
const user_service_1 = require("../services/user_service");
const router = (0, express_1.Router)();
router.get('/auth/signin', authenticated_middleware_1.redirectIfLoggedIn, (req, res) => {
    const data = {
        title: "Sign In",
        message: req.query.message
    };
    res.render('auth/signin', data);
});
router.get('/auth/signup', authenticated_middleware_1.redirectIfLoggedIn, (req, res) => {
    const data = {
        title: "Sign Up",
        message: req.query.message
    };
    res.render('auth/signup', data);
});
router.post('/auth/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield (0, user_service_1.createUser)(req.body);
    let error = user.error;
    if (error == null) {
        res.redirect('/auth/signin');
    }
    else {
        let message = 'Could not create user';
        res.redirect(`/auth/signup?message=${message}`);
    }
}));
router.post('/auth/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let authentication = yield (0, authentication_service_1.authenticate)(req.body);
    req.session.authentication = authentication;
    if (authentication.authenticated) {
        res.redirect(`/users/${authentication.id}/bins`);
    }
    else {
        let message = `Something is wrong with your username and password combo`;
        res.redirect(`/auth/signin?message=${message}`);
    }
}));
router.get(`/auth/signout`, (req, res) => {
    req.session.destroy();
    let message = `You have been logged out`;
    res.redirect(`/auth/signin?message=${message}`);
});
exports.default = router;
//# sourceMappingURL=auth_router.js.map