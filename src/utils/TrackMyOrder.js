import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const TrackMyOrder = () => {
    return (
        <Dropdown className='track-order-drop2 pt-lg-0 pt-md-4 pt-3'>
            <Dropdown.Toggle variant="" id="dropdown-basic">

                Track My Order

            </Dropdown.Toggle>

            <Dropdown.Menu id="Order-dropdown" className='shadow'>
                <div className='p-4 '>
                    <form className="row g-3 tool_tip">
                        <h6>My Recent Orders</h6>
                        <Link to={"/Trackorders"} className="mb-3">2022/14/02  041 589 636999</Link>
                        <h6>Track my Order</h6>

                        <div className='position-relative mt-2'>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Your order number:</label>
                                <input type="text" placeholder='eg.123456789' className="form-control recent-orders-input recent-orders-input1" id="inputPassword4" />
                            </div>
                            <Button className='' id="btn-btn-submit"><i className="fa-solid fa-angle-right"></i></Button>

                        </div>

                    </form>
                </div>

            </Dropdown.Menu>
        </Dropdown>

    )
}
export default TrackMyOrder;