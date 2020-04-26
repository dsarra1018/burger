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

let orm = {

    selectAll: (table) => {
        
    },

    insertOne: function() {

    },

    updateOne: function() {

    }
};

module.exports = orm;