const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  balance: {
		type: Number,
		default: 0
	},
  blockedBalance: {
		type: Number,
		default: 0
	},
  email: {
		type: String,
		default: null
	},
  phone: {
		type: String,
		default: null
	},
  activeRaffles: Array,
	rank: {
		type: String,
		default: 'user'
	},
	userRaffles: Array,
	steam: {
		avatar: String,
		id: String,
		nickname: String,
		steamID64: String,
	},
	tradeToken: {
		type: String,
		default: null
	},
});

module.exports = mongoose.model('User', UserSchema);