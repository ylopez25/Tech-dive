import React, { useState, useEffect } from "react";
import { useExams } from "../pages/exams";
import { Img } from "@chakra-ui/react";

const ExamDetails = () => {
    const { selectedExam } = useExams();

    const [examData, setExamData] = useState(() => {
        const exam = sessionStorage.getItem('exam');
        return JSON.parse(exam) || null;
    });
    // attempt at preserving data upon refresh
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
                <ul
                    style={{ color: 'black', textAlign: 'start', paddingLeft: '20px' }}
                >
                    <div style={{ padding: '10px' }}>
                        <h1
                            style={{ padding: '20px', textDecorationLine: 'underline' }}
                        >Patient Info</h1>
                        <li>Patient Id: {examData.patientId}</li>
                        <li>Age: {examData.age}</li>
                        <li>Sex: {examData.sex}</li>
                        <li>BMI: {examData.bmi}</li>
                        <li
                        >Zipcode: {examData.zipCode}</li>
                        <h1
                            style={{ padding: '20px', textDecorationLine: 'underline' }}
                        >Exam Info</h1>
                        <li>Exam ID: {examData._id}</li>
                        <li>Date</li>
                        <li>Brixia Score: {examData.brixiaScores}</li>
                        <li>Key Findings: {examData.keyFindings}</li>
                        <Img
                            style={{ padding: '30px' }}
                            width="200" height="200"
                            src={examData.imageURL}
                        >
                        </Img>
                    </div>
                </ul >
            </>
        )
    }
}

export default ExamDetails;
