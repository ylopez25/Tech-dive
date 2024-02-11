import React, { useState, useEffect } from "react";
import ExamsList from "./examsP";
import relativeTime from 'dayjs/plugin/relativeTime';
const dayjs = require('dayjs')
dayjs.extend(relativeTime)

const ExamsPage = () => {
    const [loading, setLoading] = useState(false)
    const [exams, setExams] = useState([]);

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
                            exam['isDeleted'] = null
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
        <>
            <div className="navItem">
                <h2 >Patient Exams</h2>
                <h1>
                    Number of Exams: {exams.length}
                </h1>
            </div>
            <ExamsList loading={loading} exams={exams} />
        </>
    );
}

export default ExamsPage;
