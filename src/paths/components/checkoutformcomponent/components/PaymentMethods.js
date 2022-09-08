import React from "react";
import Loader from "../../../../utils/loader";
const PaymentMethods = (props) => {
    return (
        <>
            <div className='col-12   mt-3'>
                <div className='Product-box p-4'>
                    <div className="payment-methods  pb-2">
                        <h5>Payment Methods</h5>
                        <div className="radio_button d-flex">
                            <div className="form-check me-2">
                                <input value={"STRIPE"} onChange={(e) => { props.setPaymentMethod(e.target.value) }} className="form-check-input" type="radio" name="flexRadioDefault11"
                                    id="flexRadioDefault11" />
                                <label className="form-check-label" htmlFor="flexRadioDefault11">
                                    <span id="stripe">STRIPE</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input value={"PAYNOW"} onChange={(e) => { props.setPaymentMethod(e.target.value) }} className="form-check-input" type="radio" name="flexRadioDefault11"
                                    id="flexRadioDefault12" />
                                <label className="form-check-label" htmlFor="flexRadioDefault12">
                                    <span id="paynow">PAYNOW</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="payment-methods pb-2">
                        <h5>Delivery Options</h5>
                        <div className="radio_button d-flex">
                            <input onChange={(e) => { props.setDeliveryOptions(e.target.value) }} type="radio" value="PICK" className="form-check-input" name="locker"
                                onClick={props.handlePick} />
                            <label className="form-check-label pick ms-2">PICK</label>
                            <br />

                            <input onChange={(e) => { props.setDeliveryOptions(e.target.value) }} type="radio" value="NINJA" className="form-check-input ms-3" name="locker"
                                onClick={props.onLoad2} />
                            <label className="form-check-label ninja ms-2">NINJA</label>
                            <br />


                        </div>

                        <div className='hide mt-2 position-relative' id='group3'>
                            <div className='d-flex'>
                                <div className="col-5">
                                    <label htmlFor="inputState" className="form-label"><strong>Country</strong></label>
                                    <select
                                        id="inputState"
                                        className="form-select Pick_input mt-1"
                                        onChange={(e) => {
                                            props.setCountryCode(e.target.value)
                                        }}
                                    >
                                        <option>Choose...</option>
                                        <option value="sg">Singapore</option>
                                        <option value="ch">China</option>
                                    </select>
                                </div>
                                <div className="col-5 ms-2">
                                    <label htmlFor="inputZip" className="form-label "><strong>Postal Code</strong></label>
                                    <input
                                        type="text"
                                        className="form-control Pick_input mt-1"
                                        id="inputZip"
                                        onChange={(e) => {
                                            props.setPostalCode(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            <button className='btn btn-add mt-2 ' onClick={props.handleLockers}>ADD</button>
                            {props.loader && <Loader className="Checkout-form-spinner" />}
                        </div>


                        <div className=" hide  " id="group1">
                            {!props.loader && <h6 className="mt-3"><strong>Available Lockers</strong></h6>}
                            {props.lockersData}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaymentMethods