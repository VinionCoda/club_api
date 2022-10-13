import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  card_id: { type: String, require: true, unique: true},
  card_set: String,
  card_set_code:String,
  card_set_uri:String,
  card_setname: String,
  card_rarity: String,
  card_status: String,
  card_api: String,
  card_release:String,
  dual_card_name: String,
  card_name: String,
  card_cost: String,
  card_type: String,
  card_image: String,
  rarity_css: String,
  card_version:Array,
  card_back: {
    card_name: String,
    card_type: String,
    card_image: String,
  },
});

const Cards = mongoose.model("Cards", cardSchema);

export default Cards;
