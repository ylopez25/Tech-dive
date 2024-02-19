// going to add a 'add exam', 'random exam', 'cancel button'
/**
 *
 * add exam - add records to all exams, random exam - create new exam with random values found in curent db
 */
import { Formik, Form, useField, useFormikContext } from 'formik';
import { Grid, GridItem, Heading, FormControl, Img, Text } from "@chakra-ui/react";
import * as Yup from 'yup';
import styled from "@emotion/styled";
import { useEffect } from 'react';

export const RedButton = styled.button`
  border-radius:5px;
  background-color: red;
  border: 2px solid red;
  color: #454545;
  padding: 6px 8px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
export const GreenButton = styled.button`
border-radius:5px;
background-color: #66FF99;
color: #454545;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: white;
}`

export const BlueButton = styled.button`
border-radius:5px;
background-color:#87CEEB;
border: 2px solid SkyBlue;
color: #454545;
padding: 6px 8px;
font-weight: bold;
&:hover {
  color: white;
}`

const CreateExam = ({ examtypes, onClose }) => {

    const MyTextInput = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input>. We can use field meta to show an error
        // message if the field is invalid and it has been touched (i.e. visited)
        const [field, meta] = useField(props);
        return (
            <>
                <label
                    style={{ textAlign: 'center', marginTop: '5px', }}
                    htmlFor={props.id || props.name}>{label}</label>
                <input
                    style={{
                        backgroundColor: 'white',
                        WebkitTextFillColor: 'gray', textAlign: 'center', borderRadius: '5px', border: "1px solid black", width: "80%", marginLeft: '36px'
                    }}
                    className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
    };

    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <div
                    style={{ textAlign: 'center' }}
                >
                    <label htmlFor={props.id || props.name}>{label}</label>
                </div>
                <div
                    style={{ marginLeft: '20px', textAlign: 'center' }}
                >
                    <select
                        style={{ height: '25px', marginRight: '20px', borderRadius: '5px', width: '82%', backgroundColor: 'silver' }}
                        {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </div>
            </>
        );
    };

    return (
        <>
            <Heading
            >
                Create Exam
            </Heading>
            <GreenButton
                style={{ marginTop: '20px', marginLeft: '100px', marginRight: '10px', fontWeight: 'bold' }}
            >
                Random Exam
            </GreenButton >
            <RedButton
                style={{ marginTop: '20px', marginRight: '10px', fontWeight: 'bold' }}
            >
                Cancel
            </RedButton>
            <BlueButton
                form='my-form'
                type='submit'
                style={{ marginTop: '20px', marginRight: '100px', fontWeight: 'bold' }}
                onClick={onClose}
            >
                Create Exam
            </BlueButton>
            <Grid
                color='black'
                marginTop="50px"
                templateColumns='repeat(3, 1fr)'
                gap={2}
                height="600px"
                width="100%"
            >
                <GridItem
                    width="90%"
                    marginBottom="10px"
                    marginLeft='10px'
                >
                    <Heading>
                        Patient Info
                    </Heading>
                    <Formik
                        initialValues={{
                            _id: "",
                            exam_type_id: "",
                            brixiaScores: "",
                            keyFindings: "",
                            imageURL: ""
                        }}
                        //can add type validation and require text/selection inputs at a later time
                        validationSchema={Yup.object({
                            _id: Yup.string(),
                            exam_type_id: Yup.string().oneOf(
                                [...examtypes]
                            ),
                            brixiaScores: Yup.string(),
                            keyFindings: Yup.string(),
                            imageURL: Yup.string(),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            // performCreate(values)
                            setSubmitting(false)
                        }}
                    >
                        <Form
                            id='my-form'
                            style={{ display: "grid", flexDirection: 'column', gap: '10px', marginTop: '40px' }}>
                            <MyTextInput
                                label="patient_id"
                                name="patient_id"
                                type="text"
                            />
                            <MyTextInput
                                label="age"
                                name="age"
                                type="text"
                            />
                            <MyTextInput
                                label="sex"
                                name="sex"
                                type="text"
                            />
                            <MyTextInput
                                label="BMI"
                                name="BMI"
                                type="text"
                            />
                            <MyTextInput
                                label="ZipCode"
                                name="ZipCode"
                                type="text"
                            />
                        </Form>
                    </Formik>
                </GridItem>

                <GridItem
                    width="90%"
                    marginBottom="10px"
                    marginLeft='300px'
                >
                    <Heading>
                        Exam Info
                    </Heading>
                    <Formik
                        initialValues={{
                            _id: "",
                            exam_type_id: "",
                            brixiaScores: "",
                            keyFindings: "",
                            imageURL: ""
                        }}
                        //can add type validation and require text/selection inputs at a later time
                        validationSchema={Yup.object({
                            _id: Yup.string(),
                            exam_type_id: Yup.string().oneOf(
                                [...examtypes]
                            ),
                            brixiaScores: Yup.string(),
                            keyFindings: Yup.string(),
                            imageURL: Yup.string(),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            // performCreate(values)
                            setSubmitting(false)
                        }}
                    >
                        <Form
                            id='my-form'
                            style={{ display: "grid", flexDirection: 'column', gap: '10px', marginTop: '40px' }}>
                            <MyTextInput
                                label="_id"
                                name="_id"
                                type="text"
                            />
                            <MySelect
                                label="Exam Types "
                                name="exam_type_id"
                            >
                                {examtypes.map((type) =>
                                    type && (<option
                                        key={type}
                                        value={type}
                                    >{type}</option>)
                                )}
                            </MySelect>
                            <MyTextInput
                                label="brixiaScores"
                                name="brixiaScores"
                                type="text"
                            />
                            <MyTextInput
                                label="keyFindings"
                                name="keyFindings"
                                type="text"
                            />
                            <MyTextInput
                                label="imageURL"
                                name="imageURL"
                                type="text"
                            />
                        </Form>
                    </Formik>
                </GridItem>
            </Grid>
        </>
    )
}

export default CreateExam;
