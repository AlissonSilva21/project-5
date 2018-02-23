'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: Boolean,
        required: true,
        default: true
    },
    player: {
        nickname: {
            type: String,
            required: false,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: false,
            trim: true,
            select: false
        },
        score: {
            type: Number,
            required: false
        },
        wins: {
            type: Number,
            required: false
        },
        losses: {
            type: Number,
            required: false
        }
    }
});

module.exports = mongoose.model('User',schema);