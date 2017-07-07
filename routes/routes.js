const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const hatrs = require('../models/models');


router.get('/', (req, res) => {
  // hatrs.find().then(function(everyHatr)

    res.render('home', {title: "home"});

});

router.get('/login', (req, res) => {
  res.render('login', {title: "login"});
});

router.get('/signup', (req, res) => {
  res.render('signup', {title: "signup"});
});

router.post('/login', (req, res) => {

});

router.post('/signup', (req, res) =>  {
  if (req.body.newUser && req.body.newPass) {
  hatrs.create({
    username: req.body.newUser,
    password: req.body.newPass
  }).then(function(){
    res.redirect('/');
  });
} else {
  {
    res.render('error', {
      title: "error",
      error: "There was an error!"
    });
  }
}
});

module.exports = router;
