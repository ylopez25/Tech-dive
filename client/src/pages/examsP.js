import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'

import React from "react";

export default function ExamsList({ loading, exams }) {
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
    if (!loading) {
        return (
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
                                (exam, index) =>
                                    exam && (
                                        <Tr key={index}>
                                            <Td
                                            >{exam._id}</Td>
                                            <Td>
                                                <ChakraLink

                                                >{exam.patientId}</ChakraLink>
                                            </Td>
                                            <Td>{exam.exam_type_id}</Td>
                                            <Td>
                                                <Image
                                                    src={exam.imageURL}
                                                >
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

        );
    }
}
