// authMiddleware is a middleware function that checks if the user is authenticated by verifying the token sent in the request header. If the token is valid, it decodes the token and sets the user id in the request object. If the token is invalid, it sends a 401 status code with a message 'Token is not valid'.
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
