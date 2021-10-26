const express = require('express');
const router = express.Router();

const {createMail} = require('../controllers/send-mail')

router.route('/')
    .post(createMail);

module.exports = router;