const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	id: {
		type: Number,
	},
	username: {
		type: String,
		Number,
	},
});

module.exports = mongoose.model('adminModel', adminSchema)
