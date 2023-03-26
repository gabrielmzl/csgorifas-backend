const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: 'No token provided.'
    })
  }

  try {
    const { steamID64 } = jwt.verify(authorization, process.env.JWT_SECRET);

    req.userId = steamID64;

    return next();
  } catch (e) {
    return res.status(401).json({
      success: false,
      message: 'Failed to authenticate token.'
    })
  }
}

module.exports = isAuthenticated;