import React, { useState, useEffect } from "react";
import { Img } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'

const _ = require('lodash');


const PatientExample = () => {
    const [loading, setLoading] = useState(false)
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16406504')
                const res = await response.json();
                const patient_data = res["exams"]
                setLoading(false)
                setPatient(patient_data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchPatient();
    }, []);
    if (loading) {
        return (
            <>
                <Spinner
                    className="spinner"
                    size="lg"
                />
                <div className="navItem">
                    <h2>Patient Info</h2>
                    <h1>
                        Number of Patient Records: {patient.length}
                    </h1>
                </div>
            </>
        )
    }
    if (!loading) {
        return (
            <>
                <div className="navItem">
                    <h2>Patient Info</h2>
                    <h1>
                        Number of Patient Records: {patient.length}
                    </h1>
                </div>
                <div className="navItem">
                    <h1>Patient Example</h1>
                    {patient.map(patient => (
                        patient && (
                            <React.Fragment key={patient._id}>
                                <Img
                                    width='20%'
                                    marginLeft='auto'
                                    marginRight='auto'
                                    src={patient.imageURL}
                                />
                                <div>
                                    {patient.age}
                                </div>
                                <div>
                                    {patient.keyFindings}
                                </div>
                            </React.Fragment>
                        )
                    ))}
                </div>
            </>
        );
    }
}

export default PatientExample;
