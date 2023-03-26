const jwt = require('jsonwebtoken');

function createJwtToken(user) {
  const userJwt = {
    _id: user._id,
    steam: {
      avatar: user.steam.avatar,
      id: user.steam.id,
      nickname: user.steam.nickname,
      steamID64: user.steam.steamID64,
    },
    tradeToken: user.tradeToken,
  }

  const token = jwt.sign(userJwt, process.env.JWT_SECRET, {
    expiresIn: '1h' // expires in 5min
  });

  return token;
}

module.exports = createJwtToken;