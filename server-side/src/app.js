'use strict'

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
require('./controllers/authController')(app);

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node OK",
        version: "0.0.1"
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);

module.exports = app;
