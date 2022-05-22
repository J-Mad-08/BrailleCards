const db = require('../config/db').default;
const Card = require('../models/cardModel');
const mongoose = require('mongoose');

// @desc Get all cards
//@route GET /cards
//@access Private

exports.getAllCards = (req, res, next) => {
	res.status(200).json({ success: true, message: 'Query the db' });
};

// @desc Get all correct cards
//@route GET /cards/:id <--using find
//@access Private

exports.getCorrectCards = (req, res, next) => {
	res.status(200).json({ success: true, message: 'Grab the right cards' });
};

// @desc Get all incorrect cards
//@route GET /cards/:id <--using find
//@access Private

exports.getWrongCards = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'Grab the wrong cards',
	});
};

// @desc Update incorrect card
// @route PATCH /cards/:id <-- findOne
// @access Private

exports.updateWrongCards = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, message: 'Update the wrong cards', cards: [] });
};

exports.createCardDeck = (req, res, next) => {};
