import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image} from "@chakra-ui/react";
import { Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

import React from "react";
import {useExamContext} from "../context/ExamContext";

export default function ExamsList({ exams }) {

  
  console.log(exams)


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
                  <>
                    <Tbody>
                      <Tr>
                        <Td> <ChakraLink as={ReactRouterLink} color="blue" to={`/patientdetails/${exam._id}`}>{exam.patientId}</ChakraLink></Td>
                        <Td > <ChakraLink as={ReactRouterLink} color="blue" to={`/examdetails/${exam._id}`}>{exam.examTypeId} </ChakraLink></Td>
        
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
                    </Tbody>
                  </>
                )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>

  );
}
