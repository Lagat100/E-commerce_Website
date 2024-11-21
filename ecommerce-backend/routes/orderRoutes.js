// orderRoutes
const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
  const { user, products, totalAmount, shippingAddress } = req.body;
  console.log(req.body);
   try {
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user order history
router.get('/', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
