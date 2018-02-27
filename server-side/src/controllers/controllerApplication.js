const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');


router.use(authMiddleware);

router.get('/rank', (req, res)=>{
    return res.send({ ok: true });
});

module.exports = app => app.use('/game', router);