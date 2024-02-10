import Logo from "./logo";
import { useState } from "react";
//logo will be used as a part of navbar
import {
    Container,
    Box,
    Link as ChakraLink,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from "react-router-dom";
import { ViewIcon } from '@chakra-ui/icons'


const NavBar = () => {
    const [isOpen, setisOpen] = useState("")
    const toggle = () => setisOpen(!isOpen)
    return (
        <Logo />
    )
}

const NavTut = () => {
    return (
        <header>
            {/* <ViewIcon /> */}
            <Logo />
            <div>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/"
                >
                    <h1>
                        Landing Page
                    </h1>
                </ChakraLink>
            </div>
            <div>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/exams"
                >
                    <h1>
                        Exams
                    </h1>
                </ChakraLink>
            </div>
            <div>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/single_patient"
                >
                    <h1>
                        Single Patient Example
                    </h1>
                </ChakraLink>
            </div>
            <div>
                <ChakraLink
                    as={ReactRouterLink}
                    to="/admin"
                >
                    <h1>
                        Admin {'  '} <ViewIcon style={{ marginLeft: "5px" }} />
                    </h1>
                </ChakraLink>
            </div>
        </header>
    )
}

export default NavTut
