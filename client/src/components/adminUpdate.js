import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useExams } from "../pages/exams";
import { Link as ReactRouterLink } from "react-router-dom";


export default function UpdatePage() {
    return (
        <Heading
            style={{ paddingTop: '100px', alignItems: 'center' }}
        >
            UPDATE EXAM
        </Heading>
    )
}
