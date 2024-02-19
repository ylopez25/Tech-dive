import { useState, useEffect } from "react";
import PatientInfo from "../components/PatientInfo";
import { useParams } from "react-router-dom";

function PatientDetails() {
    const [patient, setPatient] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const response = await fetch(`http://localhost:9000/exams/${id}`)
                const res = await response.json();
                console.log(res)
                setPatient(res)
            }
            catch (e) {
                console.error("Error fetching exam:", e)
            }
        }
        fetchExam();
    }, [id])


    return (
        <>
            <PatientInfo
                patient={patient}
            />
        </>
    )
}

export default PatientDetails;
