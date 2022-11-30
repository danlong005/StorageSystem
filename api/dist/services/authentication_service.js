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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const models_1 = require("../models");
const crypto_js_1 = __importDefault(require("crypto-js"));
const config_1 = __importDefault(require("../config"));
function authenticate(userRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield models_1.User.findOne({
                where: {
                    email: userRequest.email
                }
            });
            let response = {};
            response.authenticated = false;
            if (user != null) {
                let decryptedPassword = crypto_js_1.default.AES.decrypt(user.password, config_1.default.CRYPTO.KEY);
                if (userRequest.password == decryptedPassword.toString(crypto_js_1.default.enc.Utf8)) {
                    response.user = user.email;
                    response.id = user.id;
                    response.authenticated = true;
                }
            }
            return response;
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return {
                authenticated: false
            };
        }
    });
}
exports.authenticate = authenticate;
;
//# sourceMappingURL=authentication_service.js.map