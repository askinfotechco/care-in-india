const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define schema for the objects inside the array
const DoctorSlotsSchema = new mongoose.Schema({
  day: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  availableTiming: {
    fromHour: {
      type: Number,
    },
    fromMinute: {
      type: Number,
    },
    toHour: {
      type: Number,
    },
    toMinute: {
      type: Number,
    },
  },
},
{
  timestamps: true,
});

const doctorSlotModel = new mongoose.model("doctorslots", DoctorSlotsSchema);
module.exports = doctorSlotModel;
