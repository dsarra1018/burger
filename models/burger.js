// Dependencies
const orm = require('../config/orm');

let burger = {
    selectAll: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        });
    }
}