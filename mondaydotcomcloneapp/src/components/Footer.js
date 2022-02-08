import React from "react";
import {
  FooterLinkContainer,
  AccessibilityContainer,
  GlobeContainer,
  GlobeSelect,
  FooterContainer,
  IconContainer,
} from "../styles/Footer.style";
import { IoAccessibilitySharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo from "../assets/monday-logo.png";
import { Image } from "../styles/NavBar.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkContainer>
        <div>
          <a href="">About us</a>
        </div>
        <div>
          <a href="">Become a partner</a>
        </div>
        <div>
          <a href="">Careers</a>
        </div>
        <div>
          <a href="">Blog</a>
        </div>
        <div>
          <a href="">Pricing</a>
        </div>
        <div>
          <a href="">Contact sales</a>
        </div>
        <div>
          <a href="">Terms and privacy</a>
        </div>

        <div>
          <a href="">Product overview</a>
        </div>
        <div>
          <a href="">Investor relations</a>
        </div>
        <div>
          <a href="">Contact us</a>
        </div>
        <AccessibilityContainer>
          <div>
            <IoAccessibilitySharp />
          </div>
          <div>
            <a href="">Accessibility statement</a>
          </div>
        </AccessibilityContainer>
        <GlobeContainer>
          <div>
            <BsGlobe />
          </div>
          <div>
            <GlobeSelect name="language">
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </GlobeSelect>
          </div>
        </GlobeContainer>
      </FooterLinkContainer>
      <Image src={logo} alt="Logo"></Image>
      <p>All Rights Reserved © monday.com</p>
      <IconContainer>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <BsFacebook />
        <AiFillYoutube />
        <AiFillInstagram />
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
