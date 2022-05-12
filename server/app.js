require('dotenv').config();
// console.log(process.env);

const connectDB = require('./config/db');

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// Connect to db
connectDB();

// middleware
app.use(cors());
app.use(express.json()); // allows access to req.body

const staticFilesPath = path.join(__dirname, 'public/images');
//console.log(staticFilesPath, 'static');
const staticFilesMiddleWare = express.static(staticFilesPath);
//default route
app.use('/', staticFilesMiddleWare);

// import routes

app.use('/card', require('./routes/cards'));
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));

const PORT = process.env.SERVER_PORT;
const server = app.listen(PORT, () => {
	// Connect to database
	console.log(`Server listening on port: ${PORT}`);
});

// Handle unhandled Promise rejections
//Custom Error Handler
// Handle 'page not found' error
const AppError = require('../utils/AppError');
app.all('*', (req, res, next) => {
	server.close();
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
