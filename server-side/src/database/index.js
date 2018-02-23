'use strict'

const mongoose = require('../database');

//Connect mongodb(mLab)
mongoose.connect('mongodb://alisson:00000000@ds044907.mlab.com:44907/jokenpostr', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;