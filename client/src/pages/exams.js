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

    useEffect(() => {
        const fetchExams = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
                const res = await response.json();
                const exams_data = res["exams"]
                exams_data.map(exam => {
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
                console.log(exams_data)
                setLoading(false)
                setExams(exams_data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchExams();
    }, []);

    return (
        <ExamsContext.Provider
            value={{ exams, setExams, selectedExam, setSelectedExam, deleted, setDeleted, loading, deleteExam }}
        >
            {children}
        </ExamsContext.Provider>
    );
}

export const useExams = () => useContext(ExamsContext)
