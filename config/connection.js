var mysql = require('mysql');
var connection = mysql.createConnection({

    port: 3000,
    host: "localhost",
    user: "root",
    password: '',
    database: 'burgers_db'
});
//Make connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " +err.stack);
        return;
    }
    console.log("Connected as id " +connection.threadId);

});



module.exports = _connection;