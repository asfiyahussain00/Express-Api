const { Schema, model } = require('mongoose')


const productSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true, 
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true, 
  },
 
  image: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
