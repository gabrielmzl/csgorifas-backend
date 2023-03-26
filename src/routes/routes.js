const router = require('express').Router();
const AuthRoutes = require('./auth.routes');
const UserRoutes = require('./User.routes');

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);

module.exports = router;