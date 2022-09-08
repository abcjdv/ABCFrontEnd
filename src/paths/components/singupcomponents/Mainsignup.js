import axios from "../../../api/axios";
import React from "react";
import "./Mainsignup.css"
import { useRef, useState, useEffect, } from "react";
import useAuth from "../logincomponents/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'universal-cookie';
import PhoneInput from 'react-phone-number-input'
import Spinner from 'react-bootstrap/Spinner';
const cookies = new Cookies()
const Email_REGEX = /\S+@\S+\.\S+/;
const password_REGEX = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const REGISTER_URL = '/user/register/';

export default function Mainsignup() {
    const [value, setValue] = useState();
    const { setAuth } = useAuth();
    const [loader, setLoader] = useState(false)
    const Navigate = useNavigate();

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [phoneNo, setPhone] = useState('');

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(Email_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(password_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])



    useEffect(() => {
        setErrMsg('');
    }, [email, password, matchPassword, phoneNo])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = Email_REGEX.test(email);
        const v2 = password_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setLoader(true)
        try {
            const response = await axios.post(REGISTER_URL, {
                email,
                password,
                phoneNo
            },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            cookies.set("phoneNo", phoneNo)
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setEmail('');
            setPassword('');
            setMatchPassword('');
            setPhone('');
            GetAccessToken();
            GetOtp();
        } catch (err) {
            setLoader(false)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    const GetAccessToken = async (e) => {
        let token;
        try {
            const response = await axios.post(
                "/auth/login/", { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                }
            )
            setEmail('');
            setPassword('');
            window.localStorage.setItem('access', response?.data?.access)
            setLoader(false)
                ;
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Username or password incorrect');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    const GetOtp = () => {
        axios.post("user/send_otp/", { phoneNo: phoneNo },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            cookies.set('phoneNo', phoneNo)
            cookies.set('Otp', res.data?.otp)
            Navigate("/Otp")
        }).catch(err => {
        })
    }
    return (
        <section className="scroll_form">
            <div className="container py-5 forms-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                        <div className="card shadow text-white" style={{ borderradius: '0.5rem', minHeight: '40rem' }}>
                            <div className="card-body p-lg-5 p-md-5 p-4">

                                <div className="mb-md-5">
                                    <h2 className="fw-bold mb-2 text-uppercase" style={{ color: "#f6ecd0" }}>Sign Up</h2>
                                    <p className="text-white-50 mb-5">Enter your email and password to register</p>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                    <form onSubmit={handleSubmit}>
                                        <label className="form-label" htmlFor="email">
                                            Email: &nbsp;
                                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} className={validEmail ? "valid" : "visually-hidden"} />
                                            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} className={validEmail || !email ? "visually-hidden" : "invalid"} />
                                            
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            ref={emailRef}
                                            autoComplete="off"
                                            className="form-control mb-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                            required />
                                        <p id="uidnote" style={{ color: "#ff8383" }} className={emailFocus && email && !validEmail ? "instructions" : "visually-hidden"}>
                                            <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#ff8383" }} />
                                            <span>&nbsp;</span>4 to 24 characters.<br />
                                            Must begin with a letter.<br />
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>
                                        <label className="form-label" htmlFor="password">
                                            Password: &nbsp;
                                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} className={validPassword ? "valid" : "visually-hidden"} />
                                            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} className={validPassword || !password ? "visually-hidden" : "invalid"} />
                                        </label>
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control mb-3"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            aria-invalid={validPassword ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPasswordFocus(true)}
                                            onBlur={() => setPasswordFocus(false)}
                                        />
                                        <p id="pwdnote" style={{ color: "#ff8383" }} className={passwordFocus && password && !validPassword ? "instructions" : "visually-hidden"}>
                                            <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#ff8383" }} />
                                            &nbsp;8 to 24 characters.<br />
                                            Must include uppercase and lowercase letters, a number and a special character.<br />
                                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>
                                        <label className="form-label" htmlFor="confirm_password">
                                            Confirm Password: &nbsp;
                                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} className={validMatch && matchPassword ? "valid" : "visually-hidden"} />
                                            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} className={validMatch || !matchPassword ? "visually-hidden" : "invalid"} />
                                        </label>
                                        <input
                                            type="password"
                                            id="confirm_password"
                                            className="form-control mb-3"
                                            value={matchPassword}
                                            onChange={(e) => setMatchPassword(e.target.value)}
                                            required
                                            aria-invalid={validPassword ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <p id="confirmnote" style={{ color: "#ff8383" }} className={matchFocus && !validMatch ? "instructions" : "visually-hidden"}>
                                            <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#ff8383" }} />
                                            &nbsp;Must match the first password input field.
                                        </p>
                                        <label className="form-label" htmlFor="phoneNo">Phone: &nbsp;</label>
                                        <div>
                                            <PhoneInput
                                                id="phoneNo"
                                                className=""
                                                // style={{ width: "28%", padding: "6%" }}
                                                placeholder="Enter phone number"
                                                value={phoneNo}
                                                onChange={setPhone} />
                                        </div>
                                        {/* <input
                                            type="number"
                                            id="phoneNo"
                                            className="form-control"
                                            value={phoneNo}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        /> */}

                                        <p>
                                            <br />Already registered?<br />
                                            <span className="line">
                                                <Link to={"/login"} >Sign In</Link>
                                            </span>
                                        </p>

                                        {/*<!-- <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> -->*/}

                                        {/*<!-- <button className="btn btn-outline-light btn-lg px-5" type="submit">Next</button> -->*/}
                                        <div className="position mb-5 me-5">
                                            <button disabled={!validEmail || !validPassword || !validMatch ? true : false} className="btn btn-next position-relative px-5 ">Next</button>
                                            {loader && <Spinner animation="border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" className="spinner-set">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>}
                                        </div>
                                    </form>

                                </div>

                                {/* <!-- <div>
                                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign
                                        Up</a>
                                </p>
    </div> -->*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}