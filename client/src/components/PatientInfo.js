import { Spinner } from "@chakra-ui/react";
import '../App.css'
function PatientInfo({ patient }) {
  if (!patient) {
    <>
      <h1>
        Patient Loading ...
      </h1>
      <Spinner
        className="spinner"
        size="lg"
      />
    </>
  }
  if (patient) {
    return (
      <>
        <div>
          <h1
            style={{ padding: '20px', textDecorationLine: 'underline' }}
          >
            Patient Info
          </h1>
          <li>Patient Id: {patient.patientId}</li>
          <li>Age: {patient.age} </li>
          <li>Sex: {patient.sex} </li>
          <li>BMI: {patient.bmi}</li>
          <li>Zipcode: {patient.zipCode}</li>
        </div>
      </>
    );
  }
}

export default PatientInfo;
