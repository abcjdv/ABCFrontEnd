import React from "react";
import Spinner from 'react-bootstrap/Spinner';
const Loader = (props) => {
    return (
        <Spinner animation="border" role="status" className={props.className}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
export default Loader;