const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SliderSchema = new mongoose.Schema(
  {
    heading: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      default: "Inactive",
      enum: ["Active", "Inactive"],
    }
  },
  {
    timestamps: true,
  }
);

const sliderModel = mongoose.model("Slider", SliderSchema);
module.exports = sliderModel;
