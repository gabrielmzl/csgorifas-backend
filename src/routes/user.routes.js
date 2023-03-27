const router = require('express').Router();
const getUserInfos = require('../controllers/user/getUserInfos');
const getUserInventory = require('../controllers/user/getUserInventory');
const isAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/', isAuthenticated, getUserInfos)
router.get('/steam/inventory', isAuthenticated, getUserInventory)

module.exports = router;