import express from "express";
import Cards from "../models/card.model.js";
import Set from "../models/set.model.js";

const authRouter = express.Router();

authRouter.route("/").get((req, res) => {
  res.send({message:'You are in a secure area'})
});

authRouter.route("/addSet").post(async (req, res) => {
  const set = req.body;
  const newSet = new Set(set);
  await newSet
    .save()
    .then((set) => res.json(set))
    .catch((err) => res.json({ error: err }));
});

authRouter.route("/addSetList").post(async (req, res) => {
  const setlist = req.body.data;

  Set.insertMany(setlist , (err, docs) => {
    if (err === null) {
      res.json({ status: "Success", data: docs });
    } else {
      res.json({ status: "Failed" , error : err.message });
    }
  });

});

authRouter.route("/addCard").post(async (req, res) => {
  const card = req.body;
  const newCard = new Cards(card);
  await newCard
    .save()
    .then((cards) => res.json(cards))
    .catch((err) => res.json({ error: err }));
});

authRouter.route("/addCollection").post(async (req, res) => {
  
  const collection = req.body.data;

  Cards.insertMany(collection, (err, docs) => {
    if (err === null) {
      res.json({ status: "Success", data: docs  });
    } else {
      res.json({ status: "Failed", error : err.message });
    }
  });

});

authRouter.route("/removeCard").post(async (req, res) => {
  
  const cardId = req.body;  
   Cards.deleteOne({'card_id': cardId.card_id}, (err, docs) => {
    if (err === null) {
      res.json({ status: "Success", data: cardId.card_id});
    } else {
      res.json({ status: "Failed", error : err.message });
    }
  });

});


export default authRouter;