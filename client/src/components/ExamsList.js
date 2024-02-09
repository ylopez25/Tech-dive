import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

import React from "react";

export default function ExamsList({ exams }) {
  return (
    <div className="examsList">
      <TableContainer>
        <Table variant="simple" width="100%">
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
                    <Td>{exam.patientId}</Td>
                    <Td>{exam.examId}</Td>
                    <Td>{exam.imageURL}</Td>
                    <Td>{exam.keyFindings}</Td>
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
