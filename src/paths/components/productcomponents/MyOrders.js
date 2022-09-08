
import React from 'react'
import { Link } from "react-router-dom";
import Headerproducts from "./Headerproducts"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "./product.css";

export default function MyOrders() {
    return (
        <>
        <Headerproducts />
        <Dropdown className='track-order-drop1 pt-lg-0 pt-md-4 pt-5'>
                <Dropdown.Toggle variant="" id="dropdown-basic">

                    Track My Order

                </Dropdown.Toggle>

                <Dropdown.Menu id="Order-dropdown" className='shadow'>
                    <div className='p-4 '>
                        <form class="row g-3 tool_tip">
                            <h6>My Recent Orders</h6>
                            <Link to={"/Trackorders"} className="mb-3">2022/14/02  041 589 636999</Link>
                            <h6>Track my Order</h6>

                            <div className='position-relative mt-2'>
                                <div class="col-12">
                                    <label for="inputPassword4" class="form-label">Your order number:</label>
                                    <input type="text" placeholder='eg.123456789' class="form-control recent-orders-input" id="inputPassword4" />
                                </div>
                                <Button className='' id="btn-btn-submit"><i class="fa-solid fa-angle-right"></i></Button>

                            </div>

                        </form>
                    </div>

                </Dropdown.Menu>
            </Dropdown>
            <div className="My-Orders">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-lg-auto mx-0 All-order-data">
                            <Link to="#" className="me-3 ">
                                All (4)
                            </Link>
                            <Link to="#" className="me-3 ">
                                Processing (5)
                            </Link>
                            <Link to="#" className="me-3 ">
                                Completed (1)
                            </Link>
                            <Link to="#" className="me-3 text-truncate">
                                Refunded (2)
                            </Link>
                            <Link to="#" className="me-3 ">

                            </Link>
                            <Link to="#" className="">
                                Cancelled (1)
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="container ">

                    <div className="row  gx-5">

                        <div className="col-lg-10 col-12 py-3 p-3  mt-1 mx-auto">

                            <div className='row'>
                                <div className=" col-12 ">
                                    <div className='p-3 Myorders-pkg-1 shadow'>

                                        <div className='Track-order-pkg d-flex justify-content-between'>
                                            <div className='d-flex flex-column'>
                                                <Link to={""}>Order #14662789631259</Link>
                                                <small>Placed on 22 Aug 2022 21:56:53</small>
                                            </div>

                                            <div className='d-flex align-items-center'>
                                                <span className="badge order-Processing">Processing</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-12 d-flex  p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                                            <div className="col-6  d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="d-flex flex-column">
                                                    <Link to="" className="txt-txt">
                                                        Yoga  Training
                                                        Accessories
                                                        Single
                                                        SPRING</Link>
                                                    <small className='warranty'>No Warranty</small>
                                                </div>
                                            </div>
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <span className="qty">Qty: 3</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <p><strong>Rs: </strong>456</p>
                                                </div>
                                            </div>


                                        </div>

                                        <div className='col-12 d-flex p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                                            <div className="col-6 d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="d-flex flex-column">
                                                    <Link to="" className="txt-txt">
                                                        Honor 8 Lite Tempered GLass Premium <br />Quality</Link>
                                                    <small className='warranty'>N/A No Warranty</small>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="text-center">
                                                    <span className="qty">Qty: 3</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <p><strong>Rs: </strong>940</p>
                                                </div>
                                            </div>


                                        </div>

                                        <div className='col-12 d-flex p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                                            <div className="col-6 d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="d-flex flex-column ">
                                                    <Link to="" className="txt-txt">
                                                        Honor 8 Lite Tempered GLass Premium <br />Quality</Link>
                                                    <small className='warranty'>N/A No Warranty</small>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="text-center">
                                                    <span className="qty">Qty: 3</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <p><strong>Rs: </strong>456</p>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className='Track-order-pkg '>
                                            <div className='text-end'>
                                                <p><strong>Total: </strong>1,359</p>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                                <div className=" col-12 mt-3 ">
                                    <div className='p-3 Myorders-pkg-1 shadow'>

                                        <div className='Track-order-pkg d-flex justify-content-between'>
                                            <div className='d-flex flex-column'>
                                                <Link to={""}>Order #14662789631259</Link>
                                                <small>Placed on 22 Aug 2022 21:56:53</small>
                                            </div>

                                            <div className='d-flex align-items-center'>
                                                <span className="badge order-Processing">Processing</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-12 d-flex  p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                                            <div className="col-6  d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="d-flex flex-column">
                                                    <Link to="" className="txt-txt">
                                                        Yoga  Training
                                                        Accessories
                                                        Single
                                                        SPRING</Link>
                                                    <small className='warranty'>No Warranty</small>
                                                </div>
                                            </div>
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <span className="qty">Qty: 3</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <p><strong>Rs: </strong>456</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                                            <div className="col-6 d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="d-flex flex-column">
                                                    <Link to="" className="txt-txt">
                                                        Honor 8 Lite Tempered GLass Premium <br />Quality</Link>
                                                    <small className='warranty'>N/A No Warranty</small>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="text-center">
                                                    <span className="qty">Qty: 3</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-3">
                                                <div className="text-center">
                                                    <p><strong>Rs: </strong>940</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div className='col-9'>

                                            </div>
                                            <div className='text-end col-3'>
                                                <p><strong>Total: </strong>1,359</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}