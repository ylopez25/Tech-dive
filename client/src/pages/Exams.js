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
        {/* {response && response?.exams[3].patientId} */}

         {/* I commented the mapping feature out for now, it was breaking
         but the Nav Bar is working - Ben */}
        
        {/* {response && response?.exams.map((exam) => (
         <div>
         <h2>{exam.exams.patientId}</h2>
        <p>Age: {exam.age}</p>
        </div>
        ))} */}
      </div>

  );
}
