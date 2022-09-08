import React from "react";
import { Link } from "react-router-dom";
const ShippingAndBilling = ({
    fullName,
    editFullname,
    address,
    editAddress,
    phoneNumber,
    editPhone,
    email,
    editEmail,
    quantity,
    price,
    deliveryOptions,
    Ninja,
    ninjaTotal,
    sufiId,
    handleProceedToPay,
    setEditFullname,
    setEditAddress,
    setEditEmail,
    setEditPhone,
    setFullName,
    setAddress,
    setEmail,
    setPhoneNumber,
    Pick,
    pickTotal,
}) => {
    return (
        <>
            <div className="col-lg-5 col-12 mt-4 ">
                <div className=" Product-box p-1">
                    <div className="row  p-3  shadow">
                        <div className="checkout-address-inner pt-2 ">
                            <div className='' >
                                <h5>Shipping & Billing</h5>
                            </div>
                            <div className="Address-title-container d-flex">

                                <i className="fa-solid fa-user d-flex align-items-center"></i>

                                <input
                                    style={{ border: "none" }}
                                    placeholder="Full Name"
                                    type="text"
                                    className="form-control buyer_field position-relative  ms-2 ps-0"
                                    id="inputEmail4"
                                    value={fullName}
                                    name={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    disabled={editFullname} />
                                {editFullname && <Link onClick={() => setEditFullname(false)} to className={'editbtn'}>Edit</Link>}
                                {!editFullname && <Link onClick={() => setEditFullname(true)} to className={'editbtn'}>Save</Link>}

                            </div>
                            <div className="Address-info-item d-flex mt-2">
                                <i className="fa-solid fa-location-dot d-flex align-items-center"></i>
                                <input
                                    style={{ border: "none" }}
                                    placeholder="Enter Your Address here..."
                                    type="text"
                                    className="form-control buyer_field position-relative ms-2 ps-0"
                                    id="inputaddress"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    disabled={editAddress} />
                                {editAddress && <Link onClick={() => setEditAddress(false)} to className={'editbtn'}>Edit</Link>}
                                {!editAddress && <Link onClick={() => setEditAddress(true)} to className={'editbtn'}>Save</Link>}
                            </div>
                        </div>
                        <div className=" Address-info-item d-flex pt-2 ">

                            <i className="fa-solid fa-phone d-flex align-items-center"></i>


                            <input
                                style={{ border: "none" }}
                                placeholder="Phone Number"
                                type="phone"
                                className="form-control buyer_field  position-relative  ms-2 ps-0"
                                id="inputEmail4"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={editPhone} />
                            {editPhone && <Link onClick={() => setEditPhone(false)} to className={'editbtn'}>Edit</Link>}
                            {!editPhone && <Link onClick={() => setEditPhone(true)} to className={'editbtn'}>Save</Link>}
                        </div>

                        <div className="text_email d-flex pt-2 pb-2 ">


                            <i className="fa-solid fa-envelope d-flex align-items-center"></i>


                            <input
                                style={{ border: "none" }}
                                placeholder="Email"
                                type="text"
                                className="form-control buyer_field position-relative  ms-2 ps-0"
                                id="inputEmail4"
                                value={email}
                                name={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={editEmail} />
                            {editEmail && <Link onClick={() => setEditEmail(false)} to className={'editbtn'}>Edit</Link>}
                            {!editEmail && <Link onClick={() => setEditEmail(true)} to className={'editbtn'}>Save</Link>}
                        </div>


                        <div className="summary-section ">
                            <h5>Order Summary</h5>
                            <div className="summary-section-content d-flex justify-content-between">
                                <p>Items Total ({quantity})</p>
                                <div className="checkout-summary-value">
                                    $ {price}
                                </div>
                            </div>


                            <div className="summary-section-content d-flex justify-content-between">
                                <p>Shipping Fee</p>
                                <div className="checkout-summary-value">
                                    ${deliveryOptions === 'PICK' ? Pick : Ninja}
                                </div>
                            </div>

                            <div className="voucher-input d-flex ">
                                <div className="col-8">
                                    <input type="text" className="form-control " id="inputAddress"
                                        placeholder="Enter Voucher Code" />
                                </div>
                                <div className="col-4 ms-2">
                                    <Link to="" type="button" className="btn btn-payment px-4 ">APPLY</Link>
                                </div>
                            </div>

                            <div className="checkout-order-total-row d-flex justify-content-between pt-2">
                                <div className="checkout-order-total">
                                    Total:
                                </div>
                                <div className="checkout-order-total-fee text-end">
                                    $ {deliveryOptions === 'PICK' ? pickTotal.toFixed(2) : ninjaTotal.toFixed(2)} <br />
                                    <small className="checkout-order-total-fee-tip">VAT included, where
                                        applicable</small>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-12 mx-auto btn-Proceed pt-3">
                                <form id='sufi' action={`https://abc.nexquery.com/create-checkout-session/${sufiId}/`}
                                    method='POST'>
                                    <button onClick={handleProceedToPay} className="btn btn-Proceed-inner" type="button" style={{ width: '100%' }}>Proceed To Pay</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShippingAndBilling;