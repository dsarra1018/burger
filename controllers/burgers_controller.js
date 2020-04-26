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

router.put('/api/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});
});

// Export routes for server.js to use
module.exports = router;