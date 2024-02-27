import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Input,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Button
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

  const [isFocusImage, setIsFocusImage] = useState(false)
  const [isFocusKF, setIsFocusKF] = useState(false)


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:9000/exams/${id}/updateExam`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exam)
      });

      if (response.ok) {
        console.log(response)
        navigate("/exams")
      }


    }

    catch (error) {
      console.error('Error updating exam:', exam.message)
    }
  }

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
    <div>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} centerContext>
          <div className="patient-update">
            <List>
              <h1>Patient Update</h1>
              <FormControl variant="floating">
                <ListItem m={2}>

                  <Input
                    placeholder={exam.patientId}
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
                    onChange={(e) => setExam({ ...exam, age: e.target.value })}
                  ></Input>
                  <FormLabel>Age</FormLabel>
                </ListItem>
              </FormControl>


              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={exam.bmi}
                    name="bmi"
                    onChange={(e) => setExam({ ...exam, bmi: e.target.value })}
                  ></Input>
                  <FormLabel>BMI</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={exam.sex}
                    name="sex"
                    onChange={(e) => setExam({ ...exam, sex: e.target.value })}
                  ></Input>
                  <FormLabel>Sex</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={exam.zipCode}
                    name="zipCode"
                    onChange={(e) => setExam({ ...exam, zipCode: e.target.value })}
                  ></Input>
                  <FormLabel>Zip Code</FormLabel>
                </ListItem>
              </FormControl>

            </List>
          </div>

          <div className="exam-update">
            <List>
              <h1>Exam Update</h1>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={exam.examTypeId}
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
                    onChange={(e) => setExam({ ...exam, imageURL: e.target.value })}
                  ></Input>
                  <FormLabel>Image URL</FormLabel>
                </ListItem>
              </FormControl>

              <FormControl variant="floating">
                <ListItem m={2}>
                  <Input
                    placeholder={isFocusKF ? exam.keyFindings : ""}
                    onFocus={() => setIsFocusKF(!isFocusKF)}
                    onBlur={() => setIsFocusKF(!isFocusKF)}
                    name="keyFindings"
                    onChange={(e) =>
                      setExam({ ...exam, keyFindings: e.target.value })
                    }
                  ></Input>
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
            </List>
          </div>
        </Grid>

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default ExamUpdate;
