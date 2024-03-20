import {
  Image,
  Grid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Box,
  Center,
  Text,
  Link,
  GridItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PatientInfo from "./PatientInfo";
import "../App.css";

function ExamInfo() {
  const [exam, setExam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/exams/${id}`);
        const res = await response.json();
        setExam(res);
      } catch (e) {
        console.error("Error fetching exam:", e);
      }
    };
    fetchExam();
  }, [id]);

  return (
    <div className="exams">
      {/* Beginning of Exam Info card with key findings */}
      <Card
        className="header"
        variant="elevated"
        m="3"
        mt="5"
        border="1px"
        borderColor='teal.400'
      >
        <CardHeader>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} textAlign="left">
            <div>
              <Heading size="md" align="left" mb={5}>
                Exam Info
              </Heading>
              <List spacing="4">
                <ListItem>
                  <strong>Exam ID: </strong>
                  {exam.examTypeId}
                </ListItem>
                <ListItem>
                  <strong>Brixia Score:</strong> {exam.brixiaScores}
                </ListItem>
                <ListItem>
                  <strong>Image URL:</strong> {exam.imageURL}
                </ListItem>
              </List>
            </div>
            <Card
              align="right"
              variant="elevated"
              border="1px"
              borderColor='teal.400'
            >
              <CardHeader>
                <Heading size="xs" align="left">
                  Key Findings
                </Heading>
              </CardHeader>
              <CardBody>{exam.keyFindings}</CardBody>
            </Card>
          </Grid>
        </CardHeader>
      </Card>

      {/* End of Exam Info card with key findings */}

      {/* Beginning of Patient Info and Image Grid */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
        {/* Beginning of Patient Info Card*/}
        <GridItem>
        <PatientInfo parent="ExamInfo"  examId={exam._id}/>
        </GridItem>
        

        {/* End of Patient Info Card*/}
        <GridItem>
        <Card
          variant="elevated"
          mr="3"
          mt="5"
          p="auto"
          border="1px"
          borderColor='teal.400'
        >
          <CardHeader>
            <Heading size="md" align="left">
              Image
            </Heading>
          </CardHeader>

          <CardBody>
            <Center position="relative">
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundColor="rgba(0, 0, 0, 0.5)"
                borderRadius="md"
                opacity={0}
                transition="opacity 0.3s"
                _hover={{
                  opacity: 1,
                  cursor: "pointer",
                }}
              >
        
                <Link href={exam.imageURL} isExternal>
                  <Center h="full">
                    <Text color="white" fontWeight="bold" fontSize="xl">
                      Open in new tab <ExternalLinkIcon mx="2px" />
                    </Text>
                  </Center>
                </Link>
              </Box>
              <Image
                src={exam.imageURL}
                alt="Exam Image"
                borderRadius="md"
                w="50%"
                h="full"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Center>
          </CardBody>
        </Card>
        </GridItem>
        
      </Grid>
      {/* End of Patient Info and Image Grid */}
    </div>
  );
}

export default ExamInfo;
