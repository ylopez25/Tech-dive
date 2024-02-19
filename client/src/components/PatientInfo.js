import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PatientInfo({ exam }) {

  const { id } = useParams();
  const [patient, setPatient] = useState()
  const [patientExams, setPatientExams] = useState([])

  // useEffect(() => {
  //   fetch(`/api/exams/${id}`)
  //     .then(response => response.json())
  //     .then(data => setPatient(data))
  //     .catch(error => console.error("Error fetching patient:", error));
  // }, [id]);

  return (
    <>
      <div>
        <h1
          style={{ padding: '20px', textDecorationLine: 'underline' }}
        >
          Patient Info
        </h1>
        <li>Patient Id: {exam.patientId}</li>
        <li>Age: {exam.age} </li>
        <li>Sex: {exam.sex} </li>
        <li>BMI: {exam.bmi}</li>
        <li>Zipcode: {exam.zipCode}</li>
      </div>
    </>
  );
}

export default PatientInfo;
