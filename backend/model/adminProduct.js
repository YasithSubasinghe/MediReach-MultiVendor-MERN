const mongoose = require("mongoose");

const adminProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdminProduct", adminProductSchema);
