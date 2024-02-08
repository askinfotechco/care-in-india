const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorDetailsSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is required"],
    },
    gender: {
      type: String,
      required: [true, "gender must be defined"],
      enum: ["male", "female", "other"],
      default: "male",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [8, "password ahould be atleast 8 characters"],
      // match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      required: [true, "role must be defined"],
      enum: ["admin", "receptionist", "doctor", "user"],
      default: "doctor",
    },
    image: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    pincode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    specialization: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    regId: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const doctorModel = new mongoose.model("doctordetails", DoctorDetailsSchema);
module.exports = doctorModel;
