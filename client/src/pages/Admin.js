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
    Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Admin = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/exams`);
                // need an exam types be route
                if (response.ok) {
                    const res = await response.json();
                    setLoading(false);
                    setExams(res);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchExams();
    }, []);

    const performDelete = async (id) => {
        const deleteUrl = `${process.env.REACT_APP_BACKEND_SERVER}/exams/${id}`;
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
                const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/exams`);
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

                <div>
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%">
                            <Thead>
                                <Tr>
                                    <Th>Patient ID</Th>
                                    <Th>Exams</Th>
                                    <Th>Exams Types</Th>
                                    <Th>Images</Th>
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
                <ReactRouterLink
                    to={{
                        pathname: "/admin/create",
                    }}
                >
                    <Button
                        width="135px"
                        height="41.9"
                        fontSize="12px"
                        colorScheme="teal"
                        mt={5}
                        mb={2}

                    >
                        CREATE EXAM
                    </Button>
                </ReactRouterLink>
                <div className="examsList">
                    <TableContainer>
                        <Table size="sm" variant="simple" width="100%" colorScheme="teal.400">
                            <TableCaption>All Exam Records</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Patient ID</Th>
                                    <Th>Exams</Th>
                                    <Th>Images</Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {exams.map(
                                    (exam, index) =>
                                        exam &&
                                        (
                                            <Tr key={exam._id}>
                                                <Td>
                                                    {" "}
                                                    <ChakraLink
                                                        className="text-wrap"
                                                        as={ReactRouterLink}
                                                        color="blue"
                                                        to={`/patient/${exam._id}/exams`}
                                                    >
                                                        {exam.patientId}
                                                    </ChakraLink>
                                                </Td>
                                                <Td>
                                                    {" "}
                                                    <ChakraLink
                                                        as={ReactRouterLink}
                                                        color="blue"
                                                        to={`/exams/${exam._id}`}
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
                                                            textColor='white'
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
                                                        >
                                                            <Button
                                                                textColor='white'
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
