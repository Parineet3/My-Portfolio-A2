import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Create + List
router.route("/api/project")
  .get(projectCtrl.list) // everyone sees projects
  .post(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.create) // only admin creates
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.removeAll);

// Single Project CRUD
router.route("/api/project/:projectId")
  .get(projectCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.remove);

// Bind ID
router.param("projectId", projectCtrl.projectByID);

export default router;
