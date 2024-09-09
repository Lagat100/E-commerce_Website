// productRoutes
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new product (admin only)
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl, stock } = req.body;
  try {
    const newProduct = new Product({ name, description, price, imageUrl, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
