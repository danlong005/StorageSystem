const router = require('express').Router();

router.get('', (req, res) => {
    const data = {
        title: "Home"
    };
    res.render('home/index', data);
})

module.exports = router;