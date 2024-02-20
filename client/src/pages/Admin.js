import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Link as ChakraLink, WrapItem, Heading, Modal, ModalBody, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, useDisclosure, ModalHeader } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import styled from "@emotion/styled";
import { Link as ReactRouterLink } from "react-router-dom";
import CreateExam from "./CreateExam";

/*
implement table with update, delete buttons
table with search

Tackling issue 29 and 41
 */

export const RedButton = styled.button`
  border-radius:5px;
  background-color: white;
  border: 2px solid red;
  color: black;
  padding: 6px 8px;
  font-weight: bold;
  &:hover {
    color: red;
  }
`

export const RedButton2 = styled.button`
  border-radius:5px;
  background-color: red;
  border: 2px solid red;
  color: #454545;
  padding: 20px 10px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export const GreenButton = styled.button`
border-radius:5px;
background-color: white;
border: 2px solid green;
color: black;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: green;
}`

export const BlueButton = styled.button`
border-radius:5px;
background-color: white;
border: 2px solid blue;
color: black;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: blue;
}`

export const RedDiv = styled.div`
text-align: center;
font-weight: bold;
color: black;
font-size: 20px;
&:hover {
    color: white;
  }
`

export const Admin = () => {
    const [exams, setExams] = useState([])
    const [examtypes, setExamTypes] = useState([])
    const [loading, setLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        const fetchExams = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:9000/exams')
                // need an exam types be route
                const res = await response.json();
                setLoading(false)
                const eTypes = []
                res.map((exam) => {
                    if (!eTypes.includes(exam.examTypeId)) {
                        eTypes.push(exam.examTypeId)
                    }
                    setExamTypes(eTypes)
                    setExams(res)
                })

            } catch (e) {
                console.error(e)
            }
        }
        fetchExams();
    }, []);

    const CreateExamModal = () => {
        onOpen();
    }
    const performDelete = async (id) => {
        const deleteUrl = `http://localhost:9000/exams/${id}`
        const fetchConfig = {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                'accept': 'application/json'
            },
        };
        fetch(deleteUrl, fetchConfig)
            .then(res => res.json())
            .then(async () => {
                const res = await fetch('http://localhost:9000/exams')
                const resE = await res.json()
                if (res.ok) {
                    setExams(resE)
                }
            }
            )
            .catch(err => console.log(err))
    }


    if (loading) {
        return (
            <>
                <Heading
                    color="black"
                    marginTop='80px'
                >
                    ADMIN PAGE
                </Heading>
                <div className="navItem">
                    <h2 >Patient Exams</h2>
                    <h1>
                        Number of Exams:
                    </h1>
                </div>
                <div>
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%">
                            <Thead>
                                <Tr>
                                    <Th>Patient ID</Th>
                                    <Th>Exam ID</Th>
                                    <Th>Exams Types</Th>
                                </Tr>
                            </Thead>
                        </Table>
                    </TableContainer>
                </div>

                <Spinner
                    className="spinner"
                    size="lg"
                />
            </>
        )
    }
    if (!loading && exams) {
        return (
            <>
                <Heading
                    color="black"
                    marginTop='80px'
                >
                    ADMIN PAGE
                </Heading>
                <div className="navItem">
                    <h2 >Patient Exams</h2>
                    <h1>
                        Number of Exams: {exams.length}
                    </h1>
                </div>
                <BlueButton
                    onClick={CreateExamModal}
                >
                    CREATE EXAM
                </BlueButton>
                <Modal
                    size="full"
                    isOpen={isOpen}
                    onClose={onClose} >
                    <ModalOverlay>
                        <ModalContent
                            backgroundColor="white"
                        >
                            <ModalHeader
                                fontSize="50px"
                                textColor="black"
                            > Create Exam</ModalHeader>
                            <ModalCloseButton
                                marginRight="5px"
                                backgroundColor="red"
                                height="100px"
                                width="100px"
                            >
                                <RedDiv
                                >
                                    Cancel
                                </RedDiv>
                            </ModalCloseButton>
                            <ModalBody
                            >
                                <CreateExam
                                    exams={exams}
                                    examtypes={examtypes}
                                    onClose={onClose}
                                />
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </ModalContent>
                    </ModalOverlay>
                </Modal >
                <div className="examsList">
                    <TableContainer>
                        <Heading
                            style={{ paddingBottom: '40px', paddingTop: '20px' }}
                        >
                            Manage Exams
                        </Heading>
                        <Table

                            size="sm" variant="simple" width="100%">

                            <TableCaption>All Exam Records</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Patient ID</Th>
                                    <Th>Exam ID</Th>
                                    <Th>Exams Types</Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {exams.map(
                                    (exam, index) =>
                                        exam && !exam['isDeleted'] && (
                                            <Tr key={exam._id}>
                                                <Td>{exam.patientId}</Td>
                                                <Td
                                                >{exam._id}</Td>
                                                <Td
                                                >
                                                    <ChakraLink
                                                        as={ReactRouterLink}
                                                        to={`/api/exams/${exam._id}`}
                                                        color='blue.500'
                                                    >{exam.examTypeId}
                                                    </ChakraLink>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <RedButton
                                                            colorScheme="red"
                                                            size='sm'
                                                            onClick={(e) => {
                                                                performDelete(exam._id)
                                                            }}
                                                        >
                                                            DELETE
                                                        </RedButton>
                                                    </WrapItem>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <ChakraLink
                                                            as={ReactRouterLink}
                                                            to={`${exam._id}/update`}
                                                            onClick={() => {

                                                            }}
                                                        >
                                                            <GreenButton
                                                                as="a"
                                                                size='sm'
                                                                colorScheme='whatsapp'
                                                            >UPDATE</GreenButton>
                                                        </ChakraLink>
                                                    </WrapItem>
                                                </Td>
                                            </Tr>
                                        )

                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </>
        )
    }

}


export default Admin;
