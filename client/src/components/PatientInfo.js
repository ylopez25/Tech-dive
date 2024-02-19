function PatientInfo({ exam }) {
  return (
    <>
      <div>
        <h1
          style={{ padding: '20px', textDecorationLine: 'underline' }}
        >
          Patient Info
        </h1>
        <li>Patient Id: {exam.patientId}</li>
        <li>Age: {exam.age} </li>
        <li>Sex: {exam.sex} </li>
        <li>BMI: {exam.bmi}</li>
        <li>Zipcode: {exam.zipCode}</li>
      </div>
    </>
  );
}

export default PatientInfo;
