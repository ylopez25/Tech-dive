const Exam = require('../models/examModel')  //*1
const mongoose = require('mongoose')


//todo get all workouts
const getExams = async (req, res) => {
    const exams = await  Exam.find({}).sort({
        createdAt: -1
    })

    res.status(200).json(workouts)
    
}

module.exports = {
    getExams,
  };
  