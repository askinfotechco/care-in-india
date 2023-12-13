const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/user.router");
const productRoutes = require("./routes/product.router");
const sliderRoutes = require("./routes/slider.router");
const orderRoutes = require("./routes/order.router");
const categoryRoutes = require("./routes/category.routes");
const doctorDetailsRoutes = require("./routes/doctorDetails.routes");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// const mongo_URL = "mongodb+srv://careinindia:careinindia2023@cluster0.o9wobl2.mongodb.net/careinindia";
const mongodb = process.env.MONGO_URL; //|| mongo_URL;

const configDb = async () => {
  try {
    await mongoose.connect(mongodb);
    console.log("Database Connected");
  } catch (error) {
    console.log("An Error occured!", error);
    process.exit(1);
  }
};

configDb();
app.use("/auth/user/", userRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/order/", orderRoutes);
app.use("/api/slider/", sliderRoutes);
app.use("/api/doctor", doctorDetailsRoutes)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
