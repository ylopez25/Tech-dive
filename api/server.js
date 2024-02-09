require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//listen for requests
app.listen(process.env.PORT, () => {
	console.log("Hey. I'm on port", process.env.PORT);
});

//connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {})
	.catch((error) => {
		console.log(error);
	});
