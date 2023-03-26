const router = require('express').Router();
const passport = require('passport');
const createJwtToken = require('../middlewares/createJwtToken');

router.get('/steam', passport.authenticate('steam'));

router.get('/steam/return', passport.authenticate('steam', { failureRedirect: '/auth/steam/redirect' }), (req, res) => {
  const token = createJwtToken(req.user);
  res.redirect(`${process.env.CLIENT_URL}/token?token=${token}`);
});

router.get('/steam/redirect', (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}`);
});

module.exports = router;