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
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  List,
  ListItem,
  Avatar,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function PatientInfo({ parent, examId }) {
  const [patient, setPatient] = useState({
    age: "",
    bmi: "",
    patientId: "",
    sex: "",
    zipCode: "",
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

        setPatientExams(res.exams);

        setPatient({
          age: res.age,
          bmi: res.bmi,
          patientId: res.patientid,
          sex: res.sex,
          zipCode: res.zipCode,
        });
      } catch (e) {
        console.error("Error fetching exam:", e);
      }
    };
    fetchPatientExams();
  }, [id]);

  return (
    <div className={examId? "" : "exams"}>
      <Card
        className="patient-update"
        variant="elevated"
        m="3"
        mt="5"
        p="auto"
        border="1px"
        borderColor="teal.400"
      >
        <CardHeader>
          <Heading size="md" align="left">
            {examId ? "Patient Info" : "Profile"}
          </Heading>
        </CardHeader>
        <Center>
          <CardBody align="right" mt={examId ? "15" : "-5"}>
            <Grid templateColumns="repeat(2, 1fr)" gap={10}>
              <GridItem colSpan={1}>
                <Center>
                  <Avatar size="2xl" />
                </Center>
                {examId && (
                  <ChakraLink
                    as={ReactRouterLink}
                    to={`/patient/${examId}/exams`}
                    display="block"
                    textAlign="center"
                    mt={10} // Adjust margin top as needed
                  >
                    <Button
                      size="lg"
                      // variant="outline"
                      fontSize="12px"
                      colorScheme="teal"
                      width="100%"
                    >
                      View Profile
                    </Button>
                  </ChakraLink>
                )}
              </GridItem>
              <GridItem colSpan={1}>
                {examId ? (
                  //ExamInfo Page
                  <List spacing="4" align="left">
                    <ListItem>
                      <strong>Patient Id: </strong>
                      {patient.patientId}
                    </ListItem>
                    <ListItem>
                      <strong>Age:</strong> {patient.age}
                    </ListItem>
                    <ListItem>
                      <strong>Sex:</strong> {patient.sex}
                    </ListItem>
                    <ListItem>
                      <strong>BMI:</strong> {patient.bmi}
                    </ListItem>
                    <ListItem>
                      <strong>Zipcode:</strong> {patient.zipCode}
                    </ListItem>
                  </List>
                ) : (
                  //PatientDetails Page
                  <Box>
                    <List spacing="4" align="left">
                      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
                        <GridItem colSpan={1}>
                          <ListItem>
                            <strong>Patient Id: </strong>
                            {patient.patientId}
                          </ListItem>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <ListItem>
                            <strong>Age:</strong> {patient.age}
                          </ListItem>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <ListItem>
                            <strong>Sex:</strong> {patient.sex}
                          </ListItem>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <ListItem>
                            <strong>BMI:</strong> {patient.bmi}
                          </ListItem>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <ListItem>
                            <strong>Zipcode:</strong> {patient.zipCode}
                          </ListItem>
                        </GridItem>
                      </Grid>
                    </List>
                  </Box>
                )}
              </GridItem>
            </Grid>
          </CardBody>
        </Center>
      </Card>

      {parent === "PatientDetails" && (
        <div>
          <Card
            variant="elevated"
            m="3"
            mt="5"
            p="auto"
            border="1px"
            borderColor="teal.400"
          >
            <CardHeader>
              <Heading size="md" align="left">
                Patient Exams
              </Heading>
            </CardHeader>
            <CardBody>
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
                                    to={`/api/exams/${exam._id}`}
                                  >
                                    {exam.examTypeId}
                                  </ChakraLink>
                                </Td>
                                <Td>
                                  <Image
                                    src={exam.imageURL}
                                    width="200%"
                                    height="100%"
                                  />
                                </Td>
                                <Td className="text-wrap">
                                  {exam.keyFindings}
                                </Td>
                                <Td>{exam.brixiaScores}</Td>
                              </Tr>
                            )
                        )}
                      </Thead>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
      {/* </Grid> */}
    </div>
  );
}

export default PatientInfo;
