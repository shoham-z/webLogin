const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(`${__dirname}/static`));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// send index.ejs
app.get("/", (req, res) => {
    res.render('index');
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
function check_exist(username){
    console.log(username);
}

app.post('/login', (req, res) => {
    let username = req.body.name;
    let password = req.body.password;
    res.send(username + "  " + password);
})

function pressed() {
    let name = document.getElementById('input').getElementsByClassName("name").item(0).value;
    let password = document.getElementById('input').getElementsByClassName("pass").item(0).value;
    check_exist(name);
    document.getElementById('debug-output').innerHTML = name + " haha      " + password;
}