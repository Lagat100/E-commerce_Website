// paymentController.js will handle the paymentIntent creation logic. It will use the Stripe library to create a paymentIntent with the amount provided in the request body.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Payment error' });
  }
};

module.exports = { createPaymentIntent };
