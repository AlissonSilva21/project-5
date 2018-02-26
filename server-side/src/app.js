'use strict'

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node OK",
        version: "0.0.1"
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);

require('./controllers/authController')(app);

module.exports = app;
