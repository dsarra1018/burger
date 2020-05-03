// Dependencies
const orm = require('../config/orm');

let burger = {

    // Calling selectAll ORM function
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    // Calling insertOne ORM function
    insertOne: (name, cb) => {
        orm.insertOne('burgers', [
            'burger_name', 'devoured'
        ], [
            name, false
        ], cb);
    },

    // Calling updateOne ORM function
    updateOne: (id, cb) => {
        let condition = 'id=' + id;
        orm.updateOne('burgers', {
            devoured: true
        }, condition, cb);
    }
};

// Export the database functions for the controller
module.exports = burger;