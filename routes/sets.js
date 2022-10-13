import express from "express";
import Set from "../models/set.model.js";

const setRouter = express.Router();

setRouter.route("/").get((req, res) => {
  Set.find()
    .then((set) => res.json(set))
    .catch((err) => console.log(err));
});

setRouter.route("/setid/:id").get((req, res) => {
  Set.find({scry_set_id:req.params.id})
    .then((set) => res.json(set))
    .catch((err) => console.log(err));
});



export default setRouter;
