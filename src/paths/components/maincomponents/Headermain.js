import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../logincomponents/hooks/useAuth";
import Cookies from "universal-cookie";
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import AuthContext from "../logincomponents/context/AuthProvider";
import axios from "../../../api/axios";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
const cookies = new Cookies();
export default function Headermain() {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn")
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState();
    useEffect(() => {
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
    const { auth } = useAuth();
    const { setAuth } = useContext(AuthContext);
    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        window.localStorage.setItem("isLoggedIn", "false");
    }
    return (
        <header id="header" className="d-flex align-items-right ">
            <div className="container-fluid container-xxl d-flex justify-content-end align-items-end">
                <div className="me-5">
                    <div className="rounded-top" role="group" aria-label="Basic outlined example">

                        {isLoggedIn === "true"
                            ? <div className="btn-group col-lg-3 col-md-3" >
                                <Dropdown className='user_drop'>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">

                                        <span className='buyer-profile-img'><img src={image} style={{ width: "", height: "" }} /></span>

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu id="my_dropdown">
                                        <DropdownItem> <span className='user_name'>{fullName}</span></DropdownItem>
                                        <hr />
                                        <Dropdown.Item className='Profile mb-1' ><Link to={"/Profile"}>Your Profile</Link></Dropdown.Item>

                                        <Dropdown.Item className='Sign_out '><Link to={""} onClick={() => logout()}>Sign Out</Link></Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            : <div className="btn-group btn-btn-group" role="group">
                                <Link to="/Login" type="button" className="btn btn-outline button-btn">Log In</Link>
                                <Link to="/Signup" type="button" className="btn btn-outline button-btn">Sign Up</Link>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </header>
    )

}