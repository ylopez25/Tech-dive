import React from "react";
import ExamsList from '../components/ExamsList'
// import { useApi } from "../hooks/use-api";
import { useState, useEffect } from 'react'


export default function Exams() {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchExams = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
                const res = await response.json();
                const exams_data = res["exams"]
                setLoading(false)
                setExams(exams_data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchExams();
    }, []);

    return (
        <>
            <div className="exams">
                <div className="total">
                    <p>Total: {exams.length}</p>
                </div>
                <ExamsList loading={loading} exams={exams} />
            </div>
        </>
    );
}
