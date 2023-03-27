const axios = require('axios');
const jwt_decode = require('jwt-decode');

async function getUserInventory(req, res) {
  const token = req.headers['authorization'];
  var decoded = jwt_decode(token);

  axios.get(`https://api.steamapis.com/steam/inventory/${decoded.steam.steamID64}/730/2?api_key=${process.env.STEAMAPIS_KEY}`)
    .then((response) => {
      res.status(200).json({ success: true, inventory: response.data.descriptions });
    })
    .catch((error) => {
      res.status(400).json({ success: false, error: error });
    })
}

module.exports = getUserInventory