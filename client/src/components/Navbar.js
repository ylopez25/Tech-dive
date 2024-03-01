import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <div className="img">
          <p>RfX</p>
        </div>
        <ChakraLink as={ReactRouterLink} to="/">
          Ray-Force-X
        </ChakraLink>
      </div>
      <div className="nav_link">
        <ChakraLink as={ReactRouterLink} to="/exams">
          <span class="material-symbols-outlined">quick_reference</span>
          Exams
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/admin">
          <span class="material-symbols-outlined">shield_person</span>
          Admin
        </ChakraLink>
      </div>
    </div>
  );
}
