const express = require("express");
const doctorDetailsRouter = express.Router();
const authorizationHeader = require("../middleware/authJWT");

const {
  addDoctor,
  getAllDoctors,
  DoctorLogin,
  getUserByRole,
  getDoctorById,
  resetPassword,
  resetEmail,
  deleteDoctor,
  updateDoctorStatus,
  getActiveDoctorsCount,
  getUserByRegId,
  bookAppointment,
  getAllSpecializations,
  getAllAppointment,
  getAllUserAppointment,
} = require("../controllers/doctorDetails.controller");

doctorDetailsRouter.get("/", getAllDoctors);
doctorDetailsRouter.post("/add", addDoctor);
doctorDetailsRouter.post("/login", DoctorLogin);
doctorDetailsRouter.get("/byid/:id", authorizationHeader, getDoctorById);
doctorDetailsRouter.get("/byrole/:role", authorizationHeader, getUserByRole);
doctorDetailsRouter.post("/byregid", getUserByRegId);
doctorDetailsRouter.post("/resetPassword", authorizationHeader, resetPassword);
doctorDetailsRouter.post("/resetMail/:id", authorizationHeader, resetEmail);
doctorDetailsRouter.delete("/:id", authorizationHeader, deleteDoctor);
doctorDetailsRouter.post("/updateuserstatus", updateDoctorStatus);
doctorDetailsRouter.get("/getusercount", getActiveDoctorsCount);
doctorDetailsRouter.post(
  "/bookAppointment",
  authorizationHeader,
  bookAppointment
);
doctorDetailsRouter.get("/getallspecializations", getAllSpecializations);
doctorDetailsRouter.post(
  "/appointment",
  authorizationHeader,
  getAllAppointment
);
doctorDetailsRouter.post(
  "/userAppointment",
  authorizationHeader,
  getAllUserAppointment
);

module.exports = doctorDetailsRouter;
