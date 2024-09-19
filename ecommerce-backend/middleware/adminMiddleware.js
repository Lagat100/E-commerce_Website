const User = require('../models/User');

const admin = async (req, res, next) => {
  try {
    const { userId } = req.body;  

    // Find the user in the database by their ID
    const user = await User.findOne({ _id: userId });
    console.log(user)

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only dd' });
    }

    next();
  } catch (error) {
  
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = admin;