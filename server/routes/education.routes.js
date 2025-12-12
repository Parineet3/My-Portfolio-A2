import express from "express";
import educationCtrl from "../controllers/education.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/api/education")
  .get(educationCtrl.list) // everyone reads
  .post(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.create) // only admin creates
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.removeAll);

router.route("/api/education/:educationId")
  .get(educationCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.remove);

router.param("educationId", educationCtrl.educationByID);

export default router;
