import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import HeaderProducts from "../productcomponents/Headerproducts"
import ReactReadMoreReadLess from "react-read-more-read-less";
import Cookies from "universal-cookie";
import "./Dashboard.css"
import "../productcomponents/product.css";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
const cookies = new Cookies();
const SellerProfilePage = () => {
    const axiosPrivate = useAxiosPrivate();
    const [productList, setProductList] = useState();
    const [age, setAge] = useState("");
    const [bodyType, setBodyType] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [race, setRace] = useState("");
    const [bio, setBio] = useState();
    const [image, setImage] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [userName, setUserName] = useState();
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log(imageList, addUpdateIndex);
        setImage(imageList);
    };
    useEffect(() => {
        axiosPrivate.get("seller/seller_profile/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setUserName(res.data[0].userName)
            setAge(res.data[0].age)
            setBodyType(res.data[0].bodyType)
            setImage(res.data[0].image)
            setRace(res.data[0].race)
            setDateOfBirth(res.data[0].dateOfBirth)
            setBio(res.data[0].sellerDescription)
            setGender(res.data[0].gender)
            setCountry(res.data[0].country)
            //console.log(res)
        }).catch(err => {
            //console.log(err)
        })
    }, [])
    useEffect(() => {
        axiosPrivate.get("seller/seller_products_listing/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "product list")
            setProductList(res.data)
        }).catch(err => {
            //console.log(err)
        })
    }, [])
    const filterData = productList?.map((g, index) => {
        return (
            <div key={g.id} className="col-lg-3 col-md-6 mb-4">
                <div className="card hotel1">
                    <div className="hotel-img">
                        <div className="Product-items-pic">
                            <Link to={`/description/${g.id}`}><img width="" height="" src={g.image} alt="Hotel 1" className="" /></Link>
                        </div>
                    </div>
                    <h3>{g.name}</h3>
                    <h5 className="mb-3">{g.price}</h5>
                    {/* <p>{g.description}</p> */}
                </div>
            </div >
        )
    })


    return (
        <>
            <HeaderProducts />

            <Dropdown className='track-order-drop1 pt-lg-0 pt-md-4 pt-5 t-order-track'>
                <Dropdown.Toggle variant="" id="dropdown-basic" className="t-order-btn">

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
            <div className="container-fluid Seller-profile-head">
                {/* <Dropdown className='track-order-drop1 pt-lg-0 pt-md-4 pt-5 t-order-track'>
                    <Dropdown.Toggle variant="" id="dropdown-basic" className="t-order-btn">

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
                                        <input type="text" placeholder='eg.123456789' class="form-control" id="inputPassword4" />
                                    </div>
                                    <Button className='' id="btn-btn-submit"><i class="fa-solid fa-angle-right"></i></Button>

                                </div>

                            </form>
                        </div>

                    </Dropdown.Menu>
                </Dropdown> */}
                <div className="row d-flex justify-content-center">

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
                        <div className="row d-flex align-items-center p-3 ">
                            {/* <div className="col-lg-8  mx-auto">
                                <div className="row "> */}
                            <div className="col-lg-4  col-5 text-center">
                                <div >
                                    <img src={image} style={{
                                        width: "130px",
                                        height: "130px",
                                        borderRadius: "50%",
                                        objectFit:'cover',
                                    objectPosition:'center'}}
                                        />
                                </div>
                            </div>

                            <div className="col-lg-8 col-7">
                                <Link to={''} className=" mail-size">@xoxocutiegirl <i className="far fa-check-circle mt-3"></i></Link>
                                <div className="d-flex mb-2">
                                    <i class="fa-solid fa-star mt-1"></i>
                                    <i class="fa-solid fa-star mt-1"></i>
                                    <i class="fa-solid fa-star mt-1"></i>
                                    <i class="fa-solid fa-star mt-1"></i>
                                    <i class="fa-solid fa-star mt-1"></i>
                                    <span className="ms-1">(22)</span>
                                </div>
                                <div className="d-flex ">
                                    <span className="about-me pt-2"><ReactReadMoreReadLess
                                        charLimit={50}
                                        readMoreText={"Read more ▼"}
                                        readLessText={"Read less ▲"}
                                        readMoreClassName="read-more-less--more"
                                        readLessClassName="read-more-less--less"
                                    >
                                        I identify and develop opportunities. I'm a nice fun and friendly person,
                                        I'm honest and punctual, I work well in a team but also on my own as I
                                        like to set myself goals which I will achieve, I have good listening and
                                        communication skills. I have a creative mind and am always up for new
                                        challenges </ReactReadMoreReadLess></span>
                                </div>
                            </div>
                            {/* </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-9  mt-lg-0 mt-md-0 mt-3 text-start ">
                        <div className="Seller-info-section py-5 px-lg-5 px-md-2 d-flex justify-content-center">

                            <div id="resp-table" className="p-2 px-3">
                                <div id="resp-table-body">
                                    <div class="resp-table-row">
                                        <div class="table-body-cell">
                                            Age
                                        </div>
                                        <div class="table-body-cell">
                                            : &nbsp;{age}
                                        </div>

                                    </div>
                                    <div class="resp-table-row">
                                        <div class="table-body-cell">
                                            Race
                                        </div>
                                        <div class="table-body-cell">
                                            : &nbsp;{race}
                                        </div>
                                    </div>
                                    <div class="resp-table-row">
                                        <div class="table-body-cell">
                                            Body Type
                                        </div>
                                        <div class="table-body-cell">
                                            : &nbsp;{bodyType}
                                        </div>
                                    </div>
                                    <div class="resp-table-row">
                                        <div class="table-body-cell">
                                            Gender
                                        </div>
                                        <div class="table-body-cell">
                                            : &nbsp;{gender}
                                        </div>
                                    </div>
                                    <div class="resp-table-row">
                                        <div class="table-body-cell">
                                            Country
                                        </div>
                                        <div class="table-body-cell">
                                            : &nbsp;{country}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <div className="col-lg-3"></div> */}
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {filterData}
                </div>
            </div>
        </>
    )
}
export default SellerProfilePage;