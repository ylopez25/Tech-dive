import ExamCreate from "../components/ExamCreate";
import React, { useState, useEffect } from "react";

function CreateExam() {
    const [dummydata, setDummy] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response_dummy = await fetch(
                    "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams"
                );

                const dummy_res = await response_dummy.json();
                const dummy_exams = dummy_res["exams"];
                if (dummy_exams) {
                    setDummy(dummy_exams);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchExams();
    }, []);


    return (
        <ExamCreate dummydata={dummydata} />
    )
}

export default CreateExam;