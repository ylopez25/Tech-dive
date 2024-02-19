import { Img } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PatientInfo from './PatientInfo';
import { useParams } from "react-router-dom"


function ExamInfo() {

    const {id} = useParams();
    const [exam, setExam] = useState([])

     useEffect(() => {
        fetch(`http://localhost:9000/exams/${id}`)
      .then(response => response.json())
      .then(data => setExam(data))
      .catch(error => console.error("Error fetching patient:", error));
  }, [id])

    return (
        <div>
            <ul>Exam Id: {exam.examTypeId}
                <div style={{ padding: '10px' }}>
                    <PatientInfo />
                    <h1
                        style={{ padding: '20px', textDecorationLine: 'underline' }}
                    >Exam Info</h1>
                    <li>Exam ID: {exam._id}</li>
                    <li>Date</li>
                    <li>Brixia Score: {exam.brixiaScores}</li>
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
    )
}

export default ExamInfo;
