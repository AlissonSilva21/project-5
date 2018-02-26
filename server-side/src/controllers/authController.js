const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../config/auth');

const router = express.Router();


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 7200,
    });
}

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try{
        //Verificando se já existe um email cadastrado.
        if(await User.findOne({ email })) 
            return res.status(400).send({ error: 'Este email já é cadastrado, por favor tente outro.' });
        
        const user = await User.create(req.body);

        user.password = undefined;

        return res.status(200).send({ 
            user,
            token: generateToken({ id: user.id })  
        });

    } catch (err) {
        res.status(400).send({ error: 'Registration failed' });
    }

});

router.post('/athenticate', async (req, res) => {

    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    
    //Verificando se o usuario existe
    if(!user)
        return res.status(400).send({ error: 'Usuário não encontrado.' });

    //Comparando Senha Criptografada
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida !'})

    //Limpando senha do Return
    user.password = undefined;

    res.send({ 
        user, 
        token: generateToken({ id: user.id }),
    });
});


module.exports = app => app.use('/auth', router)