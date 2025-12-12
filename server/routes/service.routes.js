import express from "express";
import serviceCtrl from "../controllers/service.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/api/service")
  .get(serviceCtrl.list) // everyone can view
  .post(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.create); // only admin

router.route("/api/service/:serviceId")
  .get(serviceCtrl.read) // view single service
  .put(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.update) // only admin
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.remove); // only admin

router.param("serviceId", serviceCtrl.serviceByID);

export default router;
