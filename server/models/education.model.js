import mongoose from "mongoose";


const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Qualification title is required",
  },
  firstname: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  lastname: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  completion: {
    type: Date,
  },
  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Education", educationSchema);
