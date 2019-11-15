const express = require('express');
const { validationResult } = require('express-validator');

const v = require('../validation/user.js');
const User = require('../models/User');

const userRoutes = express.Router();

userRoutes.post('/signup', v.signUpChecks, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    validationResult(req).throw();

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = userRoutes;
