import React from "react";
import logo from "../assets/monday-logo.png";
import { NavBarContainer, Button, Image } from "../styles/NavBar.style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Image src={logo} alt="Logo"></Image>
      <Button>Get Started &gt;</Button>
    </NavBarContainer>
  );
};

export default NavBar;
