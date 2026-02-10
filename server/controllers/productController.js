const Product = require("../models/Product");


// READ (Get all products)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};


// CREATE (Add product)
exports.addProduct = async (req, res) => {
  try {

    const { productname, category, image, price, unit } = req.body;

    if (!productname || !category || !image || !price || !unit) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newProduct = new Product({
      productname,
      category,
      image,
      price,
      unit
    });

    await newProduct.save();

    res.json({ message: "Product added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};


// UPDATE (Edit product)
exports.updateProduct = async (req, res) => {
  try {

    const id = req.params.id;

    await Product.findByIdAndUpdate(id, req.body);

    res.json({ message: "Product updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};


// DELETE
exports.deleteProduct = async (req, res) => {
  try {

    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
