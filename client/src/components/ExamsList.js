import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

import React from "react";
import {useExamContext} from "../context/ExamContext";

export default function ExamsList({ exams }) {

  const { updateExam } = useExamContext();


  return (
    <div className="examsList">
      <TableContainer>
        <Table variant="simple" width="100%">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
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
          <>
            {exams.map(
              (exam) =>
                exam && (
                  <>
                    <Tbody>
                      <Tr>
                        <Td> {exam.patientId}</Td>
                        <Td > <ChakraLink as={ReactRouterLink} color="blue" to="/examdetails" onClick={() => updateExam(exam)}>{exam.examId} </ChakraLink></Td>
                        <Td>{exam.imageURL}</Td>
                        <Td>{exam.keyFindings}</Td>
                        <Td>{exam.brixiaScores}</Td>
                        <Td>{exam.age}</Td>
                        <Td>{exam.sex}</Td>
                        <Td>{exam.bmi}</Td>
                        <Td>{exam.zipCode}</Td>
                      </Tr>
                    </Tbody>
                  </>
                )
            )}
          </>
        </Table>
      </TableContainer>
    </div>
  );
}
