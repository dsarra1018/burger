// Dependencies
const connection = require('./connection');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < arr.length; i++) {
        arr.push('?');
    }

    return arr.toString();
}

// Helper function to convert objects key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '' + value + '';
            }

            arr.push(key + '=' + value);
        }
    }

    return arr.toString();
}

let orm = {

    // Show all items on the table
    selectAll: (table, cb) => {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function() {

    },

    updateOne: function() {

    }
};

module.exports = orm;