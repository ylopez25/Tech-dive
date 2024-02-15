import { React, useState, useEffect } from "react";
import { Grid, GridItem, Heading, FormControl, Img, Text, Button } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useExams } from "../pages/exams";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FormTextComp, FormSelectComp } from "./formComp";

export default function UpdatePage() {
    const { selectedExam, ExamTypes, exams, setExams, setSelectedExam, updateExam } = useExams();

    const [values, setValues] = useState({
        _id: "",
        exam_type_id: "",
        brixiaScores: "",
        keyFindings: "",
        imageURL: ""
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    useEffect(() => {
        async function conditionalSpinner(selectedExam, formSubmitted) {
            if (!selectedExam) {
                return (
                    <>
                        <Heading
                            style={{ paddingTop: '100px', alignItems: 'center' }}
                        >
                            UPDATE EXAM
                        </Heading>
                        <Spinner
                            marginTop='50px'
                        />
                    </>
                )
            }
            if (!formSubmitted) {
                setValues({
                    ...values,
                    _id: selectedExam._id,
                    exam_type_id: selectedExam.exam_type_id,
                    brixiaScores: selectedExam.brixiaScores,
                    keyFindings: selectedExam.keyFindings,
                    imageURL: selectedExam.imageURL
                });
            }
        }
        conditionalSpinner()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        console.log(values)
    }


    if (selectedExam) {
        return (
            <>
                <Heading
                    marginTop='80px'
                >
                    UPDATE EXAM
                </Heading>
                <Grid
                    marginTop="50px"
                    templateColumns='repeat(3, 1fr)'
                    gap={2}
                    height="600px"
                    width="100%"
                >
                    <GridItem
                        // marginRight="5"
                        width="80%"
                        marginLeft="10"
                        border="1px solid black"
                        marginBottom="10"
                    // height="100px"
                    >
                        <ul
                            style={{ textAlign: 'start', paddingLeft: '20px' }}
                        >
                            <div style={{ padding: '10px' }}>
                                <h1
                                    style={{ padding: '20px', textDecorationLine: 'underline' }}
                                >Patient Info</h1>
                                <li>Patient Id: {selectedExam.patientId}</li>
                                <li>Age: {selectedExam.age}</li>
                                <li>Sex: {selectedExam.sex}</li>
                                <li>BMI: {selectedExam.bmi}</li>
                                <li
                                >Zipcode: {selectedExam.zipCode}</li>
                                <h1
                                    style={{ padding: '20px', textDecorationLine: 'underline' }}
                                >Exam Info</h1>
                                <li>Exam ID: {selectedExam._id}</li>
                                <li>Exam Type: {selectedExam.exam_type_id}</li>
                                <li>Brixia Score: {selectedExam.brixiaScores}</li>
                                <li>Key Findings: {selectedExam.keyFindings}</li>
                                <Img
                                    style={{ padding: '30px' }}
                                    width="200" height="200"
                                    src={selectedExam.imageURL}
                                >
                                </Img>
                            </div>
                        </ul >
                    </GridItem>
                    <GridItem
                        width="25"
                        marginTop="200"
                    >
                        <ArrowRightIcon />
                        <Text
                            paddingTop="20px"
                        >
                            Update ExamId, Exam Type, Brixia Score, Key Findings, Image
                        </Text>
                    </GridItem>
                    <GridItem
                        width="90%"
                        marginBottom="10"
                        border="1px solid blue"
                    >
                        <form
                            action='submit'
                            onSubmit={handleSubmit}
                        >
                            <FormControl
                            >
                                <FormTextComp
                                    label='ExamID'
                                    type='text'
                                    name="_id"
                                    id="_id"
                                    value={values._id}
                                    helper='Enter new ExamID'
                                    onChange={e => setValues({ ...values, _id: e.target.value })}
                                />

                                <FormSelectComp
                                    label='Exam Types'
                                    name="exam_type_id"
                                    id="exam_type_id"
                                    value={values.exam_type_id}
                                    placeholder='Select Exam Type'
                                    data={ExamTypes}
                                    onChange={e => setValues({ ...values, exam_type_id: e.target.value })}
                                />

                                <FormTextComp
                                    label='Brixia Score'
                                    type='text'
                                    id="brixiaScore"
                                    name="brixiaScore"
                                    value={values.brixiaScores}
                                    helper='Enter new Brixia Score'
                                    onChange={e => setValues({ ...values, brixiaScores: e.target.value })}
                                />

                                <FormTextComp
                                    label='Key Findings'
                                    type='text'
                                    name="keyFindings"
                                    id="keyFindings"
                                    value={values.keyFindings}
                                    helper='Enter new Key Findings'
                                    onChange={e => setValues({ ...values, keyFindings: e.target.value })}
                                />

                                <FormTextComp
                                    label='New Image'
                                    type='url'
                                    id="imageURL"
                                    name="imageURL"
                                    value={values.imageURL}
                                    helper='Enter new Image via url'
                                    onChange={e => setValues({ ...values, imageURL: e.target.value })}
                                />
                                <Button
                                    marginTop='5'
                                    marginBottom='5'
                                    colorScheme="pink"
                                    type='submit'
                                >
                                    UPDATE
                                </Button>
                            </FormControl>
                        </form>
                    </GridItem>
                </Grid>
            </>
        )
    }
}
