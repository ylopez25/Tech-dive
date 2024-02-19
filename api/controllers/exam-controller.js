const Exam = require('../models/examModel')  //*1
const mongoose = require('mongoose')


//todo get all exams
const getExams = async (req, res) => {
    const exams = await  Exam.find({}).sort({
        createdAt: -1
    })

    res.status(200).json(exams)
    
}


//todo GET ALL exams associated with patientID
const getPatientExams = async (req, res) => {
    const  { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Patient or Exam does not exists'})
    }

    const exam = await Exam.findById(id)
    const patientId = exam.patientId
    
    const patientExamsreq = await  Exam.find({
        patientId: `${patientId}`
    })
    
    let patient = {
        id: id,
        patientid: patientId, 
        age: exam.age, 
        sex: exam.sex, 
        zipCode: exam.zipCode, 
        bmi: exam.bmi, 
        exams: patientExamsreq
    }

    res.status(200).json(patient)
}


//todo GET one exam by id
const getExam = async (req, res) => {
    const  { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such exam exists'})
    }

    const exams = await Exam.findById(id)

    if (!exams) {
        return res.status(404).json({error: 'No such exam exists'})
    }

    res.status(200).json(exams)
}




//todo POST exam
const createExam = async (req,res, next) => {

    const {adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScore, imageURL} = req.body
    
    try {
        const exam = await Exam.create({adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScore, imageURL})
        res.status(200).json(exam)
    } catch (error) { 
     res.status(400).json({error : error.message}) 
    }
    
    }




//todo Delete exam
const deleteExam = async (req, res) => {
    const {id} = req.params
    
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such exam to delete'})
    }
    
    const exam = await Exam.findOneAndDelete({_id: id})

    if (!exam) {
        return res.status(404).json({error: 'No such exam to delete'})
    }

    res.status(200).json(`successfully deleted ${exam.examTypeId} from patient ${exam.patientId}'s file` )
    
}


    //todo update a Exam
    const updateExam = async (req, res) => {
        const {id} = req.params
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No Such exam to update'})
        }
    
        const examBefore = await Exam.findOneAndUpdate({_id: id}, {
            ...req.body
        })
    
        if (!examBefore) {
            return res.status(404).json({error: 'No such exam to update'})
        }

        const examAfter = await Exam.findById(id)
    
        res.status(200).json(examAfter)
    }
    

module.exports = {
    getExams,
    getExam,
    getPatientExams,
    createExam,
    deleteExam,
    updateExam
  };
  