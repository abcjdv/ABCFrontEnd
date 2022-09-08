import React, { useEffect, useState, Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate";
import axios from "../../../api/axios";
import OtpInput from 'react-otp-input';
const cookies = new Cookies();
export default function Mainotp() {
    const validOtp = cookies.get('Otp')
    const [phone, setPhone] = useState(cookies.get('phoneNo'));
    const axiosPrivate = useAxiosPrivate();
    const Navigate = useNavigate();
    const errMsg = "Otp is not Valid"
    const [showErr, setShowErr] = useState(false);
    const [otp, setOtp] = useState('');
    const Handleotp = () => {
        ////console.log("hi")
        if (otp == validOtp) {
            //console.log('right')
            Navigate('/Username')
        }
        else {
            //console.log('otp is not valid')
            setShowErr(true)

        }
    }
    const GetOtp = () => {
        axios.post("user/send_otp/", { phoneNo: phone },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            cookies.set('Otp', res.data?.otp)
            setShowErr(false)
        }).catch(err => {
            //console.error(err)
        })
    }
    return (
        <>
            <section className="scroll_form">
                <div className="container py-5 forms-container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow text-white" style={{ borderradius: "0.5rem", height: "40rem" }}>
                                <div className="card-body p-5">

                                    <div className="mb-md-5">

                                        <h2 className="fw-bold mb-2 text-uppercase mb-5" style={{ color: "#f6ecd0" }}>OTP</h2>
                                        {/* <!-- <p className="text-white-50 mb-5">Enter your email and password to register</p> -->*/}
                                        {/* <p className="mb-3">Phone Number</p> */}
                                        <p className="mb-5">We have sent an otp to this number : &nbsp;<strong style={{ color: "#f6ecd0" }}>{phone}</strong></p>
                                        {showErr && <><p className="p-4"
                                            style={{ color: "#664d03", backgroundColor: "#fffecd", borderColor: "#ffecb5", borderRadius: "0.25rem" }}>
                                            {errMsg}.
                                            <b onClick={GetOtp} style={{ cursor: "pointer", color: "#e86669"}}>
                                                &nbsp;Resend Otp
                                            </b>
                                        </p>
                                        </>}
                                        <div className="form-outline form-white mb-5">
                                            {/* <label className="form-label" htmlFor="typeEmailX">OTP</label> */}
                                            <h5 className="text-center mb-5">Enter verification code</h5>
                                            <div className="d-flex justify-content-center">
                                                <OtpInput
                                                    className="otp-fields"
                                                    value={otp}
                                                    placeholder="------"
                                                    onChange={setOtp}
                                                    numInputs={6}
                                                    separator={<span>-</span>}
                                                />
                                            </div>
                                            {/* <input
                                                type="number"
                                                id="typeOtpX"
                                                className="form-control form-control-lg"
                                                value={otp}
                                                name={otp}
                                                onChange={(e) => setOtp(e.target.value)} /> */}

                                        </div>

                                        <div className="text-right mb-5 me-5 position">
                                            <button onClick={() => Handleotp()} className="btn btn-next px-5" type="button">Next</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}