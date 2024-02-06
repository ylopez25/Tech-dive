import React, { useState, useEffect } from "react";
const _ = require('lodash');

const PatientExample = () => {

    const [patient, setPatient] = useState([]);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16406504')
                const res = await response.json();
                const patient_data = res["exams"]
                setPatient(patient_data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchPatient();
    }, []);

    return (
        <React.Fragment key={_.uniqueId()}>
            <h2>Patient Info</h2>
            <h1>Patient Example</h1>
            {patient.map(patient => (
                patient && (
                    <>
                        <div key={patient.age + patient._id}>
                            {`${patient.age}  +  ${patient.keyFindings}`}
                        </div>
                    </>
                )
            ))}
        </React.Fragment>
    );
}

export default PatientExample;
