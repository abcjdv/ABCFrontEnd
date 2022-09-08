import { useRef, useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';
import axios from '../../../api/axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loader from '../../../utils/loader'
import Spinner from 'react-bootstrap/Spinner';
const LOGIN_URL = '/auth/login/';
const cookies = new Cookies();
//import { Link } from "react-router-dom"
export default function Login() {
    const { setAuth } = useAuth();
    const [loader, setLoader] = useState(false);
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/Main";

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        let token
        try {
            const response = await axios.post(
                LOGIN_URL, { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true,
                }
            )
            const accessToken = response?.data?.access;
            localStorage.setItem("access", JSON.stringify(response?.data?.access));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            localStorage.setItem("access", JSON.stringify(response?.data?.access));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            window.localStorage.setItem("isLoggedIn", "true")
            // localStorage.setItem("name", "abdul");
            cookies.set('access', response?.data?.access);
            cookies.set('refresh', response?.data?.refresh);
            // const roles = response?.data?.roles;
            setAuth({ email, password, accessToken });
            setEmail('');
            setPassword('');
            setLoader(false)
            Navigate(from, { replace: true });
        } catch (err) {
            setLoader(false)
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
    return (
        <section className="">
            <div className="container py-5 forms-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                        <div className="card shadow text-white" style={{ borderradius: '0.5rem', height: '40rem' }}>
                            <div className="card-body p-5">
                                <div className="mb-md-5">

                                    <h2 className="fw-bold mb-2 text-uppercase" style={{ color: "#f6ecd0" }}>Login</h2>
                                    <p className="text-white-50 mb-5">Enter your email and password to login</p>
                                    {errMsg && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>}
                                    <form className="form-outline form-white mb-4" onSubmit={handleSubmit}>
                                        <div>
                                            <label className="form-label" htmlFor="email">Email:</label>
                                            <br />
                                            <input
                                                type="email"
                                                id="email"
                                                ref={emailRef}
                                                autoComplete="off"
                                                className="form-control "
                                                name="email"
                                                value={email}
                                                placeholder="Your Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div >
                                            <br />
                                            <label className="form-label" htmlFor="password">Password:</label>
                                            <br />
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={password}
                                                id="password"
                                                placeholder="********"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="text-right mb-5 me-5 position">
                                            <button className="btn btn-next  px-5" type="submit"  >Login</button>
                                            {loader && <Spinner animation="border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" className="spinner-set">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>}
                                        </div>
                                    </form>
                                    <p>
                                        Need an Account?<br />
                                        <span className="line">
                                            {/*put router link here*/}
                                            <Link to={"/Signup"}>Sign Up</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}