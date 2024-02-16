import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useExams } from "../pages/exams";
import { Link as ReactRouterLink } from "react-router-dom";

export default function ExamsList() {
    const { exams, selectedExam, setSelectedExam, loading } = useExams();
    if (loading) {
        return (
            <>
                <div className="navItem">
                    <h2 >Patient Exams</h2>
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
                                    <Th>Image</Th>
                                    <Th>Key Findings</Th>
                                    <Th>Brixia Score</Th>
                                    <Th isNumeric>Age</Th>
                                    <Th>Sex</Th>
                                    <Th>BMI</Th>
                                    <Th>zipcode</Th>
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

                <div className="examsList">
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%">
                            <TableCaption>All Exam Records</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Exam ID</Th>
                                    <Th>Patient ID</Th>
                                    <Th>Exams Types</Th>
                                    <Th>Image</Th>
                                    <Th>Key Findings</Th>
                                    <Th>Brixia Score</Th>
                                    <Th isNumeric>Age</Th>
                                    <Th>Sex</Th>
                                    <Th>BMI</Th>
                                    <Th>zipcode</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {exams.map(
                                    (exam) =>
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
                                                    <Image
                                                        boxSize='60px'
                                                        src={exam.imageURL}
                                                        alt={exam.imageURL}>
                                                    </Image>
                                                </Td>
                                                <Td className="text-wrap">{exam.keyFindings}</Td>
                                                <Td>{exam.brixiaScores}</Td>
                                                <Td>{exam.age}</Td>
                                                <Td>{exam.sex}</Td>
                                                <Td>{exam.bmi}</Td>
                                                <Td>{exam.zipCode}</Td>
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
