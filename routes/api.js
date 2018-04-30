const express = require('express');
const router = express.Router();
const db = require('../db');
const user = require('../models/user');

router.get('/', (req, res) => {
    res.send('From API route');
});

router.post('/login', (req, res) => {
    let userData = req.body;
    db.query("select * from user where email like '" + userData.email + "' and password like '" + userData.password + "'", function (err, result) {
        if (err) {
            console.log(err);
        } else {
            if (result.length == 0) {
                res.status(401).send("Identifiants invalides");
            } else {
                console.log(result);
                res.status(200).send(result);
            }
        }
    });
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let sql = "insert into user set ?";
    db.query(sql, userData, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
});

module.exports = router;