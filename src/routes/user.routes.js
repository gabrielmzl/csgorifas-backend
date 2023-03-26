const router = require('express').Router();
const getUserInfos = require('../controllers/user/getUserInfos');
const isAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/', isAuthenticated, getUserInfos)

module.exports = router;