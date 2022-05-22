require('dotenv').config();
const mongoose = require('mongoose');
// console.log('config db', process.env);
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			process.env.DATABASE_URL,

			{
				useNewUrlParser: true,
			}
		);
		console.log('MongoDb connected', conn.connection.host);
	} catch (error) {
		console.trace(error);
	}
};

module.exports = connectDB;
