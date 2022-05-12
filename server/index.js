require('dotenv').config();
console.log(process.env.DATABASE_URL);

const fs = require('fs');

const { MongoClient, ServerApiVersion, Binary } = require('mongodb');

const DB = process.env.DATABASE_URL;

const arrOfFiles = [];

// need to intro a loop to loop through all el in the file folder and insert into db
const createArrOfFiles = (function () {
	fs.readdirSync('../public/images').forEach((file) => arrOfFiles.push(file));
	arrOfFiles.shift();
	return arrOfFiles;
})();

const uri =
	'mongodb+srv://Brailler:Faithful08@cluster0.p7oq0.mongodb.net/BrailleApp?retryWrites=true&w=majority';

//const data = fs.readFileSync('../public/images/A.jpg');

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});
// console.log(client);

// client.connect(async (err) => {
// 	const collection = client.db('BrailleApp').collection('Cards');
// 	// perform actions on the collection object
// 	let i = 0;
// 	try {
// 		const insertDataFromArray = async function () {
// 			while (i < arrOfFiles.length) {
// 				const insertDataFromPhotos = {};

// 				const data = fs.readFileSync(`../public/images/${arrOfFiles[i]}`);
// 				// console.log(data, 'data');
// 				insertDataFromPhotos.bin = Binary(data);

// 				await collection.insertOne({
// 					char: arrOfFiles[i][0],
// 					insertDataFromPhotos,
// 				});
// 				// console.log(insertDataFromPhotos.bin, 'bin');
// 				delete insertDataFromPhotos.bin;
// 				++i;
// 			}
// 			if (i === arrOfFiles.length) client.close();
// 		};
// 		insertDataFromArray();
// 	} catch (e) {
// 		console.trace(e);
// 		client.close();
// 	}
// });
