import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Create & list users
router.route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create);

// CRUD for single user
router.route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

// Bind param
router.param("userId", userCtrl.userByID);

export default router;
