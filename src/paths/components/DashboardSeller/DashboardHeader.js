import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Dashboard.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from "react-router-dom";
const DashboardHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container'>
                <div className="col-lg-12 mt-5">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="d-flex justify-content-between">
                                <div className="col-lg-6 col-md-6 col-8  offset-lg-3 offset-md-3 offset-1 seller-search position-relative">
                                    <i className="fa fa-search"></i>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>

                                <div className="col-2">
                                    <Button variant="primary" onClick={handleShow} className="mt-2">
                                        <i className="fa-solid fa-bars"></i>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body>
                    <div className=" navbar-brand  mt-2  ">
                        <div className=" font-weight-bold ms-3 py-3" id="ABC">
                            <Link to={"/"}>ABC Company</Link>
                        </div>
                    </div>
                    <hr />
                    <ul className="navbar-nav d-flex flex-column   w-100">
                        <li className="nav-item w-100" activeClassName="active">
                            <NavLink to="/Dash" className="nav-link text-light Side_nav" >
                                <i className="bi bi-speedometer2 dash-icon me-2"></i> Dashboard
                            </NavLink>
                        </li>

                        <li className="nav-item w-100 mt-2" activeClassName="active">
                            <NavLink to="/SellerPro" className="nav-link text-light Side_nav" >
                                <i className="bi bi-bag-fill dash-icon me-2"></i> My Products
                            </NavLink>
                        </li>
                        <li className="nav-item w-100 mt-2" activeClassName="active">
                            <NavLink to="/Sellerorder" className="nav-link text-light Side_nav">
                                <i className="bi bi-cart4 dash-icon me-2"></i>My Orders
                            </NavLink>
                        </li>
                        <li className="nav-item w-100 mt-2" activeClassName="active">
                            <NavLink to="/Sellerabout" className="nav-link text-light Side_nav" >
                                <i className="bi bi-person-circle dash-icon  me-2"></i> About me
                            </NavLink>
                        </li>

                        <hr />

                        <div className=" text-center Switch-buyer p-4 mt-3 col-9 mx-auto ">
                            {/* <div className=""> */}
                            <Link to={"/Main    "}><i className="fa-solid fa-chevron-right dashboard-switch-btn"></i></Link>
                            {/* </div> */}

                            <div className="mt-3">
                                <Link to={""} className=''>Switch to Buyer</Link>
                            </div>
                        </div>

                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default DashboardHeader;