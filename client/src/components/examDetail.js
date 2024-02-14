import React, { useState, useEffect } from "react";
import { useExams } from "../pages/exams";
import { Img } from "@chakra-ui/react";

const ExamDetails = () => {
    const { selectedExam } = useExams();

    const [examData, setExamData] = useState(() => {
        const exam = sessionStorage.getItem('exam');
        return JSON.parse(exam) || null;
    });

    useEffect(() => {
        try {
            setExamData(selectedExam)
            sessionStorage.getItem('exam', JSON.stringify(examData))
        } catch (e) {
            console.error(e)
        }
    }, [examData]);

    if (examData) {
        return (
            <>
                <h1
                    style={{ padding: '20px' }}
                >
                    Details
                </h1>
                <ul>
                    <li>
                        {examData.age}
                    </li>
                    <li>
                        {examData.patientId}
                    </li>
                    <Img
                        src={examData.imageURL}
                        alt='image'
                    >
                    </Img>

                </ul>
            </>
        )
    }
}

export default ExamDetails;
