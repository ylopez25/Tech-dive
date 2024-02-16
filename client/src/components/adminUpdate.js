import { React, useState, useEffect } from "react";
import { Grid, GridItem, Heading, FormControl, Img, Text } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useExams } from "../pages/exams";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from "@emotion/styled";

const GreenButton = styled.button`
border-radius:5px;
background-color: white;
border: 2px solid green;
color: black;
margin-top:100px;
padding: 6px 8px;
margin-left:70px;
font-weight: bold;
width:50%;
&:hover {
  color: green;
}
`

export default function UpdatePage() {
    const { selectedExam, ExamTypes, exams, setExams, setSelectedExam, updateExam } = useExams();

    const performUpdate = async (e) => {
        const response = await updateExam(e, selectedExam)
        if (response) {
            try {
                // refresh on page, create new obj w/ updated properties with obj spreading
                setSelectedExam({ ...response });
            } catch (e) {
                console.error(e)
            }
        }
    }

    const MyTextInput = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input>. We can use field meta to show an error
        // message if the field is invalid and it has been touched (i.e. visited)
        const [field, meta] = useField(props);
        return (
            <>
                <label
                    style={{ textAlign: 'center', marginTop: '5px', }}
                    htmlFor={props.id || props.name}>{label}</label>
                <input
                    style={{
                        backgroundColor: 'white',
                        WebkitTextFillColor: 'gray', textAlign: 'center', borderRadius: '5px', border: "1px solid black", width: "80%", marginLeft: '30px'
                    }}
                    className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
    };
    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <div
                    style={{ textAlign: 'center' }}
                >
                    <label htmlFor={props.id || props.name}>{label}</label>
                </div>
                <div
                    style={{ textAlign: 'center' }}
                >
                    <select
                        style={{ borderRadius: '5px', width: '80%', backgroundColor: 'silver' }}
                        {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </div>
            </>
        );
    };


    if (!selectedExam) {
        return (
            <>
                <Heading
                    style={{ paddingTop: '70px', alignItems: 'center' }}
                >
                    HELLO ADMIN
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
                    color="black"
                    marginTop='80px'
                >
                    HELLO ADMIN
                </Heading>
                <Grid
                    color='black'
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
                        <h1>Update Exam</h1>
                        <Formik
                            initialValues={{
                                _id: "",
                                exam_type_id: "",
                                brixiaScores: "",
                                keyFindings: "",
                                imageURL: ""
                            }}
                            //can add type validation and require text/selection inputs at a later time
                            validationSchema={Yup.object({
                                _id: Yup.string(),
                                exam_type_id: Yup.string().oneOf(
                                    [...ExamTypes]
                                ),
                                brixiaScores: Yup.string(),
                                keyFindings: Yup.string(),
                                imageURL: Yup.string(),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                performUpdate(values)
                                setSubmitting(false)
                            }}
                        >
                            <Form style={{ display: "grid", flexDirection: 'column', gap: '10px' }}>
                                <MyTextInput
                                    label="_id"
                                    name="_id"
                                    type="text"
                                    placeholder="Exam ID"
                                />
                                <MySelect
                                    label="Exam Types "
                                    name="exam_type_id"
                                >
                                    {ExamTypes.map((type) =>
                                        type && (<option
                                            key={type}
                                            value={type}
                                        >{type}</option>)
                                    )}
                                </MySelect>
                                <MyTextInput
                                    label="brixiaScores"
                                    name="brixiaScores"
                                    type="text"
                                    placeholder="Brixia Scores"
                                />
                                <MyTextInput
                                    label="keyFindings"
                                    name="keyFindings"
                                    type="text"
                                    placeholder="Key Findings"
                                />
                                <MyTextInput
                                    label="imageURL"
                                    name="imageURL"
                                    type="text"
                                    placeholder="imageURL"
                                />
                                <GreenButton
                                    type="submit"
                                >
                                    UPDATE
                                </GreenButton>
                            </Form>
                        </Formik>
                    </GridItem>
                </Grid>
            </>
        )
    }
}
