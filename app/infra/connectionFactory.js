var mysql = require('mysql');

function connectionFactory() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "casadocodigo_nodejs",
        });
    }
    if (process.env.NODE_ENV === 'test') {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "casadocodigo_nodejs_test",
        });
    }
    if (process.env.NODE_ENV === 'production') {
        const urlConnection = process.env.CLEARDB_DATABASE_URL;
        const params = urlConnection.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
        return mysql.createConnection({
            host: params[3],
            user: params[1],
            password: params[2],
            database: params[4],
        });
    }
}

module.exports = function () {
    return connectionFactory;
};
