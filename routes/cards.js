import express from "express";
import Cards from "../models/card.model.js";

const cardRouter = express.Router();

cardRouter.route("/").get((req, res) => {
  Cards.find()
    .then((cards) => res.json(cards))
    .catch((err) => console.log(err));
});

cardRouter.route("/cardId/:cardId").get((req, res) => {
  Cards.find({card_id:req.params.cardId})
    .then((cards) => res.json(cards))
    .catch((err) => console.log(err));
});

cardRouter.route("/setId/:setId").get((req, res) => {
  Cards.find({card_set:req.params.setId})
    .then((cards) => res.json(cards))
    .catch((err) => console.log(err));
});


export default cardRouter;
