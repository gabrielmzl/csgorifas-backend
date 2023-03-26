const User = require('../../models/User');
const jwt_decode = require('jwt-decode');

async function getUserInfos(req, res) {
  const token = req.headers['authorization'];
  var decoded = jwt_decode(token);

  const user = await User.findOne({ 'steam.steamID64': decoded.steam.steamID64 });
  res.status(200).json({ success: true, user: user });
}

module.exports = getUserInfos