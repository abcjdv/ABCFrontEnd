import React from "react";
export default function Headerwhite(){
    return(
        <header id="header" className="d-flex align-items-center ">
    <div className="container-fluid container-xxl d-flex align-items-center">

      <div id="logo" className="me-auto">
       {/*} <!-- Uncomment below if you prefer to use a text logo -->*/}
        <h1><a href="index.html">ABC Company</a></h1>
       {/*} <!-- <a href="index.html" className="scrollto"><img src="assets/img/logo.png" alt="" title=""/></a> -->*/}
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#speakers">How We Work</a></li>
          <li><a className="nav-link scrollto" href="#guarantee">Our Guarantee</a></li>
          <li><a className="nav-link scrollto" href="#features">FAQ</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>{/*<!-- .navbar -->*/}

    </div>
  </header>
    )
}