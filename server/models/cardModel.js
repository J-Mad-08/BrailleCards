const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	character: { type: String, required: true, unique: true },
	img: { type: Buffer, required: true },
});

module.exports = mongoose.model('Card', cardSchema);
