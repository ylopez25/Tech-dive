import React from "react";
import ExamsList from '../components/ExamsList'
// import { useApi } from "../hooks/use-api";
import { useState, useEffect } from 'react'


export default function Exams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        // const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        const response = await fetch('http://localhost:9000/exams')

        //todo put localhost in env
        // const response = await fetch('/api/exams')
        const res = await response.json();
        console.log(res, "res before")

        console.log(res, "res after")

        setExams(res)

        console.log(exams, "Set exam result")

      } catch (e) {
        console.error(e)
      }
    }
    fetchExams();
  }, []);

  return (
    <div className="exams">
      <div className="total">
        <p>Total: {exams.length}</p>
      </div>
      <ExamsList exams={exams} />


    </div>

  );
}
