import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PatientInfo() {

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
        <h1>
          Patient Info
        </h1>
        <li>Patient Id: "COVID-2019</li>
        <li>Age: 29</li>
        <li>Sex: F</li>
        <li>BMI: 25</li>
        <li>Zipcode: 11204</li>
      </div>
    </>
  );
}

export default PatientInfo;
