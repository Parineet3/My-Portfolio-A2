import Contact from '../models/contact.model.js';
import errorHandler from "./error.controller.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    return res.status(200).json({ message: "Contact successfully added!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve contact" });
  }
};

const read = (req, res) => res.json(req.profile);

const update = async (req, res) => {
  try {
    let contact = extend(req.profile, req.body);
    contact.updated = Date.now();
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let deletedContact = await req.profile.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const reply = async (req, res) => {
  const { email, message } = req.body;

  console.log("Reply sent to:", email, "Message:", message);

  return res.json({ message: "Reply sent (simulated backend)" });
};

export default { create, list, contactByID, read, update, remove, removeAll, reply };
