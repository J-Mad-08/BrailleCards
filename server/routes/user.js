const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// @route        GET all api/products
// @desc         Get all products

// @route        GET user/userById
// @desc         Get user by id

// @route        POST all user/createUser
// @desc         Add a new user
router.post('/createUser', userController.addNewUser, (req, res) => {
	console.log(req.body, 'to Send'.bgRed);
	res.status(201).send(req.body);
});

// @route        DELETE user/deleteUser
// @desc         Delete user by id

module.exports = router;
