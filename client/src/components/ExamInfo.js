import { Img } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import PatientInfo from './PatientInfo';
import '../App.css'

function ExamInfo() {

    const [exam, setExam] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const response = await fetch(`http://localhost:9000/exams/${id}`)
                const res = await response.json();
                setExam(res)
            }
            catch (e) {
                console.error("Error fetching exam:", e)
            }
        }
        fetchExam();
    }, [id])


    return (
        <>
            <div className='exam-info'>
                <ul>
                    <div style={{ padding: '10px' }}>
                        <PatientInfo
                            parent="ExamInfo" />
                        <h1
                            style={{ padding: '20px', textDecorationLine: 'underline' }}
                        >Exam Info</h1>
                        <li>Exam ID: {exam.examTypeId}</li>
                        <li>Brixia Score: {exam.brixiaScore}</li>
                        <li>Key Findings: {exam.keyFindings}</li>
                        <Img
                            style={{ padding: '30px' }}
                            width="200" height="200"
                            src={exam.imageURL}
                        >
                        </Img>
                    </div>
                </ul >
            </div>
        </>
    )
}

export default ExamInfo;
