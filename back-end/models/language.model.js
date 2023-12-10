const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    iso_code: {
      type: String,
      required: true,
    },

    flag: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      lowercase: true,
      enum: ["show", "hide"],
      default: "show",
    },
  },
  {
    timestamps: true,
  }
);

const languageModel = mongoose.model("Language", LanguageSchema);
module.exports = languageModel;
