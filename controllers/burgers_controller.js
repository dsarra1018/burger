// Dependencies
const router = require('express').Router();
const burger = require('../models/burger');

// Routes
router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    burger.selectAll( (data) => {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.post('/burgers', (req, res) => {
    burger.insertOne(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect('/');
    })
});

router.put('/burgers/:id', (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200);
    })
});

// Export routes for server.js to use
module.exports = router;