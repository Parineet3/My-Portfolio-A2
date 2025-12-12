import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  description: {  // 🔥 THIS IS THE MESSAGE TEXT
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("Contact", ContactSchema);
