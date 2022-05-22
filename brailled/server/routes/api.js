const express = require('express');
const router = express.Router();
//const User = require("../routes_BackEnd/api");

//Get all users in db

router.get('/:id', (req, res) => {
	res.status(201).json({ message: `Display user ${req.params.id}` });
});

router.post('/id', (req, res) => {
	res.status(201).json({ message: `Create user ${req.params.id}` });
});

router.patch('/:id', (req, res) => {
	res.status(201).json({ message: `Update user ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
	res.status(201).json({ message: `Delete user ${req.params.id}` });
});

module.exports = router;
