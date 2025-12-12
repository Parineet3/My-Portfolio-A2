import Service from "../models/service.model.js";
import errorHandler from "./error.controller.js";
import extend from "lodash/extend.js";

// Create
const create = async (req, res) => {
  const service = new Service(req.body);
  try {
    await service.save();
    res.json({ message: "Service added successfully!" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// List (everyone can see)
const list = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Find by ID
const serviceByID = async (req, res, next, id) => {
  try {
    let service = await Service.findById(id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    req.profile = service;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve service" });
  }
};

const read = (req, res) => res.json(req.profile);

// Update (Admin only)
const update = async (req, res) => {
  try {
    let service = extend(req.profile, req.body);
    await service.save();
    res.json(service);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete (Admin only)
const remove = async (req, res) => {
  try {
    let deleted = await req.profile.deleteOne();
    res.json(deleted);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, serviceByID, read, update, remove };
