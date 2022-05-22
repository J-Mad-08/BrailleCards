const express = require('express');

const {
	getAllCards,
	getCorrectCards,
	getWrongCards,
	updateWrongCards,
} = require('../controllers/cardController');

const router = express.Router();

router.route('/').get(getAllCards);

router
	.route('/:id')
	.get(getWrongCards)
	.get(getCorrectCards)
	.patch(updateWrongCards);

module.exports = router;
