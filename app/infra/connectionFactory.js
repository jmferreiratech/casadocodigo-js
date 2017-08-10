var mysql = require('mysql');

function connectionFactory() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "casadocodigo_nodejs",
    });
}

module.exports = function () {
    return connectionFactory;
};
