import React from "react";
import { useApi } from "../hooks/use-api";
export default function Home() {
  const { response } = useApi();
  console.log(response);
  return (

    <div className="home">
      <h1> List of exams:</h1>
      {/* {response && response?.exams[3].patientId} */}
      {/* 
        {response && response?.exams.map((exam) => (
         <div>
         <h2>{exam.exams.patientId}</h2>
        </div>
        ))} */}
    </div>

  );
}
