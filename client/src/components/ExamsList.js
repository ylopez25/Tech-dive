import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Spinner } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import React from "react";

export default function ExamsList({ exams, loading }) {
    if (loading) {
        return (
            <>
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
            <div className="examsList">
                <TableContainer>
                    <Table size="sm" variant="simple" width="100%">
                        <TableCaption
                        >All Exam Records</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Patient ID</Th>
                                <Th>Exams</Th>
                                <Th>Image</Th>
                                <Th>Key Findings</Th>
                                <Th>Brixia Scores</Th>
                                <Th isNumeric>Age</Th>
                                <Th>Sex</Th>
                                <Th>BMI</Th>
                                <Th>zipcode</Th>
                            </Tr>
                        </Thead>
                        {exams.map(
                            (exam) =>
                                exam && (
                                    <React.Fragment key={exam._id}>
                                        <Tbody>
                                            <Tr >
                                                <Td> <ChakraLink
                                                    className="text-wrap"
                                                    as={ReactRouterLink} color="blue"
                                                    to={`/patient/${exam._id}/exams`}>{exam.patientId}</ChakraLink></Td>
                                                <Td > <ChakraLink as={ReactRouterLink} color="blue" to={`/exams/${exam._id}`}>{exam.examTypeId} </ChakraLink></Td>

                                                <Td>
                                                    <Image
                                                        boxSize='70px'
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
                                        </Tbody>
                                    </React.Fragment>
                                )
                        )}
                    </Table>
                </TableContainer>
            </div>

        );
    }
}
