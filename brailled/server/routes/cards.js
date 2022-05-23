const express = require("express");

const {
  getANewCard,
  getCorrectCards,
  getWrongCards,
  updateWrongCards,
} = require("../controllers/cardController");

const router = express.Router();

router.route("/:id").get(getANewCard);

// router
//   .route("/:id")
//   .get(getWrongCards)
//   .get(getCorrectCards)
//   .patch(updateWrongCards);

module.exports = router;
