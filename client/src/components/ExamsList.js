import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

import React from "react";
import { useExamContext } from "../context/ExamContext";
import { Spinner } from '@chakra-ui/react'

export default function ExamsList({ loading, exams }) {

  const { updateExam } = useExamContext();
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
                <Th>Patient ID</Th>
                <Th>Exams</Th>
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
                      <Td>
                        <ChakraLink

                        >{exam.patientId}</ChakraLink>
                      </Td>
                      <Td > <ChakraLink as={ReactRouterLink} color="blue.500" to="/examdetails" onClick={() => updateExam(exam)}>{exam.examId} </ChakraLink></Td>

                      <Td>
                        <Image src={exam.imageURL}>
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
      </div >

    );
  }
}
