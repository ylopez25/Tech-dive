//? 12 require express to then..
const express = require('express');
const {
    getExams,
    getExam,
    getPatientExams,
    getExamTypes,
    createExam,
    deleteExam,
    updateExam

} = require('../controllers/exam-controller') //*
const router = express.Router()


//! GET ALL
router.get('/', getExams)

//! GET ALL PATIENT EXAMS
router.get('/patient/:id/exams', getPatientExams)

//! GET ALL EXAM TYPES 
router.get('/types', getExamTypes)

//! GET ONE
router.get('/:id', getExam)

//! POST NEW Exam
//todo add admin id param  for authenticaion etc
router.post('/createExam', createExam)


//! DELETE ONE
router.delete('/:id', deleteExam)

//! UPDATE ONE
router.patch('/:id/updateExam', updateExam)

//? exporter
module.exports = router