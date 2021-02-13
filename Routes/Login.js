const { Router } = require('express');

const router = Router();

const { loginUser } = require('../Controllers/UserController');

router.route('/')
    .post(loginUser);

module.exports = router;