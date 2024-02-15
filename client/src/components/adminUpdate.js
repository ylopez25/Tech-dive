import { React, useState } from "react";
import { Grid, GridItem, Heading, FormControl, Img, Text, Button } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useExams } from "../pages/exams";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FormTextComp, FormSelectComp } from "./formComp";

export default function UpdatePage() {
    const { selectedExam, ExamTypes, exams, setExams, setSelectedExam, updateExam } = useExams();
    const [_id, setId] = ("");
    const [exam_type_id, setType] = ('');
    const [brixia, setBrixia] = ('')
    const [keyF, setkeyF] = ('')
    const [ImgUrl, setImgUrl] = ('')
    const handleInputChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case '_id':
                setId(value)
                break;
            case 'exam_type_id':
                setType(value)
                break;
            case 'brixiaScore':
                setBrixia(value)
                break;
            case 'keyFindings':
                setkeyF(value)
                break
            case 'imageURL':
                setImgUrl(value)
                break;
        }
    };
    const performUpdate = async (exam) => {
        console.log(_id, exam_type_id, brixia, keyF, ImgUrl)
        /**
         * const newExam = {
         *  ""
         * }
         * const updatedExam = await updateExam(exam)
         * setSelectedExam(updatedExam)
         */
    }
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
                        <FormControl

                        >
                            <FormTextComp
                                label='ExamID'
                                type='text'
                                name="_id"
                                helper='Enter new ExamID'
                                // form_input={input._id}
                                onChange={handleInputChange}
                            />
                            <FormSelectComp
                                label='Exam Types'
                                name="exam_type_id"
                                placeholder='Select Exam Type'
                                data={ExamTypes}
                                onChange={handleInputChange}
                            />
                            <FormTextComp
                                label='Brixia Score'
                                type='text'
                                name="brixiaScore"
                                helper='Enter new Brixia Score'
                                // form_input={input.brixiaScore}
                                onChange={handleInputChange}
                            />
                            <FormTextComp
                                label='Key Findings'
                                type='text'
                                name="keyFindings"
                                helper='Enter new Key Findings'
                                // form_input={input.keyFindings}
                                onChange={handleInputChange}
                            />
                            <FormTextComp
                                label='New Image'
                                type='url'
                                name="imageURL"
                                helper='Enter new Image via url'
                                // form_input={input.imageURL}
                                onChange={handleInputChange}
                            />
                            <Button
                                marginTop='10'
                                colorScheme="pink"
                                onClick={() => {
                                    performUpdate(selectedExam)
                                }}
                            >
                                UPDATE
                            </Button>
                        </FormControl>
                    </GridItem>
                </Grid>
            </>
        )
    }
}
