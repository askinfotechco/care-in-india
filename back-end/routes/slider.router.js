const express = require("express");
const router = express.Router();
const {
  addSlider,
  getAllSlider,
  getSliderById,
  updateSlider,
  deleteSlider,
  updatedStatus,
  getAllActiveSlider,
} = require("../controllers/slider.controller");


//add a slider
router.post("/add", addSlider);

//get all slider
router.get("/", getAllSlider);
//get all active slider
router.get("/active", getAllActiveSlider);

//get a slider
router.post("/:id", getSliderById);

//update a slider
router.put("/:id", updateSlider);

//update slder status
router.put("/update-status/:id", updatedStatus);

//delete a slider
router.delete("/:id", deleteSlider);

module.exports = router;
