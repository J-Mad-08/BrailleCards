const db = require('../config/db').default;

const userController = {};

userController.addNewUser = async (req, res, next) => {
	try {
		const { userName, password } = req.body;
		// Add to the db
		res.locals.users = req.body;
	} catch (e) {
		console.trace(e);
	}
	return next();
};
module.exports = userController;
