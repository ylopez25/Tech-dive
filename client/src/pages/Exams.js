import React from "react";
import ExamsList from "../components/ExamsList";
// import { useApi } from "../hooks/use-api";
import { useState, useEffect } from "react";

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);
        // const response = await fetch("http://localhost:9000/exams");
        const response = await fetch("https://rayforce-x.onrender.com/exams");

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
