import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "pink", listStyleType: "none" }}>
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/9986/9986821.png"
              alt=""
            />
            <NavbarBrand>About me</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/skils">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135729.png"
              alt=""
            />
            <NavbarBrand>Skills</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/education">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/3074/3074058.png"
              alt=""
            />
            <NavbarBrand>Education</NavbarBrand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contacts">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/3095/3095583.png"
              alt=""
            />
            <NavbarBrand>Contacts</NavbarBrand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
