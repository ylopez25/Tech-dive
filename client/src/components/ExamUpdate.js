import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Grid, Input, List, ListItem, UnorderedList, Center } from "@chakra-ui/react";

function ExamUpdate() {

    const {id} = useParams();


    const [exam, setExam] = useState({})


    useEffect(() => {
        const fetchExam = async () => {
            try {
                const response = await fetch(`http://localhost:9000/exams/${id}`)
                const res = await response.json();
                setExam(res)
            }
            catch (e) {
                console.error("Error fetching exam:", e)
            }
        }
        fetchExam();
    }, [id])

    console.log(exam)



    return (
        <div>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
            <div className="patient-update">
            <List><h1>Patient Update</h1>

            <ListItem>
                <Input placeholder={exam.patientId}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.age}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.bmi}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.sex}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.zipCode}></Input>
            </ListItem>
            
            </List>

            </div>

            <div className="exam-update">
                <List><h1>Exam Update</h1>

                <ListItem>
                <Input placeholder={exam.examTypeId}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.imageURL}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.keyFindings}></Input>
            </ListItem>

            <ListItem>
                <Input placeholder={exam.brixiaScores}></Input>
            </ListItem>
            
            </List>
            </div>
            </Grid>

        </div>
    )

}

export default ExamUpdate;

