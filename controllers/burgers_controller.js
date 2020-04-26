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
});
