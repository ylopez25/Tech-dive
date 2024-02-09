function ExamInfo({exam}) {

    return (
        <>
        <div>
        <ul>Exam Id: {exam.examId}
        <li>Date:{exam.date}</li>
        <li>Brixia Score:{exam.brixiaScores}</li>
        <li>Key Findings:{exam.keyFindings}</li>
        </ul>
        </div>
        </>
    )
}

export default ExamInfo;
