import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";


export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_nav_bar">
        <Container>
          <Navbar.Brand href="#home" className="logo_main_width">
          <Link to="/">
            <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <span className="d-block d-lg-none" onClick={() => setShow(!show)}>
            {show ? (
              <>
                <RxCross2 className="text-white fs-1" />{" "}
              </>
            ) : (
              <>
                <AiOutlineMenu className="text-white fs-1" />
              </>
            )}
          </span>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={show ? "show" : ""}
          >
            
            <Nav className="ms-auto d-flex  align-items-center gap-2">
              <div className="social-icons d-flex gap-4 align-items center ">
              <a href=" #" target="_blank">          <BsTelegram className="soical_icons"></BsTelegram></a>
                {/* <BsTwitter className="soical_icons"></BsTwitter> */}
                <span>
                <a href="#" target="_blank">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    _ngcontent-ng-c3098143052=""
                    aria-hidden="true"
                    className="x_logo"
                  >
                    <path
                      d="M1.05085 0L9.55754 10.4866L0.997238 19.0127H2.92397L10.4187 11.5478L16.474 19.0127H23.0302L14.0447 7.93638L22.0127 0H20.086L13.184 6.87483L7.60714 0H1.05085ZM3.8842 1.30836H6.89612L20.1965 17.7044H17.1846L3.8842 1.30836Z"
                      fill="white"
                      _ngcontent-ng-c3098143052=""
                    ></path>
                  </svg>
                  </a>
                </span>
              </div>
              <div className="tree_btn d-flex gap-2">
                <button className="main_header_btn">Audit</button>
           <a href=" #" target="_blank">     <button className="main_header_btn" style={{height:"100%"}}>Whitepaper</button></a>
                <button className="main_header_btn">Stake  $BFM</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
