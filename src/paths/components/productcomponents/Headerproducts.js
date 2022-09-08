import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
// import "./product.css";
import React, { useRef } from 'react';
import { useContext } from "react";
import AuthContext from "../logincomponents/context/AuthProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "../../../api/axios";
import Cookies from "universal-cookie";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import {
    Container,
    Popover,
    Row,
    Col
} from "react-bootstrap";
const cookies = new Cookies();
export default function Headerproducts(props) {
    const { setAuth } = useContext(AuthContext);
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState();
    useEffect(() => {
        window.addEventListener('scroll', function () {
            let navbar = document.querySelector('header');
            if (window.pageYOffset > 0) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
        axios.get("user/user_profile/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setFullName(res.data[0].fullName)
            setImage(res.data[0].image)
        }).catch(err => {
            //console.log(err)
        })
    }, [])
    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        window.localStorage.setItem("isLoggedIn", "false")
    }
   const [show, setShow] = useState(false);
    const target = useRef(null);
   return (
        <header id="myheader" className="header_login d-flex align-items-center fixed-top " >

            <div className="container-xxl container-fluid d-flex align-items-center justify-content-between p-4 ">

                <div id="logo" className="col-lg-3 col-md-3 col-3" >

                    <h1><Link to="/">ABC Company</Link></h1>

                </div>


                <div className="col-lg-5 col-md-6 col-5">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                </div>


                <div className=" col-lg-4 col-md-3 col-3" >
                    <div className=' d-flex align-items-center justify-content-lg-around justify-content-center'>
                        <Link to="/CheckOutForm" className=" btn-cart d-flex justify-content-end position-relative order-lg-1 order-md-2 order-2 me-lg-0 me-md-2 me-0 ">
                            <div className=''>
                                <i className="fa fa-shopping-cart icon-button"></i>
                                <Badge className='icon-button__badge'>{props.cartItem}</Badge>
                            </div>
                        </Link>
                        <Dropdown className='track-order-drop shadow order-lg-2 order-md-1 order-1'>
                            <Dropdown.Toggle variant="" id="dropdown-basic">

                                Track My Order

                            </Dropdown.Toggle>  

                            <Dropdown.Menu id="Order-dropdown" className='shadow'>
                                <div className='p-4 '>
                                    <form className="row g-3 tool_tip">
                                        <h6>My Recent Orders</h6>
                                        <Link to={"/Trackorders"} className="mb-3">2022/14/02  041 589 636999</Link>
                                        <h6>Track my Order</h6>

                                        <div className='position-relative mt-2'>
                                            <div className="col-12">
                                                <label htmlFor="inputPassword4" className="form-label">Your order number:</label>
                                                <input type="text" placeholder='eg.123456789' className="form-control" id="inputPassword4" />
                                            </div>
                                            <Button className='button-submit'><i className="fa-solid fa-angle-right"></i></Button>

                                        </div>

                                    </form>
                                </div>

                            </Dropdown.Menu>
                        </Dropdown>


                        <Dropdown className='user_drop ms-lg-2 ms-2  order-lg-3 order-md-3 order-3'>
                            <Dropdown.Toggle variant="" id="dropdown-basic">

                                {image
                                    ? <span className='buyer-profile-img'><img src={image} style={{ width: "", height: "" }} /></span>
                                    : <i className="fa-solid fa--circle--user  ms-3"></i>
                                }
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="my_dropdown" className='shadow p-2'>
                                <DropdownItem as={Link} to="/Profile" className='username'> {fullName}</DropdownItem>
                                <hr className='my-2' />
                                <DropdownItem as={Link} to="/Dash">Switch to Seller</DropdownItem>
                                <Dropdown.Item as={Link} to="/Myorders" className='myOrders mb-1' >My Orders</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/Wishlist" className='myWishlist mb-1' >My Wishlist</Dropdown.Item>

                                <Dropdown.Item as={Link} to="/Profile" className='Profile mb-1' >Your Profile</Dropdown.Item>
                                <Dropdown.Item onClick={() => logout()} className='Sign_out '>Sign Out</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    )
}