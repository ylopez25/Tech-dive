import React, { createContext, useContext, useState, useEffect } from "react";
import relativeTime from 'dayjs/plugin/relativeTime';
const dayjs = require('dayjs')
dayjs.extend(relativeTime)

const ExamsContext = createContext({});


export const ExamsContextProvider = ({ children }) => {
  const [selectedExam, setSelectedExam] = useState(null)
  const [loading, setLoading] = useState(false)
  const [exams, setExams] = useState([]);
  const [deleted, setDeleted] = useState([])

  // performs delete operation in adminList
  const deletedExams = [...deleted]
  const deleteExam = async (exam) => {
    if (exam && !exam['isDeleted']) {
      exam['isDeleted'] = true
      deletedExams.push(exam)
    }
    let newExams = exams.filter((exam) => exam && !exam['isDeleted'])
    const returnedExams = {
      'not_deleted': newExams,
      'deleted': deletedExams
    }
    return returnedExams
  }
  const ExamTypes = []
  exams.map((exam) => {
    if (exam && !ExamTypes.includes(exam['exam_type_id'])) {
      ExamTypes.push(exam['exam_type_id'])
    }
  })
  // is supposed to perform update operation in adminUpdate
  const updateExam = async (newData, oldE) => {
    Object.keys(newData).map((key) => {
      if (Object.keys(oldE).includes(key)) {
        oldE[key] = newData[key]
      }
    })
    return oldE
  }

  //todo undelete operation for stretch goal

//   const undeleteExam = async (exam) => {
//     if (exams) {
//       let currentExams = [...exams]
//       let deletedExams2 = [...deleted]
//       if (exam && exam['isDeleted']) {
//         exam['isDeleted'] = false
//         currentExams.push(exam)
//       }
//       deletedExams2 = deletedExams.filter((exam) => exam && exam['isDeleted'])
//       const returnedExams = {
//         'not_deleted': currentExams,
//         'deleted': deletedExams2
//       }
//       return returnedExams
//     }
//   }

  useEffect(() => {
    const fetchExams = async () => {
      try {
        // const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        setLoading(true)
        //todo add API fix for deployment
        const response = await fetch('http://localhost:9000/exams')

        //todo put localhost in env
        // const response = await fetch('/api/exams')
        const res = await response.json();
        // const exams_data = res["exams"]
        setExams(res)

        exams.map(exam => {
          if (exam) {
            Object.keys(exam).map(key => {
              /*  going to be moved to admin page when user updates have this change in order for it to be reflected
              exam['last_updated'] = dayjs().fromNow()
              */
              exam['report_id'] = null
              exam['isDeleted'] = false
              if (key === "examId") {
                exam['exam_type_id'] = exam['examId']
                delete exam['examId']
              }
            })
          }
        })
        console.log(exams)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    fetchExams();
  }, []);

  return (
    <ExamsContext.Provider
    //   value={{ exams, setExams, selectedExam, setSelectedExam, deleted, setDeleted, loading, deleteExam, ExamTypes, updateExam, undeleteExam }}
    value={{ exams, setExams, selectedExam, setSelectedExam, deleted, setDeleted, loading, deleteExam, ExamTypes, updateExam }}

    >
      {children}
    </ExamsContext.Provider>
  );
}

export const useExams = () => useContext(ExamsContext)
