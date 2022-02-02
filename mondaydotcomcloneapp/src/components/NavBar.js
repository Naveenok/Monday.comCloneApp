import React from "react";
import logo from "../images/monday-logo.png";
import { NavBarContainer, GetStarted, Image } from "../styles/NavBar.style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Image src={logo} alt="Logo"></Image>
      <GetStarted>Get Started &gt;</GetStarted>
    </NavBarContainer>
  );
};

export default NavBar;
