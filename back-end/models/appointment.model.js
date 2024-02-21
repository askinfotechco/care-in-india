const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    patientEmail: {
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
  },
  {
    timestamps: true,
  }
);

// module.exports = categorySchema;
const appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = appointment;
