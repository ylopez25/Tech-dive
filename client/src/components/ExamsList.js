import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image } from "@chakra-ui/react";

import React from "react";

export default function ExamsList({exams}) {

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
                    <Td>{exam.patientId}</Td>
                    <Td>{exam.examId}</Td>
                    <Td>
                      <Image
                        src={exam.imageURL}
                      >
                      </Image>
                    </Td>
                    <Td className="text-wrap">{exam.keyFindings}</Td>
                    <Td>{exam.brixaScore}</Td>
                    <Td>{exam.age}</Td>
                    <Td>{exam.sex}</Td>
                    <Td>{exam.bmi}</Td>
                    <Td>{exam.zip}</Td>
                  </Tr>
                )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>

  );
}
