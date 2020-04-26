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

    // Insert an item into the database
    insertOne: (table, cols, vals, cb) => {
        let queryString = 'INSERT INTO' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection,query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
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