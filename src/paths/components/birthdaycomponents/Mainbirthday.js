import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { axiosPrivate } from "../../../api/axios";
import useAxiosPrivate from '../logincomponents/hooks/useAxiosPrivate'
import Cookies from "universal-cookie";
const cookies=new Cookies();
export default function Mainbirthday() {
    const axiosPrivate = useAxiosPrivate();
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();
    const [dateOfBirth, setDateOfBirth] = useState("");
    const token = window.localStorage.getItem('access');
    //console.log("agya j=>", token);
    const REGISTER_URL = '/user/update_user/';
    const HandleSubmit = async () => {
        const body = {
            dateOfBirth: dateOfBirth,
        }
        await axios.patch("user/update_user/", body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }).then(res => {
                //console.log(res)
                Navigate('/Login')
            }).catch(err => {
                //console.log(err)
            })
    }
    return (
        <section className="scroll_form">
            <div className="container py-5 forms-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow text-white" style={{ borderradius: "0.5rem", height: "40rem" }}>
                            <div className="card-body p-5">

                                <div className="mb-md-5">

                                    <h2 className="fw-bold mb-2 mb-5" style={{ color: "#f6ecd0" }}>Input your Birthday</h2>
                                    {/*<!-- <p className="text-white-50 mb-5">Enter your email and password to register</p> -->*/}
                                    <div className="form-outline form-white mb-5">
                                        <label className="form-label" htmlFor="typeEmailX">Birthday (please ensure your are 21 or above)</label>
                                        <input
                                            type="date"
                                            className="form-control input_bar"
                                            id="inputEmail4"
                                            value={dateOfBirth}
                                            name={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)} />
                                    </div>

                                    <div className="form-check form-check-info text-start">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" unchecked />
                                        <label className="form-check-label ps-2" htmlFor="flexCheckDefault">
                                            By creating an account, you agree to the <a href="/" className="font-weight-bolder a-style">Terms and Conditions</a> and
                                            <a href="/" className="font-weight-bolder a-style"> Privacy Policy</a> set by us and abide by the law of XXX.
                                        </label>
                                    </div>

                                    <div className="text-right mb-5 me-5 position">
                                        <button onClick={HandleSubmit} className="btn btn-next px-5" type="button" to="/">Finish</button>
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