import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Headaerlogin() {




    useEffect(() => {

        window.addEventListener('scroll', function () {
            let navbar = document.querySelector('header');
            if (window.pageYOffset > 0) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
        


    }, []);


    return (
        <header id="myheader" className=" d-flex align-items-center fixed-top bg-black py-4 shadow">
            <div className="container d-flex align-items-center">

                <div id="logo" className="me-auto ">
                    {/*<!-- Uncomment below if you prefer to use a text logo -->*/}
                    <h1><Link to="/">ABC Company</Link></h1>
                    {/*<!-- <a to="index.html" className="scrollto"><img src="assets/img/logo.png" alt="" title=""></a> -->*/}
                </div>

            </div>
        </header>
    )
}