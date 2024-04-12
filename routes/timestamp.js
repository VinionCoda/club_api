import express from "express";
import Timestamp from "../models/timestamp.model.js";

const timestampRouter = express.Router();

timestampRouter.route("/").get((req, res) => {
    Timestamp.find()
    .then((timestamp) => res.json(timestamp))
    .catch((err) => console.log(err));
});



export default timestampRouter;
