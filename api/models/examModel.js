const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({ 
adminId,
patientId,
age,
sex,
zip,
bmi ,
examTypeId,
keyFindings,
brixaScore,
imageURL,

}, {timestamps : true})