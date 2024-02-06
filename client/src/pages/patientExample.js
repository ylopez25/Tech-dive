import React, { useState, useEffect } from "react";

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
        <>
            <div>
                <h2>Patient Info</h2>
            </div>
            <div>
                <h1>Patient Example</h1>
                {patient.map(patient => (
                    patient && (
                        <>
                            <div key={patient._id}>
                                {patient.age}
                            </div>
                            <div key={patient._id}>
                                {patient.keyFindings}
                            </div>
                        </>
                    )
                ))}
            </div>
        </>
    );
}

export default PatientExample;
