import { Img } from '@chakra-ui/react';

function ExamInfo({ exam }) {
    console.log(exam)
    return (
        <>
            <ul>Exam Id: {exam.examId}
                <div style={{ padding: '10px' }}>
                    <h1
                        style={{ padding: '20px', textDecorationLine: 'underline' }}
                    >Patient Info</h1>
                    <li>Patient Id: {exam.patientId}</li>
                    <li>Age: {exam.age}</li>
                    <li>Sex: {exam.sex}</li>
                    <li>BMI: {exam.bmi}</li>
                    <li
                    >Zipcode: {exam.zipCode}</li>
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
        </>
    )
}

export default ExamInfo;
