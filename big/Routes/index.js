const express = require('express');
const router = express.Router();

// import the controllers

const login_signup = require("../Controller/login_signup");
const  createhuman = require("../Controller/create");

router.post('/login', login_signup.login);
router.post('/signup',login_signup.signup);
router.post('/createhuman',createhuman.addhuman)
router.get('/human',createhuman.gethuman)

module.exports = router;