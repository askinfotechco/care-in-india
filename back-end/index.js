const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/user.router");
const productRoutes = require("./routes/product.router");
const sliderRoutes = require("./routes/slider.router");
const orderRoutes = require("./routes/order.router");
const categoryRoutes = require("./routes/category.router");
const doctorDetailsRoutes = require("./routes/doctorDetails.router");
require("dotenv").config();
const upload = require("./multer");
const cloudinary = require("./cloudinary");
const fs = require("fs");
const { url } = require("inspector");

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

//root route
app.get("/", (req, res) => {
  res.send("App launched successfully!");
});

app.use("/auth/user/", userRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/order/", orderRoutes);
app.use("/api/slider/", sliderRoutes);
app.use("/api/doctor/", doctorDetailsRoutes)

app.use("/upload-images", upload.array("image"), async(req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, 'Images');
  if (req.method === 'POST') {
    const urls = []
    const files = req.files
    for (const file of files) {
      const { path } = file;
      urls.push(newPath);
      fs.unlinkSync(path);
    }

    res.status(200).json({
      message: "Images Uploaded Successfully",
      data: urls
    })
  }else {
    res.status(405).json({
      err: "Images not uploaded successfully"
    })
  }
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
