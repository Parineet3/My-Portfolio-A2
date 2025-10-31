import Education from "../models/education.model.js";
import errorHandler from "./error.controller.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    res.status(200).json({ message: "Education added successfully!" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const educationByID = async (req, res, next, id) => {
  try {
    const education = await Education.findById(id);
    if (!education) return res.status(404).json({ error: "Education not found" });
    req.profile = education;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve education" });
  }
};

const read = (req, res) => res.json(req.profile);

const update = async (req, res) => {
  try {
    let education = extend(req.profile, req.body);
    await education.save();
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await req.profile.deleteOne();
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const removeAll = async (req, res) => {
  try {
    await Education.deleteMany({});
    res.json({ message: "All educations deleted" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, educationByID, read, update, remove, removeAll };

