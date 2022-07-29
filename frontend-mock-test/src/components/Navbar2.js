import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Modals from "./modal";

function Navbar2() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setisAuthenticated(true);
      }
    };
    checkUser();
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Modals />
            <Nav.Link onClick={logOut}>Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
