const { Router } = require('express');

const router = Router();

const { logUser } = require('../Controllers/UserController');

router.route('/')
    .post(logUser);

module.exports = router;