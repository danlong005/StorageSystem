const router = require('express').Router();
const { authenticate } = require('../services/authentication_service');
const { createUser } = require('../services/user_service');

router.get('/auth/signin', (req, res) => {
    const data = {
        title: "Sign In",
        message: req.query.message
    };
    res.render('auth/signin', data);
});

router.get('/auth/signup', (req, res) => {
    const data = {
        title: "Sign Up",
        message: req.query.message
    };
    res.render('auth/signup', data);
});

router.post('/auth/signup', async (req, res) => {
    let user = await createUser(req.body);

    let error = user.error;

    if (error == null) {
        res.redirect('/auth/signin');
    } else {
        let message = 'Could not create user';
        res.redirect(`/auth/signup?message=${message}`);
    }
});

router.post('/auth/signin', async (req, res) => {
    let authentication = await authenticate(req.body);
    console.log(authentication);
    req.session.authentication = authentication;

    if (authentication.authenticated) {
        res.redirect(`/users/${authentication.id}/bins`);
    } else {
        let message = `Something is wrong with your username and password combo`;
        res.redirect(`/auth/signin?message=${message}`);
    }
});

router.get(`/auth/signout`, (req, res) => {
    req.session.destroy();
    let message = `You have been logged out`;
    res.redirect(`/auth/signin?message=${message}`);
})

module.exports = router;