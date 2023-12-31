const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
  {
    changesBy: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },

    changes: {
      type: String,
      required: true,
    },
 
    changesIn: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const historyModel = mongoose.model('History', HistorySchema);
module.exports = historyModel;
