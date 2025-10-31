import Contact from '../models/contact.model.js';
import errorHandler from "./error.controller.js";
import extend from "lodash/extend.js";


const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
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

// Get contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(404).json({ error: "Contact not found" });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve contact" });
  }
};

// Read single contact
const read = (req, res) => {
  return res.json(req.profile);
};

// Update contact by ID
const update = async (req, res) => {
  try {
    let contact = req.profile;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete a contact
const remove = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete all contacts
const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, contactByID, read, update, remove, removeAll };