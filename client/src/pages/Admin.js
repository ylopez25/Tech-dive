import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  TableContainer,
  Link as ChakraLink,
  WrapItem,
  Heading,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link as ReactRouterLink } from "react-router-dom";
import CreateExam from "./CreateExam";

export const Admin = () => {
  const [exams, setExams] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [examtypes, setExamTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:9000/exams");
        // need an exam types be route
        if (response.ok) {
          const res = await response.json();
          setLoading(false);
          setExams(res);
        }
        const response_dummy = await fetch(
          "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams"
        );

        const dummy_res = await response_dummy.json();
        const dummy_exams = dummy_res["exams"];
        setDummy(dummy_exams);
        const eTypes = [];
        dummy_exams.map((exam) => {
          if (exam && !eTypes.includes(exam.examId)) {
            eTypes.push(exam.examId);
          }
          return null;
        });
        setExamTypes(eTypes);
      } catch (e) {
        console.error(e);
      }
    };
    fetchExams();
  }, []);

  const CreateExamModal = () => {
    onOpen();
  };

  const performDelete = async (id) => {
    const deleteUrl = `http://localhost:9000/exams/${id}`;
    const fetchConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    };
    fetch(deleteUrl, fetchConfig)
      .then((res) => res.json())
      .then(async () => {
        const res = await fetch("http://localhost:9000/exams");
        const resE = await res.json();
        if (res.ok) {
          setExams(resE);
        }
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return (
      <>
        <Heading color="black" marginTop="80px">
          ADMIN PAGE
        </Heading>
        <div className="navItem">
          <h2>Patient Exams</h2>
          <h1>Number of Exams:</h1>
        </div>
        <div>
          <TableContainer>
            <Table size="sm" variant="simple" width="100%">
              <Thead>
                <Tr>
                  <Th>Patient ID</Th>
                  <Th>Exams</Th>
                  <Th>Exams Types</Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        </div>

        <Spinner className="spinner" size="lg" />
      </>
    );
  }
  if (!loading && exams) {
    return (
      <div className="exams">
        <Button
          width="135px"
          height="41.9"
          fontSize="12px"
          colorScheme="teal"
          mt={5}
          mb={2}
          onClick={CreateExamModal}
        >
          CREATE EXAM
        </Button>
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent backgroundColor="white">
              <ModalHeader fontSize="50px" textColor="black">
                {" "}
                Create Exam
              </ModalHeader>
              <ModalCloseButton
                marginRight="5px"
                backgroundColor="red"
                height="100px"
                width="100px"
              >
                <Button>Cancel</Button>
              </ModalCloseButton>
              <ModalBody>
                <CreateExam
                  dummy={dummy}
                  setExams={setExams}
                  examtypes={examtypes}
                />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <div className="examsList">
          <TableContainer>
            <Table size="sm" variant="simple" width="100%"  colorScheme="teal.400">
              <TableCaption>All Exam Records</TableCaption>
              <Thead>
                <Tr>
                  <Th>Patient ID</Th>
                  <Th>Exams</Th>
                  <Th>Image</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {exams.map(
                  (exam, index) =>
                    exam &&
                    !exam["isDeleted"] && (
                      <Tr key={exam._id}>
                        <Td>
                          {" "}
                          <ChakraLink
                            className="text-wrap"
                            as={ReactRouterLink}
                            color="blue"
                            to={`/api/patient/${exam._id}/exams`}
                          >
                            {exam.patientId}
                          </ChakraLink>
                        </Td>
                        <Td>
                          {" "}
                          <ChakraLink
                            as={ReactRouterLink}
                            color="blue"
                            to={`/api/exams/${exam._id}`}
                          >
                            {exam.examTypeId}{" "}
                          </ChakraLink>
                        </Td>
                        <Td>
                          <Image
                            boxSize="70px"
                            src={exam.imageURL}
                            alt={exam.imageURL}
                          ></Image>
                        </Td>
                        <Td>
                          <WrapItem>
                            <Button
                         
                              fontSize="12px"
                              colorScheme="red"
                              onClick={(e) => {
                                performDelete(exam._id);
                              }}
                            >
                              DELETE
                            </Button>
                          </WrapItem>
                        </Td>
                        <Td>
                          <WrapItem>
                            <ReactRouterLink
                              to={`${exam._id}/update`}
                              onClick={() => {}}
                            >
                              <Button
                              
                                fontSize="12px"
                                colorScheme="teal"
                              >
                                UPDATE
                              </Button>
                            </ReactRouterLink>
                          </WrapItem>
                        </Td>
                      </Tr>
                    )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
};

export default Admin;
