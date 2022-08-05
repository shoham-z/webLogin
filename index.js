const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.static(`${__dirname}/static`));

// send index.html
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});

// Send script


// Launch server
app.listen(8000, "localhost", () => {
    console.log("Server is running on port 8000");
});


//***** database stuff
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7WQr3nmVDLeuz"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
// check stuff in db
export function check_exist(username){
    console.log(username);
}

