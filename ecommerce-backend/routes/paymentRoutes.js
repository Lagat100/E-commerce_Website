// paymentRoutes will handle all the payment related routes like creating a payment intent, etc
const express = require('express');
const { createPaymentIntent } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create-payment-intent', authMiddleware, createPaymentIntent);

module.exports = router;
