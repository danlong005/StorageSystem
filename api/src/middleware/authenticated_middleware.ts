
function authenticatedMiddleware(req: any, res: any, next: any) {
    const session = req.session;

    if (authenticated(session)) {
        next();
    } else {
        req.session.previousPage = req.url;
        const message = "You have not signed in.";
        res.redirect(`/auth/signin?message=${message}`);
    }
}

function authenticated(session: any) {
    if (session != null) {
        if (session.authentication != null) {
            if (session.authentication.authenticated) {
                return true;
            }
        }
    }

    return false;
}

function redirectIfLoggedIn(req: any, res: any, next: any) {
    if (typeof req.session.authentication !== 'undefined' && req.session.authentication.authenticated) {
        res.redirect(`/users/${req.session.authentication.id}/bins`);
    } else {
        next();
    }
}

export {
    authenticatedMiddleware,
    redirectIfLoggedIn
}