const passport = require('passport');
const User = require('../models/User');
const SteamStrategy = require('passport-steam').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error, null);
  }
});

passport.use(new SteamStrategy({
  returnURL: process.env.STEAM_RETURN_URL,
  realm: process.env.STEAM_REALM,
  apiKey: process.env.STEAM_API_KEY
}, async (identifier, profile, done) => {
  try {
    const user = await User.findOne({ 'steam.steamID64': profile._json.steamid });
    if (user) {
      const updatedUser = await User.findOneAndUpdate(
        { 'steam.steamID64': profile._json.steamid },
        {
          'steam.avatar': profile._json.avatar,
          'steam.nickname': profile._json.personaname,
        },
        { new: true }
      );
      
      done(null, updatedUser);
    } else {
      const newUser = await User.create({
        steam: {
          avatar: profile._json.avatar,
          id: "https://steamcommunity.com/openid/id/" + profile._json.steamid,
          nickname: profile._json.personaname,
          steamID64: profile._json.steamid,
        }
      });

      const savedUser = await newUser.save();

      done(null, savedUser);
    }
  } catch (error) {
    done(error, null)
  }
}));
