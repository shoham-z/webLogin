const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(`${__dirname}/static`));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ****** Send Pages
app.get("/", (req, res) => {
    res.render('index');
});

app.post("/login", (req, res) => {
    res.render('login');
});

app.post("/signup", (req, res) => {
    res.render('signup');
});
// ****** End Send Pages

// Launch server
app.listen(8000, "localhost", () => {
    console.log("Server is running on port 8000");
});


//***** database stuff
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7WQr3nmVDLeuz",
    database: "web_login"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/login/submit', (req, res) => {
    let username = req.body.name;
    let password = req.body.password;
    let user_exists = false;
    let query = "SELECT username FROM users";
    con.query(query, function (err, result) {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            if (username === result[i].username) user_exists = true;
        }
        if (user_exists) {
            let query = "SELECT password FROM users"
            let response = "Incorrect Password!";
            con.query(query, function (err, result) {
                if (err) throw err;
                for (let i = 0; i < result.length; i++) {
                    if (password === result[i].password) response = "Logged In Successfully!";
                }
                res.send(response);
            });
        } else {
            res.send("Username Does Not Exist!");
        }
    });

})

app.post('/signup/submit', (req, res) => {
    let username = req.body.name;
    let password = req.body.password;
    let user_exists = false;
    let query = "SELECT username FROM users";
    con.query(query, function (err, result) {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            if (username === result[i].username) user_exists = true;
        }
        if (user_exists) {
            res.send("Username Already Exists!");
        } else {
            let query = "insert into users(username, password) values ('" + username + "', '" + password + "');"
            console.log(query);
            let response;
            con.query(query, function (err, result) {
                if (err) response = "Error Occurred When Signing Up!";
                if (result.affectedRows===1) response = "Signed Up Successfully!";
                res.send(response + '<form action="/login" method = "post"> <input type = "submit" value="Login">                </form>');
            });
        }
    });

})
