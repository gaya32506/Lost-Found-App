import mongoose from "mongoose";

const lostSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("LostItem", lostSchema);
