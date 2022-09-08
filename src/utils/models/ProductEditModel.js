import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import SellerEditProduct from '../../paths/components/DashboardSeller/SellerProductEdit';

const ProductViewModel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className='fa-solid fa-pen-to-square me-2' variant="primary" onClick={handleShow}>
            </i>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg" className="ps-0">
                <Modal.Body style={{ background: "" }} className="p-lg-5 p-md-5 p-3">

                    <SellerEditProduct productId={props.productId} />
                    
                </Modal.Body>
            </Modal>
        </>
    );
}
export default ProductViewModel;