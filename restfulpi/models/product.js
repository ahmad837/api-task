var mongoose = require("mongoose");

const joi = require("@hapi/joi");
const { number } = require("@hapi/joi");

var productSchema = mongoose.Schema({
  name: String,
  price: Number,

});

var product = mongoose.model("storeapi", productSchema);

module.exports = product;

