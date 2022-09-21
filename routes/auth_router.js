const router = require('express').Router();

router.get('/auth/signin', (req, res) => {
    const data = {
        title: "Sign In"
    };
    res.render('auth/signin', data);
});

router.get('/auth/signup', (req, res) => {
    const data = {
        title: "Sign Up"
    };
    res.render('auth/signup', data);
});

router.post('/auth/signup', (req, res) => {
    res.redirect('/auth/signin');
})

module.exports = router;