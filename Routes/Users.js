const { Router } = require('express');

const router = Router();

const { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser,
    deleteUser
} = require('../Controllers/UserController');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;