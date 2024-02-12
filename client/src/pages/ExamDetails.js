import React, { useState, useEffect, useContext } from "react";
import ExamInfo from "../components/ExamInfo";
import { useExamContext } from "../context/ExamContext";
import '../App.css'

function ExamDetails() {
  const { exam } = useExamContext()
  return (
    <>
      <div className="exams-info">
        <ExamInfo exam={exam} />
      </div>
    </>
  );
}

export default ExamDetails;
