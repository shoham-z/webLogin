const express = require('express');
//************
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7WQr3nmVDLeuz"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
// ************

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});

app.get("/script.js", (req, res) => {
    res.sendFile(`${__dirname}/script.js`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});


app.listen(8000, "localhost", () => {
    console.log("Server is running on port 8000");
});


