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

                const response = await fetch('http://localhost:9000/exams')
                const res = await response.json();
                // const exams_data = res["exams"]
                setExams(res)

            } catch (e) {
                console.error(e)
            }
        }
        fetchExams();
    }, []);

    console.log(exams)

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
