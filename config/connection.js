// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

    var connection = mysql.createConnection({
        port: 3306,
        host: "g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "j9hb5akz698iteok",
        password: "ecweslityerimwuk",
        database: "	lgb8kdr58u1t24e6"
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;