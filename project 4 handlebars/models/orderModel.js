const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the Order model
const orderSchema = new Schema(
  {
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Address",
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },

    cardNumber: {
      type: String,
      required: true,
    },
    cardHolderName: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Create the Order model using the schema
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
