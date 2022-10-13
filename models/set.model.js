import mongoose from "mongoose";
const { Schema } = mongoose;

const setSchema = new Schema({
    scry_set_id: { type: String, require: true, unique: true },
	set_name: String,
 	set_uri: String,
  	set_release: String 
});

const Set = mongoose.model("Set", setSchema);

export default Set;
