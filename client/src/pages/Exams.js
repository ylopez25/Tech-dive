import React from "react";
import ExamsList from '../components/ExamsList'
// import { useApi } from "../hooks/use-api";
import { useState, useEffect } from 'react'

// const cors = require('cors')

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // const fetchExams = async () => {

    //   try {
    //     setLoading(true)
    //     const response = await fetch('http://localhost:9000/exams')
    //     const res = await response.json();
    //     setExams(res)
    //     setLoading(false)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }

    const fetchDummyExams = async () => {

      try {
        setLoading(true)
        const response = await fetch('http://https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams:9000/exams')
        const res = await response.json();
        setExams(res)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }


    // fetchExams();
    fetchDummyExams()
  }, []);

  return (
    <>
      <div className="exams">
        <div className="total">
          <div style={{ marginTop: '40px', fontWeight: 'bold' }} className="navItem">
            <h2

            >Patient Exams</h2>
            <h1
            >
              Number of Exams: {exams.length}
            </h1>
          </div>
          <ExamsList loading={loading} exams={exams} />
        </div>
      </div>
    </>
  );
}
