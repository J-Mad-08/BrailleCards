require("dotenv").config();
console.log(process.env);

const {connectDB, getDb} = require("./config/db");


const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// Connect to db
let db;

connectDB((err)=> {
  if (!err){
    app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
  }
  db = getDb();
});

app.get('/card/:id', async (req, res)=> {
  const cardArr= [];
   const cards = await db.collection('Cards').find().forEach(card => cardArr.push(card)); //cursor
   console.log(cards)
   res.send(cardArr);
})
// middleware
app.use(cors());
app.use(express.json()); // allows access to req.body

const staticFilesPath = path.join(__dirname, "public/images");
//console.log(staticFilesPath, 'static');
const staticFilesMiddleWare = express.static(staticFilesPath);
//default route
app.use("/", staticFilesMiddleWare);

// import routes

app.use("/card", require("./routes/cards"));
app.use("/user", require("./routes/user"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.SERVER_PORT;



// Handle unhandled Promise rejections
//Custom Error Handler
// Handle 'page not found' error
// const AppError = require('../utils/AppError');
// app.all('*', (req, res, next) => {
// 	server.close();
// 	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });
