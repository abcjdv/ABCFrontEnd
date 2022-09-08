import React from "react"
import { Link } from "react-router-dom"
export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                <h1 className="mb-4 pb-0">WHERE ALL YOUR MAGIC COMES TRUE</h1>
                <p className="mb-5 pb-0">ABC COMPANY is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/Main" className="about-btn scrollto">EXPLORE NOW</Link>
            </div>
        </section>
    )
}