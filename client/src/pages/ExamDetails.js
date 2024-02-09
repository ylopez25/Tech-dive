import React, { useState, useEffect, useContext } from "react";
import ExamInfo from "../components/ExamInfo";
import {useExamContext} from "../context/ExamContext";

function ExamDetails() {
    const {exam} = useExamContext()
  return (
    <>
      <div className="exam-info">
        <ExamInfo exam = {exam}/>
      </div>
    </>
  );
}

export default ExamDetails;
