import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div className="nav">
      <ChakraLink as={ReactRouterLink} to="/exams">
        Logo
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/exams">
        Exams
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admin">
        Admin
      </ChakraLink>
    </div>
  );
}
