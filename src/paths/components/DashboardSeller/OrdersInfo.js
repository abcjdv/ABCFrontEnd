import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import "./Dashboard.css"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import Cookies from "universal-cookie";
import DashboardHeader from './DashboardHeader';
const cookies = new Cookies();
export default function OrdersInfo() {
    const { state } = useLocation();
    const { id } = state;
    const axiosPrivate = useAxiosPrivate();
    //console.log(id, 'id')
    const [orderList, setOrderList] = useState();
    useEffect(() => {
        axiosPrivate.get("seller/orders_listing/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "order list")
            setOrderList(res.data)
        }).catch(err => {
            //console.log(err)
        })
    }, [])
    const orderInfo = orderList?.map((el, index) => {
        if (id == el?.id) {
            return (
                <>
                    <DashboardHeader />
                    <div key={index} className="Seller-Order-Items">
                        <div className="container ">
                            <div className="row  gx-5">
                                <div className="col-lg-7 col-12 py-3 p-3  mt-1">

                                    <div className='row'>
                                        <div className=" col-12  mt-1">
                                            <div className='order-info-box'>
                                                <div className='Order_items p-3 mb-3'><h5><strong>Order Items</strong></h5></div>
                                                <div className='p-4'>
                                                    <div className='d-flex '>
                                                        <div className='col-8'>
                                                            <span className="item-quantity-prefix">Items</span>
                                                        </div>


                                                        <div className=" col-2 text-center">Qty</div>
                                                        <div className="col-2 text-center">Totals</div>

                                                    </div>
                                                    <hr className='hr-pro' />

                                                    <div className=" col-12 Products-container d-flex justify-content-between  ">
                                                        <div className="col-8 Product-name d-flex">

                                                            <div className=" img-wrap">
                                                                <Link to=""><img src={el.product.image} alt='not found' /></Link>
                                                            </div>
                                                            <div className="content d-flex flex-column ms-2">
                                                                <Link to="" className="para-txt">
                                                                    Yoga Training
                                                                    Accessories
                                                                    Single
                                                                    SPRING</Link>
                                                                <small>No Brand,Color Family:Brown</small>
                                                            </div>
                                                        </div>
                                                        <div className=" col-2 Product-price  pt-2">
                                                            <div className="text-center">
                                                                <span className="">{el.product.quantity}</span>
                                                            </div>
                                                        </div>
                                                        <div className=" col-2 Product-quantity ">
                                                            <div className="text-center">
                                                                <span className="item-quantity-value">{el.product.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr className='hr-pro' />


                                                    <div className=" col-12 Products-container d-flex justify-content-between  ">
                                                        <div className="col-12 d-flex justify-content-between">

                                                            <div className="col-2">
                                                                <p><strong className="subTo">Subtotal:</strong></p>
                                                            </div>
                                                            <div className="col-2 text-center">
                                                                <p className="p-total">{el.order.orderTotal}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr className='hr-pro' />


                                                    <div className=" col-12 Products-container d-flex justify-content-between  ">
                                                        <div className="col-12 d-flex justify-content-between">

                                                            <div className="col-4">
                                                                <h6><strong className="subTo">Payment Method:</strong></h6>
                                                            </div>
                                                            <div className="col-2 text-center">
                                                                <p className="p-total">{el.order.paymentOptions}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr className='hr-pro' />


                                                    <div className=" col-12 Products-container d-flex justify-content-between  ">
                                                        <div className="col-12 d-flex justify-content-between">

                                                            <div className="col-2">
                                                                <h5><strong className='total'>Total:</strong></h5>
                                                            </div>
                                                            <div className="col-2 text-center">
                                                                <p>{el.order.orderTotal}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12  mt-4'>
                                            <div className='row'>

                                                <div className="col-6 ">
                                                    <div className='Billing-Address'>
                                                        <h5 className='order-border p-3'><strong>Billing Address</strong></h5>
                                                        <div className='px-3 billing-info'>
                                                            <p>{el.order.shippingAddress}</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="col-6">

                                                    <div className="Shipping-Address">

                                                        <h5 className='order-border p-3'><strong>Shipping Address</strong></h5>
                                                        <div className='px-3 Shipping-info'>
                                                            <p>{el.order.shippingAddress}</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12 mt-4 ">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className='General-details-bd'>
                                                <h5 className='order-border p-3'><strong>General Details</strong></h5>
                                                <div className='px-3 Shipping-info'>
                                                    <p><strong>Order Status : </strong><button type="button" className="btn btn-processing ms-2" style={{ fontSize: "0.8rem" }}>
                                                        <small>{el.order.orderStatus}</small>
                                                    </button><Link to={""} className="ms-2">Edit</Link> </p>
                                                    <p><strong>Order Date : </strong> {el.created_at}</p>

                                                </div>
                                                <hr className='hr-pro' />
                                                <div className='px-3 Shipping-info'>
                                                    <p><strong>Customer : </strong> {el.order.fullName}</p>
                                                    <p><strong>Email : </strong>{el.order.email}</p>
                                                    <p><strong>Phone : </strong> {el.order.phoneNo}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className='General-details-bd'>
                                                <h5 className='order-border p-3'><strong>Order Notes</strong></h5>
                                                <div className='px-3 Shipping-info'>

                                                    <div className='p-3 Payment-para'><p>Payment to be made upon delievery. Order status changed from Pending. Payment to Processing</p></div>

                                                    <h5 className='mt-3'>Add note</h5>

                                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1"
                                                        id="message"
                                                        required>

                                                        <Form.Control as="textarea" className="form_clr" rows={5} placeholder="Write your message here..." />
                                                    </Form.Group>

                                                    <div className="d-flex customer-note mt-3 mb-3">
                                                        <input type="email" className="form-control form_clr" id="inputEmail4" placeholder='Customer note' />
                                                        <Link to={"/"} className="btn btn-Note ms-3 p-2">Add Note</Link>
                                                    </div>

                                                    <Link to={"/"} className="btn btn-track">Tracking Number</Link>

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
    })
    return (
        <>
            {orderInfo}
        </>
    )
}