import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Dashboard.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import Cookies from "universal-cookie";
import useAxiosPrivate from '../../components/logincomponents/hooks/useAxiosPrivate'
import axios from '../../../api/axios';
import options from '../productcomponents/options'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';

import { event } from 'jquery';

export default function SellerEditProduct(props) {
    const cookies = new Cookies();
    const [image, setImage] = useState();
    const [productName, setProductName] = useState("");
    const [bodyType, setBodyType] = useState();
    const [category, setCategory] = useState();
    const [country, setCountry] = useState();
    const [race, setRace] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState("");
    const [age, setAge] = useState();
    const [id, setId] = useState();
    const [description, setDescription] = useState();
    const [ageOptions, setAgeOptions] = useState(options.age);
    const [raceOptions, setRaceOptions] = useState(options.race);
    const [sizeOptions, setSizeOptions] = useState(options.size);
    const [selectedImage, setSelectedImage] = useState(null);
    const [countryOPAPI, setCountryOPAPI] = useState([]);
    const [categoryOPAPI, setCategoryOPAPI] = useState([])
    const [productList, setProductList] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const [images, setImages] = useState();
    const [quantity, setQuantity] = useState();
    const onLoad = () => {
        //method for button times
        var group1 = document.getElementById("group3");
        group1.classList.remove('hide');
    }
    useEffect(() => {



        var fileTag = document.getElementById("file-input"),
            preview = document.getElementById("seller-preview");

        fileTag.addEventListener("change", function () {
            changeImage(this);
        });

        function changeImage(input) {
            var reader;

            if (input.files && input.files[0]) {
                reader = new FileReader();

                reader.onload = function (e) {
                    preview.setAttribute('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

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
            setProductName(res.data[props.productId].name)
            setAge(res.data[props.productId].age)
            setBodyType(res.data[props.productId].bodyType)
            setQuantity(res.data[props.productId].quantity)
            setPrice(res.data[props.productId].price)
            setRace(res.data[props.productId].race)
            setImages(res.data[props.productId].image)
            setDescription(res.data[props.productId].description)
            setId(res.data[props.productId].id)
            setGender(res.data[props.productId].gender)
            //console.log(res.data[props.productId].image, 'image')
            // getData();
        }).catch(err => {
            //console.log(err)
        })
    }, [])

    // const getData = () => {
    //     productList.map(el => {
    //         if (el?.id == props.productId) {
    //             //console.log("agai j")
    //             setProductName(el.name)
    //             setAge(el.age)
    //             setBodyType(el.bodyType)
    //             setGender(el.gender)
    //             setPrice(el.price)
    //             setRace(el.race)
    //             setImages(el.image)
    //         }
    //     })
    // }
    const HandleSubmit = () => {

        axios.patch(`seller/update_product/${id}/`,
            {
                image: images,
                category: category,
                country: country,
                race: race,
                bodyType: bodyType,
                status: "DRAFT",
                age: age,
                gender: gender,
                name: productName,
                price: price,
                description: "aamijetumhar",
                quantity: 41
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "add seller product")
        }).catch(err => {
            //console.log(err)
        })
    }
    useEffect(() => {
        axiosPrivate.get("product_country_list/",
        )
            .then(res => {
                //console.log(res.data)
                setCountryOPAPI(res.data)
            }).catch(err => {
                //console.log(err)
            })
    }, [])
    useEffect(() => {
        axiosPrivate.get("product_category_list/",
        )
            .then(res => {
                //console.log(res.data)
                setCategoryOPAPI(res.data)
            }).catch(err => {
                //console.log(err)
            })
    }, [])
    const countryOptions = countryOPAPI.map((obj) => {
        return {
            label: obj.country_name,
            value: obj.id
        }
    });
    const categoryOptions = categoryOPAPI.map((obj) => {
        return {
            label: obj.name,
            value: obj.id
        }
    });


    const onChange = (event) => {
        //console.log("hogai")
        // setImages(event.target.files[0]);
    };

    return (
        <>
            {productList &&
                <div className='container ' id='Seller-View'>
                    <div className='row'>
                        <div className='Seller-main shadow  p-0 '>
                            {/* <div className='col-lg-12'> */}

                            {/* <div className='d-flex justify-content-between'> */}

                            <div className='d-flex'>
                                <h2>Edit Product</h2>
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                            <div className='row'>
                                <div className='col-lg-12 mx-auto '>
                                    <div className='seller-form '>
                                        <div className=" seller-img-area position-absolute">
                                            <div className="seller-profile-pic position-relative">

                                                <div className="seller-profile-img">
                                                    {
                                                        !images &&
                                                        <div className="">
                                                            <span className=" d-flex flex-column text-center  seller-upload-container" >
                                                                <i className="bi bi-images"></i>

                                                                {/* <small>Upload Photo</small> */}
                                                            </span>
                                                        </div>
                                                    }
                                                    <img src={images} alt="" id="seller-preview" />

                                                    <div className=" seller-profilepic__content " id="group3" onClick={onLoad}>

                                                        <label htmlFor="file-input">
                                                            <span className="seller-profilepic__icon d-flex flex-column text-center " >
                                                                <i className="fas fa-camera"></i>

                                                                <small>Upload Photo</small>
                                                            </span>
                                                        </label>

                                                        <input id="file-input" type="file"
                                                            onChange={(event) => {
                                                                //console.log(event.target.files[0]);
                                                                setImage(event.target.files[0]);
                                                            }} />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        {/* <h3 className='text-center'>Add Image</h3> */}
                                        {/* <div className="Seller-profilepic mx-auto mb-3 mt-5">
                                            <div className="upload__image-wrapper">
                                                <div className="image-item">
                                                    {images && <img src={images} alt="image" />}
                                                    <input id="file-input" type="file"
                                                        onChange={(event) => {
                                                            setImages(event.target.files[0]);
                                                        }} />
                                                    {//console.log(images)}
                                                </div>
                                                &nbsp;
                                            </div>
                                        </div> */}
                                        <div className='edit-product-form'>
                                            <div className="row p-lg-5 p-md-5 p-0">

                                                <div className="col-lg-6 col-12 mb-3">
                                                    <label htmlFor="inputEmail4" className="form-label"><strong>Product Name</strong></label>
                                                    <input
                                                        type="email"
                                                        className="form-control form_clr"
                                                        id="inputEmail4"
                                                        value={productName}
                                                        name={productName}
                                                        onChange={(e) => setProductName(e.target.value)} />
                                                </div>

                                                <div className="col-lg-6 col-12 mb-3">
                                                    <label htmlFor="inputEmail4" className="form-label"><strong>Price</strong></label>
                                                    <input
                                                        type="email"
                                                        className="form-control form_clr"
                                                        id="inputEmail4"
                                                        value={price}
                                                        name={price}
                                                        onChange={(e) => setPrice(e.target.value)} />
                                                </div>

                                                <div className='col-lg-6 col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Body Type</strong></label>
                                                    <select
                                                        id="inputState"
                                                        className="form-select form_clr category-field mt-1"
                                                        value={bodyType}
                                                        name={bodyType}
                                                        onChange={(e) => setBodyType(e.target.value)}
                                                    >
                                                        {sizeOptions.map(
                                                            (obj) => (
                                                                <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>

                                                <div className='col-lg-6 col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Country</strong></label>
                                                    <select
                                                        id="inputState"
                                                        className="form-select form_clr category-field mt-1"
                                                        value={country}
                                                        name={country}
                                                        onChange={(e) => setBodyType(e.target.value)}
                                                    >
                                                        {countryOPAPI.map(
                                                            (obj) => (
                                                                <option value={obj.id} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.country_name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Category</strong></label>
                                                    <select
                                                        id="inputState"
                                                        className="form-select form_clr category-field mt-1"
                                                        value={category}
                                                        name={category}
                                                        onChange={(e) => setBodyType(e.target.value)}
                                                    >
                                                        {categoryOPAPI.map(
                                                            (obj) => (
                                                                <option value={obj.id} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Race</strong></label>
                                                    <select
                                                        id="inputState"
                                                        className="form-select form_clr category-field mt-1"
                                                        value={race}
                                                        name={race}
                                                        onChange={(e) => setRace(e.target.value)}
                                                    >
                                                        {raceOptions.map(
                                                            (obj) => (
                                                                <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>


                                                <div className='col-lg-6 col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Age</strong></label>
                                                    <select
                                                        id="inputState"
                                                        className="form-select form_clr category-field mt-1"
                                                        value={age}
                                                        name={age}
                                                        onChange={(e) => setAge(e.target.value)}
                                                    >
                                                        {ageOptions.map(
                                                            (obj, index) => (
                                                                <option key={index} value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>

                                                <div className="col-lg-6 col-12 mb-3">
                                                    <label htmlFor="inputEmail4" className="form-label">Gender</label>

                                                    <select value={gender} id="inputState" className="form-select form_clr category-field mt-1">
                                                        <option value="MALE">Male</option>
                                                        <option value="FEMALE">Female</option>
                                                    </select>
                                                </div>

                                                <div className='col-12 mb-3'>
                                                    <label htmlFor="inputState" className="form-label"><strong>Quantity</strong></label>
                                                    <input
                                                        type="number"
                                                        id="inputState"
                                                        className="form-control form_clr category-field mt-1"
                                                        value={quantity}
                                                        name={quantity}
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                    />
                                                </div>
                                                <div className='col-12 mb-3'>
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Description</strong></label>
                                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1"
                                                        id="message" onChange={(e) => setDescription(e.target.value)}
                                                        required>
                                                        <Form.Control as="textarea" className='form_clr' value={description} name={description} rows={3} placeholder="Add Product description here..." />
                                                    </Form.Group>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <Link className="btn btn-outline-secondary  me-2" to id="btn-btn">Save</Link>
                                                    <button className="btn btn-save" onClick={HandleSubmit}>Publish</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            }
        </>
    );
}
