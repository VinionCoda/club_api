/* import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import cardRouter from "./routes/cards.js";
import setRouter from "./routes/sets.js";
import authRouter from "./routes/auth.js";

import { expressjwt as jwt } from "express-jwt";
import * as jwks from "jwks-rsa";

const app = express();
const port = process.env.PORT || 5000;
const uri =
  "mongodb+srv://mtgclub:R3actmean@cluster0.bmjla.mongodb.net/mtgclub?retryWrites=true&w=majority";

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-rs90d22v.us.auth0.com/.well-known/jwks.json",
  }),
   audience: 'https://cleaver-mtg-club/',
    issuer: 'https://dev-rs90d22v.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(
  cors({
    origin: "*",
  })
);

//app.use(jwtCheck);

app.use(express.json());

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection established");
});

app.get("/", (req, res) => {
  res.send("Cleaver MTG Club API");
});
app.use("/cards", cardRouter);
app.use("/sets", setRouter);
app.use("/auth", jwtCheck, authRouter);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
 */



import express from 'express'
import cors from "cors";
import mongoose from "mongoose";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})