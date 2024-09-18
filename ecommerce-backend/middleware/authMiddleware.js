// authMiddleware is a middleware function that checks if the user is authenticated by verifying the token sent in the request header. If the token is valid, it decodes the token and sets the user id in the request object. If the token is invalid, it sends a 401 status code with a message 'Token is not valid'.
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message); // Log the error for debugging
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
