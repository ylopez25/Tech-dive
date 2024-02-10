//? 12 require express to then..
const express = require('express') 
const {
    getExams,
    // getExam,
    // createExam,
    // deleteExam,
    // updateExam

} = require('../controllers/exam-controller') //*
const router = express.Router()

//? 13 go back to server.js and give it access to this new page of workout routes

//? 15. set up routes. 
//! GET ALL
// router.get('/exams', getExams)
    // res.json({msg:'test for getall'})

// })
 
//! GET ONE
//* router.get('/:id', getExam)
//     res.json({msg: 'get single test'})
// })

//! POST NEW Exam
//* router.post('/', createExam)
//async (req,res) => {
// const {title, load, reps} = req.body

// try {               //*6 add async and await
//     const Exam = await Exam.create({title, load, reps})
//     res.status(200).json(Exam) //* 8
// } catch (error) { //* 7
//  res.status(400).json({error : error.message}) //* 9 create controller + controllerExam
// } //* 10 delete route, leave it at 'router.post('/', createExam)
// }
// )

//! DELETE ONE
//* router.delete('/:id', deleteExam)

//! UPDATE ONE
//* router.patch('/:id', updateExam)

//? exporter
module.exports = router