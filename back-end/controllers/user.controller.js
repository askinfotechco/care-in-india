const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_TOKEN;

// apis
// registration
const createUser = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    email,
    password,
    address,
    country,
    city,
    pincode,
    phone,
  } = req.body;
  const encodePass = await bcrypt.hash(password, 10);
  // console.log(encodePass)
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
  };

  try {
    const emailChecking = await userModel.find({ email });
    //console.log(emailChecking[0].email, email);
    if (emailChecking[0]?.email === email) {
      return res.status(200).json({
        msg: `${email} already exist`,
      });
    } else {
      let data = await userModel(userObj).save();
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
const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    return res.status(200).json({ allUser });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({ email });
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
          username: data.email,
          role: data.role,
        });
      }
      return res.json({
        message: `Incorrect password`,
      });
    }
    return res.json({
      message: "User doesn't exist or Incorrect email",
    });
  } catch (error) {
    console.log(error);
    return res.send("SOMETHING WENT WRONG !");
  }
};

const getUserById = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  try {
    const user = await userModel.findOne({ email: email });
    console.log(email);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: `${error}` });
  }
};

// getUserByRole
const getUserByRole = async (req, res) => {
  const role = req.params.role;

  try {
    const user = await userModel.find({ role });
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
    const data = await userModel.findOne({ email });
    if (data) {
      encodePass = await bcrypt.hash(newPass, 10);
      await userModel.findOneAndUpdate(
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
    const data = await userModel.findOne({ _id: id });
    if (data) {
      await userModel.findOneAndUpdate(
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
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOneAndDelete({ _id: id });
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

const updateUserStatus = async (req, res) => {
  let id = req.body.id;
  let userStatus = req.body.status;
  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      await userModel.updateOne({ _id: id }, { $set: { status: userStatus } });
    });
    session.endSession();

    res.status(201).json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getActiveUSersCount = async (req, res) => {
  try {
    const userCount = await userModel.aggregate([
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

const updateUserDetails = async (req, res) => {
  const session = await mongoose.startSession();

  const {
    firstname,
    lastname,
    gender,
    email,
    password,
    address,
    country,
    city,
    pincode,
    phone,
  } = req.body;
  // const encodePass = await bcrypt.hash(password, 10);

  session.withTransaction(async () => {
    try {
      const userProfile = await userModel.find({email: req.body.email});
      if (userProfile) {
        userProfile.firstname = firstname;
        userProfile.lastname = lastname;
        userProfile.gender = gender;
        userProfile.email = email;
        userProfile.password = password;
        userProfile.address = address;
        userProfile.country = country;
        userProfile.city = city;
        userProfile.pincode = pincode;
        userProfile.phone = phone;

        var userDetails = new userModel(userProfile);
        await userDetails.save();
        res
          .status(201)
          .json({ message: "User details updated successfully" });
      } else {
        res.status(404).send({
          message: "User details Not Found!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  session.endSession();
};

module.exports = {
  createUser,
  getAllUser,
  userLogin,
  getUserByRole,
  getUserById,
  resetPassword,
  resetEmail,
  deleteUser,
  updateUserStatus,
  getActiveUSersCount,
  updateUserDetails,
};
