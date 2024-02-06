import React from "react";
import { useApi } from "../hooks/use-api";
export default function Home() {
  //useEffect
  //render exams
  const { response } = useApi();
  console.log(response, "wtf is going on?");
  return (
      <div className="home">
        <h1> List of exams:</h1>
        {response && response?.exams[3].patientId}

        {/* {response && response?.exams.map((exam) => (
         <div key={exam._id}>
         <h2>{exam.patientId}</h2>
        <p>Age: {exam.age}</p>
        </div>
        ))} */}
      </div>

  );
}
