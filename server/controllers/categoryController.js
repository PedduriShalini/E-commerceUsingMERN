const Category = require("../models/Category");

// GET ALL CATEGORIES
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

// ADD CATEGORY
exports.addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const newCategory = new Category({
      name,
      image
    });

    await newCategory.save();

    res.json({ message: "Category added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
