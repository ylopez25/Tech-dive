import React from "react";
import ExamsList from "../components/ExamsList";
// import { useApi } from "../hooks/use-api";
import { useState, useEffect } from "react"; 
// import REACT_APP_BASIC from

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);
  // const URL = process.env.
  console.log(process.env.REACT_APP_BASIC);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/exams`);


        
        
        const res = await response.json();


        setExams(res);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchExams();
  }, []);

  return (
    <>
      <div className="exams">
        <div className="total">
          <div m={5} className="navItem">
          </div>
          <ExamsList loading={loading} exams={exams} />
        </div>
      </div>
    </>
  );
}
