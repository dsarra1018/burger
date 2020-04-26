// Dependencies
const router = require('express').Router();
const burger = require('../models/burger');

// Routes
router.get("/", (req, res) => {
    burger.selectAll( (data) => {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        res.json({id: result.insertId});
    });
});


});
