const User = require('../models/User');

const asyncHandler = require('../../utils/async');

// @route        GET /user/auth
// @desc         Register user
// @access      Public (guest registers)

exports.register = asyncHandler(async (req, res, next) => {
	const { userName, email, password } = req.body;
	// Create user
	const user = await User.create({
		userName,
		email,
		password,
	});
	// Create token
	const token = user.getSignedJWToken();
	console.log(token);
	console.log(user);
	res.status(201).json({ success: true, token });
});
