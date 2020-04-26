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


}