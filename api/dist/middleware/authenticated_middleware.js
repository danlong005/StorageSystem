"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectIfLoggedIn = exports.authenticatedMiddleware = void 0;
function authenticatedMiddleware(req, res, next) {
    let session = req.session;
    if (authenticated(session)) {
        next();
    }
    else {
        req.session.previousPage = req.url;
        let message = "You have not signed in.";
        res.redirect(`/auth/signin?message=${message}`);
    }
}
exports.authenticatedMiddleware = authenticatedMiddleware;
function authenticated(session) {
    if (session != null) {
        if (session.authentication != null) {
            if (session.authentication.authenticated) {
                return true;
            }
        }
    }
    return false;
}
function redirectIfLoggedIn(req, res, next) {
    if (typeof req.session.authentication !== 'undefined' && req.session.authentication.authenticated) {
        res.redirect(`/users/${req.session.authentication.id}/bins`);
    }
    else {
        next();
    }
}
exports.redirectIfLoggedIn = redirectIfLoggedIn;
//# sourceMappingURL=authenticated_middleware.js.map