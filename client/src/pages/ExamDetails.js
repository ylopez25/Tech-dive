
import ExamInfo from "../components/ExamInfo";
import { useExamContext } from "../context/ExamContext";
import '../App.css'

function ExamDetails() {
  const { exam } = useExamContext()
  return (
    <>
      <div className="exams-info">
        <ExamInfo examContext={exam} />
      </div>
    </>
  );
}

export default ExamDetails;
