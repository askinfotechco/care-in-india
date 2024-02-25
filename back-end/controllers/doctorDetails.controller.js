const doctorDetailsModel = require("../models/doctorDetails.model");
const appointment = require("../models/appointment.model");
const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_TOKEN;

// apis
// registration
const addDoctor = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    email,
    password,
    image,
    address,
    country,
    city,
    pincode,
    phone,
    language,
    location,
    specialization,
    regId,
    about,
    doctorSlotArray,
    salutation,
    title,
  } = req.body;
  const encodePass = await bcrypt.hash(password, 10);
  // console.log(encodePass)
  const docObj = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    password: encodePass,
    email: email,
    image: image,
    address: address,
    country: country,
    city: city,
    pincode: pincode,
    phone: phone,
    language: language,
    location: location,
    specialization: specialization,
    regId: regId,
    about: about,
    doctorSlotArray: doctorSlotArray,
    salutation: salutation,
    title: title,
  };

  const userObj = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    password: encodePass,
    email: email,
    address: address,
    country: country,
    city: city,
    pincode: pincode,
    phone: phone,
    role: "doctor",
  };

  try {
    const emailChecking = await doctorDetailsModel.find({ email });
    //console.log(emailChecking[0].email, email);
    if (emailChecking[0]?.email === email) {
      return res.status(200).json({
        msg: `${email} already exist`,
      });
    } else {
      let docData = await doctorDetailsModel(docObj).save();
      let userData = await userModel(userObj).save();
      // console.log(userObj);
      return res.status(200).json({
        msg: `${email} is registerd successfully`,
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: `${error}`,
    });
  }
};

// getAllUser
const getAllDoctors = async (req, res) => {
  try {
    const allUser = await doctorDetailsModel.find({});
    return res.status(200).json({ allUser });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

const DoctorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await doctorDetailsModel.findOne({ email });
    // console.log(data)

    if (data) {
      if (await bcrypt.compare(password, data.password)) {
        // const token = setUser(data);
        const token = jwt.sign({ data }, process.env.JWT_TOKEN, {
          expiresIn: "12h",
        });
        // res.cookie("uid",token)
        // res.setHeader("JWT", token);
        // console.log(getUser(token))

        return res.json({
          message: `${data.email} logged in successfully`,
          token: token,
          email: data.email,
          role: data.role,
        });
      }
      return res.json({
        message: `Incorrect password`,
      });
    }
    return res.json({
      message: "Doctor details doesn't exist or Incorrect email",
    });
  } catch (error) {
    console.log(error);
    return res.send("SOMETHING WENT WRONG !");
  }
};

const getDoctorById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await doctorDetailsModel.findOne({ _id: id });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

const getUserByRegId = async (req, res) => {
  const { regId } = req.body;

  try {
    const user = await doctorDetailsModel.findOne({ regId: regId });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

// getUserByRole
const getUserByRole = async (req, res) => {
  const role = req.params.role;

  try {
    const user = await doctorDetailsModel.find({ role });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

// forgotPassword
const resetPassword = async (req, res) => {
  const email = req.body.email;
  const newPass = req.body.newPassword;
  //confirm password

  try {
    const data = await doctorDetailsModel.findOne({ email });
    if (data) {
      encodePass = await bcrypt.hash(newPass, 10);
      await doctorDetailsModel.findOneAndUpdate(
        { email: email },
        { $set: { password: encodePass } }
      );
      return res.json({
        message: `Password Updated Sucessfully`,
      });
    }
    return res.json({
      message: "User doesn't exist or Incorrect email",
    });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

// reset Email
const resetEmail = async (req, res) => {
  const id = req.params.id;
  const newEmail = req.body.email;
  // const password = req.body.password

  try {
    const data = await doctorDetailsModel.findOne({ _id: id });
    if (data) {
      await doctorDetailsModel.findOneAndUpdate(
        { _id: id },
        { $set: { email: newEmail } }
      );
      return res.json({
        message: `${newEmail} Updated Sucessfully`,
      });
    }
    return res.json({
      message: "User doesn't exist or Incorrect ID",
    });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

// deleteUser
// editUser-cp
// deleteUser
const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await doctorDetailsModel.findOneAndDelete({ _id: id });
    // console.log(`User with id ${id} is deleted`);
    res.status(200).json({ msg: `${id} deleted` });

    if (!user) {
      return res.status(404).json({
        msg: `No user found ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateDoctorStatus = async (req, res) => {
  let id = req.body.id;
  let userStatus = req.body.status;
  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      await doctorDetailsModel.updateOne(
        { _id: id },
        { $set: { status: userStatus } }
      );
    });
    session.endSession();

    res.status(201).json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getActiveDoctorsCount = async (req, res) => {
  try {
    const userCount = await doctorDetailsModel.aggregate([
      { $match: { status: true } },
      { $count: "active_users" },
    ]);
    res.send(userCount);
  } catch (error) {
    console.log("Error:", error);
    // console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const bookAppointment = async (req, res) => {
  const { patientEmail, patientName, doctorEmail, day, date, mode, message } =
    req.body;
  // console.log(encodePass)
  const appointmentDetails = {
    patientEmail: patientEmail,
    patientName: patientName,
    doctorEmail: doctorEmail,
    day: day,
    date: date,
    mode: mode,
    message: message,
  };

  try {
    const appointmentCheck = patientEmail + doctorEmail + day + date + mode;
    const result = await appointment.findOne(appointmentDetails);
    const resultAppointment =
      result?.patientEmail +
      result?.doctorEmail +
      result?.day +
      result?.date +
      result?.mode;
    console.log(resultAppointment, appointmentCheck);
    if (resultAppointment === appointmentCheck) {
      return res.status(200).json({
        msg: `Appointment already booked for selected date`,
      });
    } else {
      let data = await appointment(appointmentDetails).save();
      // console.log(userObj);
      return res.status(200).json({
        msg: `Appointment Booked successfully`,
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: `${error}`,
    });
  }
};

const getAllSpecializations = async (req, res) => {
  try {
    const allSpecializations = await doctorDetailsModel.distinct(
      "specialization"
    );
    return res.status(200).json({ allSpecializations });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

const getAllUserAppointment = async (req, res) => {
  const { email } = req.body;
  try {
    const userCount = await appointment.find({ patientEmail: email });
    res.send(userCount);
  } catch (error) {
    console.log("Error:", error);
    // console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const getAllAppointment = async (req, res) => {
  const { email } = req.body;
  try {
    const userCount = await appointment.find({ doctorEmail: email });
    res.send(userCount);
  } catch (error) {
    console.log("Error:", error);
    // console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

module.exports = {
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
};
