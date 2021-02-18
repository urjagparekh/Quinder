import mongoose from "mongoose";

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String },
  category: { type: String },
  interestedIn: { type: String },
  scraps: { type: Array },
  pronouns: { type: String },
  aboutme: { type: String }
});

const member = mongoose.model("Member", memberSchema);

export default member;
