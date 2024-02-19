import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Grid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function PatientInfo({ parent }) {
  const [patient, setPatient] = useState({
    age: 0,
    bmi: 0,
    patientId: "13",
    sex: "M",
    zipCode: "12345",
  });
  const [patientExams, setPatientExams] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPatientExams = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/exams/patient/${id}/exams`
        );
        const res = await response.json();
        console.log(res);
        setPatientExams(res);
        setPatient({
          age: res[0].age,
          bmi: res[0].bmi,
          patientId: res[0].patientId,
          sex: res[0].sex,
          zipCode: res[0].zipCode,
        });
      } catch (e) {
        console.error("Error fetching exam:", e);
      }
    };
    fetchPatientExams();
  }, [id]);

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
        <div>
          <h1 style={{ padding: "20px", textDecorationLine: "underline" }}>
            Patient Info
          </h1>
          <li>Patient Id: {patient.patientId}</li>
          <li>Age: {patient.age} </li>
          <li>Sex: {patient.sex} </li>
          <li>BMI: {patient.bmi}</li>
          <li>Zipcode: {patient.zipCode}</li>
        </div>
        
        {parent === "PatientDetails" && (
          <div>
            <h1 style={{ padding: "20px", textDecorationLine: "underline" }}>
              Patient Exams
            </h1>
            <div className="examsList">
              <TableContainer>
                <Table size="md" variant="simple" width="100%">
                  <TableCaption>All Exams Record</TableCaption>
                  <Tbody>
                    <Thead>
                      <Tr>
                        <Th>Exams</Th>
                        <Th>Image</Th>
                        <Th>Key Findings</Th>
                        <Th>Brixia Scores</Th>
                      </Tr>

                      {patientExams.map(
                        (exam) =>
                          exam && (
                            <Tr key={exam._id}>
                              <Td>
                                <ChakraLink
                                  as={ReactRouterLink}
                                  color="blue"
                                  to={`/exams/${exam._id}`}
                                >
                                  {exam.examTypeId}
                                </ChakraLink>
                              </Td>
                              <Td>
                                <Image
                                  src={exam.imageURL}
                                  boxSize="150px"
                                />
                              </Td>
                              <Td className="text-wrap">{exam.keyFindings}</Td>
                              <Td>{exam.brixiaScore}</Td>
                            </Tr>
                          )
                      )}
                    </Thead>
                  </Tbody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
      </Grid>
    </>
  );
}

export default PatientInfo;

