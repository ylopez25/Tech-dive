const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//todo add sign up columns and validators etc.
const adminSchema = new Schema({
	id: {
		type: String,
	},
	username: {
		type: String,
	 	// unique: true
	},
});

module.exports = mongoose.model('adminModel', adminSchema)
