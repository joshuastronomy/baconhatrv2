const express = require('express');
const mongoose = require('mongoose');

const hatrSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  message: [{
    body: {type: String},
    likes: {type: [String]}
  }]
});

const hatrs = mongoose.model('hatrs', hatrSchema);

module.exports = hatrs;
