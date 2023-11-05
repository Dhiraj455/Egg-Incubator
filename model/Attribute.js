const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema(
  {
    timeInHr: {
        type: Number,
        required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attribute = mongoose.model("Attribute", AttributeSchema);
module.exports = Attribute;