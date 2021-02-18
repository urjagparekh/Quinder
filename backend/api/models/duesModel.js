import mongoose from "mongoose";

const Schema = mongoose.Schema;

const duesSchema = new Schema({
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true }
});

const dues = mongoose.model("Dues", duesSchema);

export default dues;
