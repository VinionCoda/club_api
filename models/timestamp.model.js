import mongoose from "mongoose";
const { Schema } = mongoose;

const timestampSchema = new Schema({
	last_upate: String
});

const Timestamp = mongoose.model("Timestamp", timestampSchema);

export default Timestamp;
