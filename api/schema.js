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

const examSchema = new Schema({
	id: {
		type: Number,
	},
	patientId: {
		type: String,
	},
	age: {
		type: Number,
	},
	sex: {
		String,
	},
	zipCode: {
		type: Number,
	},
	bmi: {
		type: Float,
	},
	examId: {
		type: Number,
	},
	keyFindings: {
		type: String,
	},
	brixaScores: {
		type: Number,
	},
	imageURL: {
		type: URL,
	},
});

module.exports = mongoose.model("Admin", adminSchema);
module.exports = mongoose.model("Exam", examSchema);
