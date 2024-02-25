const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    patientEmail: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    doctorEmail: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = categorySchema;
const appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = appointment;
