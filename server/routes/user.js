const express = require('express');
const { validationResult } = require('express-validator');
const passport = require('passport');

const v = require('../validation/user.js');
const User = require('../models/User');

const userRoutes = express.Router();

userRoutes.post('/instructor-signup', v.signUpChecks, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    validationResult(req).throw();

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

userRoutes.post('/login', passport.authenticate('local', { successRedirect: '/' }), (req, res) => {
  return res.send(req.user);
});

userRoutes.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/login');
});

module.exports = userRoutes;
