import {
  Img,
  Grid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Text
} from "@chakra-ui/react";
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
        const response = await fetch(`http://localhost:9000/exams/${id}`);
        const res = await response.json();
        setExam(res);
      } catch (e) {
        console.error("Error fetching exam:", e);
      }
    };
    fetchExam();
  }, [id]);

  return (
    <>
      <div>
        <Grid templateColumns="repeat(2, 1fr)" gap="6" centerContext border="2px" borderColor="red" >
          <Card
            className="header"
            variant="elevated"
            m="3"
            mt="5"
            border="1px"
            borderColor="gray.200"
          >
            <PatientInfo parent="ExamInfo" />
          </Card>
          <Card
            className="header"
            variant="elevated"
            m="3"
            mt="5"
            height="255px"
            border="1px"
            borderColor="gray.200"
            align="center"
          >
            <Img boxSize="255px" objectFit="cover" src={exam.imageURL}></Img>
          </Card>
        </Grid>
        <Card
          className="header"
          variant="elevated"
          m="3"
          mt="5"
          border="1px"
          borderColor="gray.200"
        >
          <CardHeader>
            <Heading size="s" align="left">
              Exam Info
            </Heading>
          </CardHeader>
          <CardBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} textAlign="left">
              <List spacing="4">
                <ListItem><strong>Exam ID: </strong>{exam.examTypeId}</ListItem>
                <ListItem><strong>Brixia Score:</strong> {exam.brixiaScore}</ListItem>
                <ListItem><strong>Image URL:</strong>  {exam.imageURL}</ListItem>
              </List>
              <Card
                
                variant="elevated"
                border="1px"
                borderColor="gray.200"
                size="sm"
               
              >
                <CardHeader>
                  <Heading size="xs" align="left">
                    Key Findings
                  </Heading>
                </CardHeader>
                <CardBody>
                    <Text noOfLines={[1, 2, 3]}>
                    {exam.keyFindings}
                    </Text>
                </CardBody>
              </Card>
            </Grid>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default ExamInfo;
