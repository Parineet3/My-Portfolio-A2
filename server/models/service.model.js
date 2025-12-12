import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Service title is required"
  },
  desc: {
    type: String,
    required: "Description is required"
  },
  img: {
    type: String,
    required: "Service image URL is required" // could be uploaded later, for now URL
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Service", ServiceSchema);
