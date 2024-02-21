//? 12 require express to then..
const express = require('express');
const {
    getExams,
    getExam,
    getPatientExams,
    createExam,
    deleteExam,
    updateExam

} = require('../controllers/exam-controller') //*
const router = express.Router()


//! GET ALL
//* exams/
router.get('/', getExams)

//! GET ALL PATIENT EXAMS
//* exams/patient/:id/exams
router.get('/patient/:id/exams', getPatientExams)

//! GET ONE
//* exams/:id
router.get('/:id', getExam)

//! POST NEW Exam
//* exams/createExam
//todo add admin id param  for authenticaion etc
router.post('/createExam', createExam)


//! DELETE ONE
//* exams/:id
router.delete('/:id', deleteExam)

//! UPDATE ONE
//* exams/:id/updateExam
router.patch('/:id/updateExam', updateExam)

//? exporter
module.exports = router
