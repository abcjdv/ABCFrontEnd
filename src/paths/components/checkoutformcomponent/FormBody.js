import './form.css'
import useAxiosPrivate from '../logincomponents/hooks/useAxiosPrivate';
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import Loader from "../../../utils/loader";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import $ from 'jquery';
import TrackMyOrder from '../../../utils/TrackMyOrder';
import BreadcrumbComp from '../../../utils/BreadcrumbComp';
import PaymentMethods from './components/PaymentMethods';
import ShippingAndBilling from './components/ShippingAndBilling';
const cookies = new Cookies();
const FormBody = (props) => {
    const axiosPrivate = useAxiosPrivate();
    const [urlId, setUrlId] = useState();
    const [loaderId, setLoaderId] = useState()
    const [countryCode, setCountryCode] = useState("");
    const [postalCode, setPostalCode] = useState();
    const [lockers, setLockers] = useState([])
    const [cartData, setCartData] = useState([]);
    const [bool, setBool] = useState(false);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [locker_station_id, setLocker_station_id] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryOptions, setDeliveryOptions] = useState("");
    const [loader, setLoader] = useState(false)
    const [editEmail, setEditEmail] = useState(true)
    const [editAddress, setEditAddress] = useState(true)
    const [editFullname, setEditFullname] = useState(true)
    const [editPhone, setEditPhone] = useState(true)
    const Ninja = 6;
    const Pick = 2.54;
    let Total;
    var sufiId;
    const percentage = (value) => {
        return 20 * value / 100;
    }
    const handleLockers = async (e) => {
        setLoader(true)
        onLoad3()
        e.preventDefault();
        axiosPrivate.get("interop/get_lockers_location/",
            {
                params: {
                    country_code: countryCode,
                    postal_code: postalCode,
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setLockers(res.data.locker_station_details)
            //console.log(res.data.locker_station_details)
            setLoader(false)
        }).catch(err => {
            setLoader(false)
            //console.log(err)
        })
    }

    const handlePick = () => {
        onLoad()
        axiosPrivate.post("interop/lockers_token/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res)
        }).catch(err => {
            //console.log(err)
        })
    }
    const onLoad = () => {
        //method for button times
        var group1 = document.getElementById("group3");
        group1.classList.remove('hide');
        group1.classList.add('show');
    }


    const onLoad2 = () => {
        //method for button times
        var group2 = document.getElementById("group3");
        group2.classList.remove('show');
        group2.classList.add('hide');

        var group1 = document.getElementById("group1");
        group1.classList.remove('show');
        group1.classList.add('hide');
    }


    const onLoad3 = () => {
        //method for button times
        var group1 = document.getElementById("group1");
        group1.classList.remove('hide');
        group1.classList.add('show');
    }
    const getProfileData = () => {
        axiosPrivate.get("user/user_profile/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setFullName(res.data[0].fullName)
            setEmail(res.data[0].email)
            setPhoneNumber(res.data[0].phoneNo)
            setAddress(res.data[0].address)
        }).catch(err => {
            //console.log(err)
        })
    }
    useEffect(() => {
        axiosPrivate.get("product/cart_items_list/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        )
            .then(res => {
                getProfileData();
                //console.log(res.data)
                setCartData(res.data)
            }).catch(err => {
                //console.error(err)
            })
    }, [bool]);
    // getting Item numbers
    let quantity = 0;
    for (let i = 0; i < cartData.length; i++) {
        quantity = quantity + cartData[i].quantity
    }
    // getting price of items
    let price = 0;
    for (let i = 0; i < cartData.length; i++) {
        price = price + (cartData[i].quantity * (parseFloat(cartData[i].item.price) + percentage(cartData[i].item.price)))
    }
    let ninjaTotal = price + Ninja;
    let pickTotal = price + Pick
    const RemoveFromCart = async (id) => {
        setLoaderId(id)
        await axiosPrivate.delete(`product/remove_from_cart/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            })
            .then(res => {
                //console.log(res)
                props.onChange(!props.checkCart)
                setBool(!bool)
                setLoaderId("")
            }).catch(err => {
                //console.error(err)
            })
    }
    const UpdateCart = async (id, qty, add) => {
        setLoaderId(id)
        let body;
        if (add == 1) {
            body = {
                quantity: qty + 1
            }
        } else {
            body = {
                quantity: qty - 1
            }
        }
        await axiosPrivate.patch(`product/update_cart_item/${id}/`, body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            })
            .then(res => {
                //console.log(res)
                setBool(!bool)
                setLoaderId("")
            }).catch(err => {
                //console.error(err)
            })
    }
    // Cart Items 
    const cartItem = cartData.map((obj, index) => {
        return (
            <div key={index}>
                <div className=" col-12 Products-container d-flex justify-content-between  ">
                    <div className="col-8 Product-name d-flex">
                        <div className=" img-wrap">
                            <Link to=""><img src={obj.item.image} alt='not found' /></Link>
                        </div>
                        <div className="content d-flex flex-column ms-2">
                            <Link to="" className="para-txt">{obj.item.name}
                                <br /> Training
                                Accessories
                                Single
                                SPRING</Link>
                            <small>No Brand,Color Family:Brown</small>
                        </div>
                    </div>
                    <div className=" col-2 Product-price text-center pt-2">
                        <p className="current-price">${parseFloat(obj.item.price) + percentage(obj.item.price)}</p>
                        <p className="operations del">
                            <i onClick={() => { RemoveFromCart(obj.id) }} className={loaderId ? "visually-hidden" : "fa-solid fa-trash-can"}></i>
                            {loaderId === obj.id && <Loader />}
                        </p>
                    </div>
                    <div className=" col-2 Product-quantity text-center">
                        <div className="Quantity-automation  ">
                            <span className="item-quantity-prefix ">Qty:</span>
                            <span className="item-quantity-value">{obj.quantity}</span>
                            <div className='mt-3 d-flex justify-content-center'>
                                <button onClick={() => UpdateCart(obj.id, obj.quantity, -1)} className="fa-solid fa-minus p-1" disabled={obj.quantity == 1}></button>
                                <button onClick={() => UpdateCart(obj.id, obj.quantity, 1)} className="fa-solid fa-plus ms-2 p-1"></button>
                            </div>
                        </div>
                    </div>
                </div><br />
            </div>
        )
    })
    const lockersData = lockers.map((obj, index) => {
        return (
            <div key={index}>
                <div className='d-flex'>
                    <div className=' d-flex align-items-center'>
                        <input value={obj.locker_station_id} onChange={(e) => { setLocker_station_id(e.target.value) }} type="radio" className="form-check-input mt-2 " name="flexRadioDefault"
                            id="flexRadioDefault1" />
                    </div>
                    <div className='col-10 ms-3'>
                        <p className='locker-name'><strong>Locker Name: </strong>{obj.locker_station_name}</p>
                        <p className='locker-name'><strong>Locker Description: </strong>{obj.locker_station_description}</p>

                        <div className="d-flex justify-content-between">
                            <p className='locker-name'><strong>Street Name: </strong>{obj.street_name}</p>
                            <p className='locker-name'><strong>Bulding Name: </strong>{obj.building_name}</p>
                            <p className='locker-name'><strong>Opening Hours: </strong>{obj.opening_hours}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    })
    if (deliveryOptions === "PICK") {
        Total = pickTotal;
    } else {
        Total = ninjaTotal
    }
    const redirect = async (e) => {
        e.preventDefault();
        const response = await axios.post('https://abc.nexquery.com/create-checkout-session/4/')
        //console.log('dsfasdf')
        // Navigate('https://abc.nexquery.com/create-checkout-session/4/')
        $("#sufi").submit();
        // if(response.status===200){
        //     window.location.href='https://abc.nexquery.com/create-checkout-session/4/'
        // }
    }
    const handleProceedToPay = async () => {
        if (!deliveryOptions || !paymentMethod) {
            alert('delivery option or payment mathod is not selected')
        }
        const body = {
            email: email,
            fullName: fullName,
            phoneNo: phoneNumber,
            paymentOptions: paymentMethod,//paymentOption,
            deliveryOptions: deliveryOptions,//DeliveryOption,
            ShippingTotalPrice: 600,//ShippingTotalPrice,
            shippingAddress: address,
            orderTotal: Total.toFixed(2),//orderTotal,
            postalCode: postalCode,
            lockerStationId: locker_station_id,
            orderStatus: "PROCESSING"
        }
        //console.log(body)
        axiosPrivate.post("product/checkout/", body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setUrlId(res.data?.id)
            sufiId = res.data.id
            //console.log(urlId, "id")
            props.onChange(!props.checkCart)
            setBool(!bool)
            $("#sufi").attr('action', 'https://abc.nexquery.com/create-checkout-session/' + res.data.id + '/');
            $("#sufi").submit()
            // window.location.href=`https://abc.nexquery.com/create-checkout-session/${res.data.id}/`
        }).catch(err => {
            //console.log(err)
        })
    }
    const goStripe = () => {
        //console.log(urlId, "id is here")

    }
    return (

        <>
            <TrackMyOrder />
            <div className="Main-page  ">
                <div className="container ">
                    {cartItem.length === 0 ?
                        <span>
                            <Alert variant="" style={{ color: "black", backgroundColor: "#f6ecd0" }} className='mt-4 '>
                                <h6 className="mb-0 p-3" style={{ fontWeight: "500" }}>
                                    No Items In Cart. Please navigate to <Link to={"/MProducts"} className="ALert-msg"><strong>products page</strong></Link>.
                                </h6>
                            </Alert>
                        </span>
                        : <>
                            <BreadcrumbComp />
                            <div className="row  gx-5">
                                <div className="col-lg-7 col-12 py-3 p-3  mt-1">
                                    <div className='row'>
                                        <div className=" col-12  mt-1">
                                            <div className='Product-box p-4'>
                                                {cartItem}
                                            </div>
                                        </div>
                                        <PaymentMethods
                                            handlePick={handlePick}
                                            onLoad2={onLoad2}
                                            handleLockers={handleLockers}
                                            loader={loader}
                                            lockersData={lockersData}
                                            setPaymentMethod={setPaymentMethod}
                                            setDeliveryOptions={setDeliveryOptions}
                                            setCountryCode={setCountryCode}
                                            setPostalCode={setPostalCode}
                                        />
                                    </div>
                                </div>
                                <ShippingAndBilling
                                    fullName={fullName}
                                    editFullname={editFullname}
                                    address={address}
                                    editAddress={editAddress}
                                    phoneNumber={phoneNumber}
                                    editPhone={editPhone}
                                    email={email}
                                    editEmail={editEmail}
                                    quantity={quantity}
                                    price={price}
                                    deliveryOptions={deliveryOptions}
                                    Ninja={Ninja}
                                    ninjaTotal={ninjaTotal}
                                    sufiId={sufiId}
                                    handleProceedToPay={handleProceedToPay}
                                    setEditFullname={setEditFullname}
                                    setEditAddress={setEditAddress}
                                    setEditEmail={setEditEmail}
                                    setEditPhone={setEditPhone}
                                    setFullName={setFullName}
                                    setAddress={setAddress}
                                    setEmail={setEmail}
                                    setPhoneNumber={setPhoneNumber}
                                    Pick={Pick}
                                    pickTotal={pickTotal}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default FormBody;