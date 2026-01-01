const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mydataschema = new mongoose.Schema({
    name: String,
    email: String
});

const Mydata = mongoose.model('Mydata', mydataschema);

module.exports = Mydata;