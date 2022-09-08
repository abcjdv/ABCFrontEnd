import React from "react";
import { Link } from "react-router-dom";
export default function Heromain() {
  return (
    <section id="hero-1">
      <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
        <h1 id="logo" className="mb-4 pb-0"><Link to={"/"}>ABC COMPANY</Link></h1>
        <div className="container">
          <div className="row">
            <div className="d-md-flex ">
              <div className="col-lg-6">
                <div className="text-lg-end text-center">
                  <Link to="/FProducts" className="about-btn-women scrollto">I'm Interested in Women's Clothes</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-start text-center">
                  <Link to="/MProducts" className="about-btn-men scrollto">I'm Interested in Men's Clothes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}