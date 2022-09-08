import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate";
import "../singupcomponents/Mainsignup.css";
import Spinner from 'react-bootstrap/Spinner';
const URL = "/user/update_user/";
export default function Mainusername() {
    const axiosPrivate=useAxiosPrivate();
    const [userName, setUserName] = useState();
    const [loader, setLoader] = useState(false);
    const token = window.localStorage.getItem('access');
    const Navigate = useNavigate();
    const HandleSubmit = async () => {
        setLoader(true)
        try {
            const response = await axiosPrivate.patch(URL, { userName },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true,
                }
            )
            setLoader(false)
            Navigate("/DateOfBirth");
        } catch (err) {
            setLoader(false)
        }
    }
    return (
        <section className="scroll_form">
            <div className="container py-5 forms-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow text-white" style={{ borderradius: "0.5rem", height: "40rem" }}>
                            <div className="card-body p-5">

                                <div className="mb-md-5">
                                    <h2 className="fw-bold mb-2 mb-5" style={{color:"#f6ecd0"}}>Create a Username</h2>
                                    {/*<!-- <p className="text-white-50 mb-5">Enter your email and password to register</p> -->*/}

                                    <div className="form-outline form-white mb-5">
                                        <label className="form-label" htmlFor="typeEmailX">Username</label>
                                        <input
                                            type="text"
                                            id="typeOtpX"
                                            className="form-control form-control-lg"
                                            autoComplete="off"
                                            onChange={(e) => setUserName(e.target.value)}
                                            required />
                                    </div>

                                    <p>This username will be with you throughout this website. Please do not choose a username that is linked to your social media accounts to maintain anonymity.</p>

                                    <div className="text-right mb-5 me-5  position">
                                        {loader && <Spinner animation="border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" className="spinner-set">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>}
                                        <button onClick={() => { HandleSubmit("Abdul Qadeer") }} className="btn btn-next  px-5" type="submit" >Next</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}