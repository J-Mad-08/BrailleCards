require('dotenv').config();
const {MongoClient}= require('mongodb')
// const mongoose = require('mongoose');

let dbConnection;

module.exports = {
  // est connection
 connectDB: (cb)=> {
  MongoClient.connect(process.env.DATABASE_URL)
  .then((client) => {
    dbConnection = client.db();
    return cb();
  }).
  catch(err => {
    console.log(err);
      return cb();
  });

  }, 
  // return connection
  getDb: ()=> dbConnection
};

// console.log('config db', process.env);
// const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(
// 			process.env.DATABASE_URL,

// 			{
// 				useNewUrlParser: true,
// 			}
// 		);
// 		console.log('MongoDb connected', conn.connection.host);
// 	} catch (error) {
// 		console.trace(error);
// 	}
// };

// module.exports = connectDB;
