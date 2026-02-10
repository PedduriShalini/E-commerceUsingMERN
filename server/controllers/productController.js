const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const { name, price, category, image } = req.body;

    const newProduct = new Product({
      name: name,
      price: Number(price),
      category: category,
      image: image
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding product" });
  }
};

