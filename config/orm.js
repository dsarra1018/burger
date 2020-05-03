// Dependencies
const connection = require('./connection');

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

    // Insert an item into the database
    insertOne: (table, col, val) => {
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, col, val], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },

    // Update an item
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;