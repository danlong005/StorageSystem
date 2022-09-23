
function authenticatedMiddleware(req, res, next) {
    let session = req.session;

    if (authenticated(session)) {
        next();
    } else {
        req.session.previousPage = req.url;
        let message = "You have not signed in.";
        res.redirect(`/auth/signin?message=${message}`);
    }
}

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

module.exports = authenticatedMiddleware;