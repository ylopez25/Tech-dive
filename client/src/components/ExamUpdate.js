import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Input,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Button,
  Heading,
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Textarea,
} from "@chakra-ui/react";

function ExamUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exam, setExam] = useState({
    patientId: "",
    age: "",
    bmi: "",
    sex: "",
    zipCode: "",
    examTypeId: "",
    imageURL: "",
    keyFindings: "",
    brixiaScores: "",
  });

  const [isFocusImage, setIsFocusImage] = useState(false);
  const [isFocusKF, setIsFocusKF] = useState(false);
  const [isFocusPatientId, setIsFocusPatientId] = useState(false);
  const [isFocusExamType, setIsFocusExamType] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9000/exams/${id}/updateExam`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(exam),
        }
      );

      if (response.ok) {
        console.log(response);
        navigate("/exams");
      }
    } catch (error) {
      console.error("Error updating exam:", exam.message);
    }
  };

  //Get Exam info
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
    <div className="exams">
      <form onSubmit={handleSubmit} >
        <Card className="header" variant="elevated" m="3" mt="5" p="auto" border='1px' borderColor='teal.400'>
            <CardHeader>
                <Heading size="s" align="left" >Edit Exam</Heading>
            </CardHeader>
            <CardBody>
        <ButtonGroup spacing="60" size="lg">
        <Button type="submit" width="135px"  height="41.9" fontSize="12px" colorScheme='teal'>SUBMIT</Button>
        <Button type="cancel" width="135px"  height="41.9" fontSize="12px" colorScheme='red'>CANCEL</Button>
        </ButtonGroup>
        
        </CardBody>
        </Card>

        
        <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
          <Card className="patient-update" variant="elevated" ml="3" mt="5" p="auto" border='1px' borderColor='teal.400'>
            <List>
              <CardHeader>
                <Heading size="s" align="left">Patient Update</Heading>
                </CardHeader>

              <CardBody>
                <FormControl variant="floating">
                  <ListItem m={2}>
                    <Input
                       placeholder={isFocusPatientId ? exam.patientId : ""}
                       onFocus={() => setIsFocusPatientId(!isFocusPatientId)}
                       onBlur={() => setIsFocusPatientId(!isFocusPatientId)}
                      name="patientId"
                      onChange={(e) =>
                        setExam({ ...exam, patientId: e.target.value })
                      }
                    ></Input>
                    <FormLabel>Patient Id</FormLabel>
                  </ListItem>
                </FormControl>

                <FormControl variant="floating">
                  <ListItem m={2}>
                    <Input
                      placeholder={exam.age}
                      name="age"
                      onChange={(e) =>
                        setExam({ ...exam, age: e.target.value })
                      }
                    ></Input>
                    <FormLabel>Age</FormLabel>
                  </ListItem>
                </FormControl>

                <FormControl variant="floating">
                  <ListItem m={2}>
                    <Input
                      placeholder={exam.bmi}
                      name="bmi"
                      onChange={(e) =>
                        setExam({ ...exam, bmi: e.target.value })
                      }
                    ></Input>
                    <FormLabel>BMI</FormLabel>
                  </ListItem>
                </FormControl>

                <FormControl variant="floating">
                  <ListItem m={2}>
                    <Input
                      placeholder={exam.sex}
                      name="sex"
                      onChange={(e) =>
                        setExam({ ...exam, sex: e.target.value })
                      }
                    ></Input>
                    <FormLabel>Sex</FormLabel>
                  </ListItem>
                </FormControl>

                <FormControl variant="floating">
                  <ListItem m={2}>
                    <Input
                      placeholder={exam.zipCode}
                      name="zipCode"
                      onChange={(e) =>
                        setExam({ ...exam, zipCode: e.target.value })
                      }
                    ></Input>
                    <FormLabel>Zip Code</FormLabel>
                  </ListItem>
                </FormControl>
              </CardBody>
            </List>
          </Card>

          <Card className="exam-update" variant="elevated" mr="3" mt="5" p="auto" border='1px' borderColor='teal.400'>
            <List>
                <CardHeader>
              <Heading size="s" align="left">Exam Update</Heading>
              </CardHeader>
            
            <CardBody>
              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                     placeholder={isFocusExamType ? exam.examTypeId : ""}
                     onFocus={() => setIsFocusExamType(!isFocusExamType)}
                     onBlur={() => setIsFocusExamType(!isFocusExamType)}
                    name="examTypId"
                    onChange={(e) =>
                      setExam({ ...exam, examTypeId: e.target.value })
                    }
                  ></Input>
                  <FormLabel>Exam Type</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={isFocusImage ? exam.imageURL : ""}
                    onFocus={() => setIsFocusImage(!isFocusImage)}
                    onBlur={() => setIsFocusImage(!isFocusImage)}
                    name="imageURL"
                    onChange={(e) =>
                      setExam({ ...exam, imageURL: e.target.value })
                    }
                  ></Input>
                  <FormLabel>Image URL</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Textarea
                    placeholder={isFocusKF ? exam.keyFindings : ""}
                    onFocus={() => setIsFocusKF(!isFocusKF)}
                    onBlur={() => setIsFocusKF(!isFocusKF)}
                    name="keyFindings"
                    onChange={(e) =>
                      setExam({ ...exam, keyFindings: e.target.value })
                    }
                  ></Textarea>
                  <FormLabel>Key Findings</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={exam.brixiaScores}
                    name="brixiaScores"
                    onChange={(e) =>
                      setExam({ ...exam, brixiaScores: e.target.value })
                    }
                  ></Input>
                  <FormLabel>Brixia Scores</FormLabel>
                </ListItem>
              </FormControl>
              </CardBody>
            </List>
          </Card>
        </Grid>

       
      </form>
    </div>
  );
}

export default ExamUpdate;
