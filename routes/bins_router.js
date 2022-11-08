const {getBins, getBinById, createBin} = require("../services/bins_service");
const router = require('express').Router();

// return a list of bins
router.get('/users/:id/bins', async (req, res) => {
    const bins = await getBins();
    const data = {
        bins,
        title: "List Bins",
        authentication: req.session.authentication
    };

    console.log(data);

    res.render('bins/index', data);
});

// show the page for entering the new bin
router.get('/users/:id/bins/new', (req, res) => {
    const data = {
        title: "Create Bin"
    };
    res.render('bins/new', data);
});

// submit the form for the new bin creation
router.post('/users/:id/bins/new', async (req, res) => {
    let newBin = await createBin(req.body);

    const data = {
        title: "Bin Created",
        bin: newBin
    };

    res.render("bins/create", data);
});

// find the specific bin and display the contents
router.get('/users/:id/bins/:binId', async (req, res) => {
    const binId = req.params.binId;
    const bin = await getBinById(binId);
    const data = {
        bin,
        title: `List Bin ${bin.name}`
    };
    res.render('bins/show', data);
});

module.exports = router;