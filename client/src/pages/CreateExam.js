// going to add a 'add exam', 'random exam', 'cancel button'
/**
 *
 * add exam - add records to all exams, random exam - create new exam with random values found in curent db
 */
import React from 'react'
import { useState, useEffect } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import { Grid, GridItem } from "@chakra-ui/react";
import * as Yup from 'yup';
import styled from "@emotion/styled";
import { useToast } from '@chakra-ui/react';


export const RedButton = styled.button`
  border-radius:5px;
  background-color: red;
  border: 2px solid red;
  color: #454545;
  padding: 6px 8px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
export const GreenButton = styled.button`
border-radius:5px;
background-color: #66FF99;
border: 2px solid #66FF99;
color: #454545;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: white;
}`

export const BlueButton = styled.button`
border-radius:5px;
background-color:#87CEEB;
border: 2px solid SkyBlue;
color: #454545;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: white;
}`



const CreateExam = ({ exams, examtypes }) => {
    const toast = useToast()

    // const randomExam = () => {
    //     console.log(Math.floor(Math.random() * exams.length))
    // }

    const MyTextInput = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input>. We can use field meta to show an error
        // message if the field is invalid and it has been touched (i.e. visited)
        const [field, meta] = useField(props);
        return (
            <>
                <label
                    style={{ marginRight: '10px', fontWeight: 'bold' }}
                    htmlFor={props.id || props.name}>{label}</label>
                <div>
                    <input
                        style={{
                            backgroundColor: 'white',
                            marginBottom: '30px',
                            WebkitTextFillColor: 'black', textAlign: 'start', borderRadius: '5px', border: "1px solid black", width: "80%"
                        }}
                        className="text-input" {...field} {...props} />
                </div>

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
                    style={{ textAlign: 'start', fontWeight: 'bold' }}
                >
                    <label htmlFor={props.id || props.name}>{label}</label>
                </div>
                <div
                    style={{ textAlign: 'start' }}
                >
                    <select
                        style={{
                            textAlign: 'center',
                            height: '25px', marginRight: '20px', borderRadius: '5px', width: '82%', backgroundColor: 'silver', marginBottom: '20px'
                        }}
                        {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </div>
            </>
        );
    };

    const [submission, setSubmission] = useState(false)
    const handleSubmit = (values) => {
        setSubmission(false)

        const postUrl = 'http://localhost:9000/exams/createExam'
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': "application/json",
                'accept': 'application/json'
            },
        };
        fetch(postUrl, fetchConfig)
            .then(res => {
                if (!res.ok) {
                    setSubmission(false)
                } else {
                    setSubmission(true)
                }
                res.json()
            })
            .then(() => {
                const PromiseE = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (submission === true) {
                            resolve('Congrats!')
                            // if (resolve('Congrats')) {
                            //     setSubmission(false)
                            // }
                        } else {
                            reject('Invalid Exam Submission')
                        }
                    }, 1000)
                });
                toast.promise(PromiseE, {
                    success: { title: 'Congrats!', description: 'Exam Submitted' },
                    error: { title: 'Invalid Exam Submission', description: 'Please submit a valid Exam' },
                    loading: { title: 'Submitting', description: 'Please wait' },
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <GreenButton
                style={{ marginTop: '20px', marginLeft: '20px', marginRight: '10px', fontWeight: 'bold' }}
                onClick={() => {
                    // randomExam()
                }}
            >
                Random Exam
            </GreenButton >
            <BlueButton
                form='my-form'
                type='submit'
                style={{ marginTop: '20px', marginRight: '100px', fontWeight: 'bold' }}
            >
                Create Exam
            </BlueButton>
            {/* <Heading
                style={{ marginTop: '50px' }}
                color="black"
            >
                Exam and Patient Info
            </Heading> */}
            <Formik
                initialValues={{
                    adminId: "",
                    patientId: "",
                    age: 0,
                    sex: "",
                    zipCode: "",
                    bmi: 0,
                    examTypeId: "",
                    keyFindings: "",
                    brixiaScores: "",
                    imageURL: ""
                }}
                //can add type validation and require text/selection inputs at a later time
                validationSchema={Yup.object({
                    adminId: Yup.string(),
                    patientId: Yup.string(),
                    age: Yup.number(),
                    sex: Yup.string(),
                    zipCode: Yup.string(),
                    bmi: Yup.number(),
                    examTypeId: Yup.string().oneOf(
                        [...examtypes]
                    ),
                    keyFindings: Yup.string(),
                    brixiaScores: Yup.string(),
                    imageURL: Yup.string(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values)
                    setSubmitting(false)
                }}
            >
                <Form
                    id='my-form'
                    style={{ display: "grid", flexDirection: 'column' }}>
                    <Grid
                        color='black'
                        marginTop="50px"
                        templateColumns='repeat(3, 1fr)'
                        gap={20}
                        height="600px"
                        width="100%"
                    >
                        <GridItem
                            width="100%"
                        >
                            <MyTextInput
                                label="Admin Id"
                                name="adminId"
                                type="text"
                            />
                            <MyTextInput
                                label="Patient Id"
                                name="patientId"
                                type="text"
                            />
                            <MyTextInput
                                label="age"
                                name="age"
                                type="number"
                            />
                            <MyTextInput
                                label="Sex"
                                name="sex"
                                type="text"
                            />
                            <MyTextInput
                                label="ZipCode"
                                name="zipCode"
                                type="text"
                            />
                            <MyTextInput
                                label="bmi"
                                name="bmi"
                                type="number"
                            />
                        </GridItem>
                        <GridItem>
                            <MySelect
                                label="examTypeId"
                                name="examTypeId"
                            >
                                {examtypes.map((type) =>
                                    type && (<option
                                        key={type}
                                        value={type}
                                    >{type}</option>)
                                )}
                            </MySelect>
                            <MyTextInput
                                label="keyFindings"
                                name="keyFindings"
                                type="text"
                            />
                            <MyTextInput
                                label="brixiaScores"
                                name="brixiaScores"
                                type="text"
                            />
                            <MyTextInput
                                label="imageURL"
                                name="imageURL"
                                type="text"
                            />
                        </GridItem>
                    </Grid>

                </Form>
            </Formik>
        </>
    )
}

export default CreateExam;
