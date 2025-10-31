import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// Set Mongoose Promise
mongoose.Promise = global.Promise;

// ✅ Connect to MongoDB
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Welcome to my Portfolio database! MongoDB connected successfully."))
  .catch((err) => console.error("❌ Unable to connect to database:", err));

// ✅ Handle connection errors separately
mongoose.connection.on("error", (err) => {
  console.error(`❌ MongoDB connection error: ${err}`);
});

// ✅ Basic route to test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// ✅ Start the server
app.listen(config.port, (err) => {
  if (err) {
    console.error("❌ Server failed to start:", err);
  } else {
    console.info(`🚀 Server started on port ${config.port}`);
  }
});
