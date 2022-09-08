import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Headermain from "./components/maincomponents/Headermain";
import Heromain from "./components/maincomponents/Heromain";
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
export default function Main() {
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);
    const [another,setAnother]=useState(true);
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        // const query = new URLSearchParams(window.location.search);
        const values = QueryString.parse(location.search);
        if (values.success) {
            setShowAlert(true)
        }
        if (values.canceled) {
            
        }
    }, []);
    //console.log(showAlert)
    return (
        <div>
           {showAlert && <div className="alert alert-success alert-dismissible position-relative fade show mx-auto alert-style" role="alert">
                Your order has been placed <strong>successfully!</strong>
                <i className="fa-solid fa-xmark" onClick={()=>setShowAlert(false)}></i>
            </div>
            }
            <Outlet />
            <Headermain />
            <Heromain />
        </div>
    )
}