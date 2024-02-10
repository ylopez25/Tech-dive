const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({ 
    adminId : {
        type: Number,
        required: true
    },
    patientId: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    } ,
    examTypeId: {
        type: Number,
        required: true
    },
    keyFindings: {
        type: String,
        required: true
    },
    brixaScore: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },

}, {timestamps : true})

module.exports = mongoose.model('examModel', examSchema)