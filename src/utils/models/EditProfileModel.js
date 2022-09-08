import { Button } from 'bootstrap';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import UserProfile from "../../paths/components/DashboardSeller/SellerEditProfile"

const EditProfileModel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="btn btn-view">Edit Profile</button>
            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Body style={{ background: "" }}>
                    <UserProfile 
                    show={show}
                    onChange={value=>setShow(value)}/>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default EditProfileModel;