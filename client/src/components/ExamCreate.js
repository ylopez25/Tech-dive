import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, GridItem, Input, List, ListItem, FormControl, FormLabel, Button, Heading, Card, CardHeader, CardBody, ButtonGroup, Textarea } from "@chakra-ui/react";
import * as Yup from 'yup';
import styled from "@emotion/styled";
import { useToast } from '@chakra-ui/react';


export const RedButton = styled.button`
  border-radius:5px;
  background-color: #FFCCCB;
  border: 2px solid #FFCCCB;
  color: #454545;
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
font-weight: bold;
&:hover {
  color: white;
}`

export const BlueButton = styled.button`
border-radius:5px;
background-color:#87CEEB;
border: 2px solid SkyBlue;
color: #454545;
font-weight: bold;
&:hover {
  color: white;
}`



const ExamCreate = ({ dummydata }) => {
    const toast = useToast()
    const navigate = useNavigate();

    const [exam, setExam] = useState({
        adminId: Math.floor(Math.random() * 10),
        patientId: "",
        age: "",
        bmi: "",
        sex: "",
        zipCode: "",
        examTypeId: "",
        imageURL: "",
        keyFindings: "",
        brixiaScores: "",
    });

    const [isFocusImage, setIsFocusImage] = useState(false);
    const [isFocusKF, setIsFocusKF] = useState(false);
    const [isFocusPatientId, setIsFocusPatientId] = useState(false);
    const [isFocusExamType, setIsFocusExamType] = useState(false);

    const randomExam = (data) => {
        let number = Math.floor(Math.random() * data.length - 1)
        let object = data[number]
        if (!object.length) {
            object = data[number]
        }
        if (object && !object.adminId) {
            object['adminId'] = Math.floor(Math.random() * data.length - 1)
        }
        console.log(object)
        if (object) {
            Object.keys(object).map((key) => {
                if (object[key] === "") {
                    object[key] = Math.floor(Math.random() * data.length - 1)
                }
                if (key === 'examId') {
                    object['examTypeId'] = object['examId'];
                    delete object['examId']
                }
                return null
            })
        } else {
            object = data[number + 1]
        }
        delete object['_id']
        delete object['__v']
        handleSubmit(object)
    }

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            const postUrl = 'http://localhost:9000/exams/createExam'
            toast({
                title: 'Submitting',
                description: 'Your exam is being submitted!',
                status: 'loading',
                duration: 300,
                isClosable: true,
            });
            const fetchConfig = {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': "application/json"
                },
            };
            const response = await fetch(postUrl, fetchConfig);
            if (!response.ok) {
                throw new Error('Invalid Exam Submission');
            }
            toast({
                title: 'Congrats!',
                description: 'Exam Submitted',
                status: 'success',
                duration: 1000,
                isClosable: true,
            });
            if (response.ok) {
                navigate("/admin");
            }
        } catch (error) {
            toast({
                title: 'Invalid Exam Submission',
                description: 'Please submit a valid Exam',
                status: 'error',
                duration: 1000,
                isClosable: true,
            });
        }
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <Card backgroundColor='white' variant="elevated" m="3" mt="5" p="auto" border='1px' borderColor='teal.400'>
                        <CardHeader>
                            <Heading textColor="black" size="s" align="left" >Create Exam</Heading>
                        </CardHeader>
                        <CardBody>
                            {dummydata.length ? (
                                <ButtonGroup spacing="20" size="lg">
                                    <Button width="135px" height="41.9" fontSize="12px" colorScheme='blue'
                                        onClick={() => {
                                            randomExam(dummydata)
                                        }}
                                    >RANDOM EXAM</Button>
                                    <Button
                                        width="135px" height="41.9" fontSize="12px" colorScheme='teal'
                                        onClick={() => {
                                            handleSubmit(exam)
                                        }}
                                    >CREATE EXAM</Button>
                                    <Button type="cancel" width="135px" height="41.9" fontSize="12px" colorScheme='red'
                                        onClick={() => {
                                            navigate('/admin')
                                        }}
                                    >CANCEL</Button>
                                </ButtonGroup>
                            ) : (
                                <ButtonGroup spacing="20" size="lg">
                                    <Button
                                        width="135px" height="41.9" fontSize="12px" colorScheme='teal'
                                        onClick={() => {
                                            handleSubmit(exam)
                                        }}
                                    >CREATE EXAM</Button>
                                    <Button type="cancel" width="135px" height="41.9" fontSize="12px" colorScheme='red'
                                        onClick={() => {
                                            navigate('/admin')
                                        }}
                                    >CANCEL</Button>
                                </ButtonGroup>
                            )}
                        </CardBody>
                    </Card>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
                        <Card backgroundColor="white" variant="elevated" ml="3" mt="5" p="auto" border='1px' borderColor='teal.400'>
                            <List textColor="black">
                                <CardHeader>
                                    <Heading size="s" align="left" >Patient Info</Heading>
                                </CardHeader>

                                <CardBody>
                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={isFocusPatientId ? exam.patientId : ""}
                                                onFocus={() => setIsFocusPatientId(!isFocusPatientId)}
                                                onBlur={() => setIsFocusPatientId(!isFocusPatientId)}
                                                name="patientId"
                                                onChange={(e) =>
                                                    setExam({ ...exam, patientId: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Patient Id</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={exam.age}
                                                name="age"
                                                onChange={(e) =>
                                                    setExam({ ...exam, age: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Age</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={exam.bmi}
                                                name="bmi"
                                                onChange={(e) =>
                                                    setExam({ ...exam, bmi: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>BMI</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={exam.sex}
                                                name="sex"
                                                onChange={(e) =>
                                                    setExam({ ...exam, sex: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Sex</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={exam.zipCode}
                                                name="zipCode"
                                                onChange={(e) =>
                                                    setExam({ ...exam, zipCode: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Zip Code</FormLabel>
                                        </ListItem>
                                    </FormControl>
                                </CardBody>
                            </List>
                        </Card>

                        <Card backgroundColor="white" variant="elevated" ml="3" mt="5" mr="2" p="auto" border='1px' borderColor='teal.400'>
                            <List textColor="black">
                                <CardHeader>
                                    <Heading size="s" align="left" >Exam Info</Heading>
                                </CardHeader>
                                <CardBody>
                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={isFocusExamType ? exam.examTypeId : ""}
                                                onFocus={() => setIsFocusExamType(!isFocusExamType)}
                                                onBlur={() => setIsFocusExamType(!isFocusExamType)}
                                                name="examTypId"
                                                onChange={(e) =>
                                                    setExam({ ...exam, examTypeId: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Exam Type</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={isFocusImage ? exam.imageURL : ""}
                                                onFocus={() => setIsFocusImage(!isFocusImage)}
                                                onBlur={() => setIsFocusImage(!isFocusImage)}
                                                name="imageURL"
                                                onChange={(e) =>
                                                    setExam({ ...exam, imageURL: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Image URL</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Textarea
                                                placeholder={isFocusKF ? exam.keyFindings : ""}
                                                onFocus={() => setIsFocusKF(!isFocusKF)}
                                                onBlur={() => setIsFocusKF(!isFocusKF)}
                                                name="keyFindings"
                                                onChange={(e) =>
                                                    setExam({ ...exam, keyFindings: e.target.value })
                                                }
                                            ></Textarea>
                                            <FormLabel>Key Findings</FormLabel>
                                        </ListItem>
                                    </FormControl>

                                    <FormControl variant="floating">
                                        <ListItem m={2}>
                                            <Input
                                                placeholder={exam.brixiaScores}
                                                name="brixiaScores"
                                                onChange={(e) =>
                                                    setExam({ ...exam, brixiaScores: e.target.value })
                                                }
                                            ></Input>
                                            <FormLabel>Brixia Scores</FormLabel>
                                        </ListItem>
                                    </FormControl>
                                </CardBody>
                            </List>
                        </Card>
                    </Grid>
                </form>
            </div >
        </>
    )
}

export default ExamCreate;
