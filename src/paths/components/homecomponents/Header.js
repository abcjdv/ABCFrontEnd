import "./Header.css"
// import React from "react"
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
export default function Header() {

  const [showAnimated, setShowAnimated] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="d-flex align-items-center ">
      <div className="container d-flex align-items-center">
        <div id="logo" className="me-auto">
          <h1><a href="/">ABC Company</a></h1>
          <a href="index.html" className="scrollto"></a>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active " id="landing-page-header" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto " id="landing-page-header" href="#about">About</a></li>
            <li><a className="nav-link scrollto " id="landing-page-header" href="#guarantee">Our Guarantee</a></li>
            <li><a className="nav-link scrollto " id="landing-page-header" href="#features">FAQ</a></li>
            <li><a className="nav-link scrollto " id="landing-page-header" href="#contact">Contact</a></li>
          </ul>

          <section className='navbar_button'>
            <MDBNavbar >
              <MDBContainer fluid>
                <MDBNavbarToggler
                  type='button'
                  className='third-button'
                  data-target='#navbarToggleExternalContent'
                  aria-controls='navbarToggleExternalContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setShowAnimated3(!showAnimated3)}
                >
                  <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
              </MDBContainer>
            </MDBNavbar>

            <MDBCollapse show={showAnimated3} className='collaps-container'>
              <div className='shadow-3 p-4 nav-items-box'>
                <div block className='navbar m-0' id="btn-btn-dropdown" >
                  <ul className="nav-down-items">
                    <li><a className="nav-link scrollto active " id="landing-page-header" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto " id="landing-page-header" href="#about">About</a></li>
                    <li><a className="nav-link scrollto " id="landing-page-header" href="#guarantee">Our Guarantee</a></li>
                    <li><a className="nav-link scrollto " id="landing-page-header" href="#features">FAQ</a></li>
                    <li><a className="nav-link scrollto " id="landing-page-header" href="#contact">Contact</a></li>
                  </ul>
                </div>

              </div>
            </MDBCollapse>
          </section>

          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        </nav>
      </div>

    </header>

  )
}