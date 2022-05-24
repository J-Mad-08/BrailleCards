const Card = require("../models/cardModel");
const mongoose = require("mongoose");

// @desc Get all cards
//@route GET /cards
//@access Private

exports.getANewCard = async (req, res, next) => {
  console.log(db, "DB");
  const cards = await db.collection("Cards").find({});
  console.log(cards);
  res.status(200).json({ success: true, message: "Query the db" });
  return next();
};

// @desc Get all correct cards
//@route GET /cards/:id <--using find
//@access Private

exports.getCorrectCards = (req, res, next) => {
  res.status(200).json({ success: true, message: "Grab the right cards" });
  return next();
};

// @desc Get all incorrect cards
//@route GET /cards/:id <--using find
//@access Private

exports.getWrongCards = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Grab the wrong cards",
  });
  return next();
};

// @desc Update incorrect card
// @route PATCH /cards/:id <-- findOne
// @access Private

exports.updateWrongCards = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "Update the wrong cards", cards: [] });
  return next();
};
