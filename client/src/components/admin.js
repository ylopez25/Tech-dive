import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Link as ChakraLink, WrapItem, Button, Heading } from "@chakra-ui/react";
import { useExams } from '../pages/exams';
import { Spinner } from '@chakra-ui/react'
import { Link as ReactRouterLink } from "react-router-dom";
/*
implement table with update, delete buttons
table with search
use usecontext in order to get all exams

- update -> redirect to update page
        - for each record in dummy data, add new key-value pair for instances of deletion
            * (default) isDeleted = false -> (user presses delete button) -> isDeleted = true (boolean for instances on chart will be shown, if !object[isDeleted] / if object[isDeleted]===true)
            * refresh page automatically when record becomes deleted
    * Nav Bar Search
        - most likely using qps, or match useContext with both button click for search or key word press enter using t3 tutorial hooks

Tackling issue 29 and 41
 */
const AdminPage = () => {
    const { exams, setExams, selectedExam, setSelectedExam, loading, deleteExam } = useExams();

    const performDelete = async (exam) => {
        deleteExam(exam)
    }
    if (loading) {
        return (
            <>
                <div className="navItem">
                    <h2 >Admin Page</h2>
                    <h1>
                        Number of Exams:
                    </h1>
                </div>
                <div className="examsList">
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%">
                            <Thead>
                                <Tr>
                                    <Th>Exam ID</Th>
                                    <Th>Patient ID</Th>
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
                <div className="navItem">
                    <h2 >Patient Exams</h2>
                    <h1>
                        Number of Exams: {exams.length}
                    </h1>
                </div>
                <Heading
                    style={{ textAlign: 'left', paddingTop: '20px', paddingLeft: '180px' }}
                >
                    Not Deleted
                </Heading>
                <div className="examsList">
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%">

                            <TableCaption>All Exam Records</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Exam ID</Th>
                                    <Th>Patient ID</Th>
                                    <Th>Exams Types</Th>
                                    <Th
                                        style={{ textAlign: 'center' }}
                                    > Delete </Th>
                                    <Th
                                        style={{ textAlign: 'center' }}
                                    > Update </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {exams.map(
                                    (exam, index) =>
                                        exam && !exam['isDeleted'] && (
                                            <Tr key={exam._id}>
                                                <Td
                                                >{exam._id}</Td>
                                                <Td>{exam.patientId}</Td>
                                                <Td
                                                    className={
                                                        selectedExam === exam.exam_type_id
                                                    }
                                                >
                                                    <ChakraLink
                                                        as={ReactRouterLink}
                                                        to="/examdetails"
                                                        color='teal.500'
                                                        onClick={() => {
                                                            setSelectedExam(exam)
                                                        }}
                                                    >{exam.exam_type_id}
                                                    </ChakraLink>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <Button
                                                            colorScheme="red"
                                                            size='sm'
                                                            onClick={() => {
                                                                performDelete(exam)
                                                            }}
                                                        >
                                                            DELETE
                                                        </Button>
                                                    </WrapItem>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <ChakraLink
                                                            href="/update_exam"
                                                            passHref
                                                        >
                                                            <Button
                                                                as="a"
                                                                size='sm'
                                                                colorScheme='whatsapp'
                                                            >UPDATE</Button>
                                                        </ChakraLink>
                                                    </WrapItem>
                                                </Td>
                                            </Tr>
                                        )

                                )}
                            </Tbody>
                            <Heading
                                style={{ textAlign: 'left', paddingTop: '20px', paddingLeft: '10px' }}
                            >
                                Deleted
                            </Heading>
                            <Tbody>
                                {exams.map(
                                    (exam, index) =>
                                        exam && exam['isDeleted'] && (
                                            <Tr key={exam._id}>
                                                <Td
                                                >{exam._id}</Td>
                                                <Td>{exam.patientId}</Td>
                                                <Td
                                                    className={
                                                        selectedExam === exam.exam_type_id
                                                    }
                                                >
                                                    <ChakraLink
                                                        as={ReactRouterLink}
                                                        to="/examdetails"
                                                        color='teal.500'
                                                        onClick={() => {
                                                            setSelectedExam(exam)
                                                        }}
                                                    >{exam.exam_type_id}
                                                    </ChakraLink>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <Button
                                                            colorScheme="red"
                                                            size='sm'
                                                            onClick={() => {
                                                                performDelete(exam)
                                                            }}
                                                        >
                                                            DELETE
                                                        </Button>
                                                    </WrapItem>
                                                </Td>
                                                <Td>
                                                    <WrapItem>
                                                        <Button
                                                            size='sm'
                                                            colorScheme='whatsapp'>UPDATE</Button>
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


export default AdminPage;
