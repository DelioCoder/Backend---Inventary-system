const { Router } = require('express');

const router = Router();

const { createUser } = require('../Controllers/UserController');

router.route('/')
    .post(createUser);

module.exports = router;