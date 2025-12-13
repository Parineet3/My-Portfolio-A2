import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";


import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import educationRoutes from "./routes/education.routes.js";
import serviceRoutes from "./routes/service.routes.js"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", projectRoutes);
app.use("/", contactRoutes);
app.use("/", educationRoutes);
app.use("/", serviceRoutes);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});


// const CURRENT_WORKING_DIR = process.cwd();
// app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist/app")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(CURRENT_WORKING_DIR, "dist/app/index.html"));
// });

const CURRENT_WORKING_DIR = process.cwd();
app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(CURRENT_WORKING_DIR, "dist", "index.html"));
});



export default app;
