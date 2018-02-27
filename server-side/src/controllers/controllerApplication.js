const express = require('express');
const router = express.Router();
const User = require('../models/User');

const authMiddleware = require('../middlewares/auth');


router.use(authMiddleware);

router.get('/rank', (req, res)=>{

    User.find({ 'nickname': { $not: { $type: 10 } } })
        .sort('-score')
        .then( data =>  res.status(200).send(data))
        .catch( err => res.status(400).send(e))
});

module.exports = app => app.use('/game', router);