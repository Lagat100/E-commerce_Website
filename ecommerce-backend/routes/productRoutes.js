// productRoutes is a router that handles all the routes related to products.
const express = require('express');
const { createProduct, updateProduct, deleteProduct, getProducts } = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

const router = express.Router();

// Only admins can create, update, and delete products
router.post('/create', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

// Public route to get products
router.get('/', getProducts);

module.exports = router;
