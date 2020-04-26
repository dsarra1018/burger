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
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    // Calling updateOne ORM function
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;