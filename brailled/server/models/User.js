/* eslint-disable indent */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, 'Please add a name'],
		// unique: true,
		trim: true,
		maxlength: [75, 'Name cannot be more than 75 characters'],
	},
	password: {
		type: String,
		required: [true, 'Please add a password'],
		minlength: 8,
		select: false,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	email: {
		type: String,
		trim: true,
		unique: true,
		required: [true, 'Please add an email'],
		match: [
			/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
			'Please fill a valid email address',
		],
	},
	role: {
		type: String,
		enum: ['user'],
		default: 'user',
	},
});

// Encrypt password using Bcrypt
UserSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
// statics are called on model itself
// methods are called on the instances
// UserSchema.methods.getSignedJWToken = () => {
// 	return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
// 		expiresIn: process.env.JWT_EXPIRE,
// 	});
// };

module.exports = mongoose.model('User', UserSchema);
