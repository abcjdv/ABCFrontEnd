import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import Cookies from "universal-cookie";
import useAxiosPrivate from '../../components/logincomponents/hooks/useAxiosPrivate'
import axios from '../../../api/axios';
import options from '../productcomponents/options'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DashboardHeader from './DashboardHeader';
const cookies = new Cookies();
export default function SellerViewProduct() {
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState();
    const [bodyType, setBodyType] = useState();
    const [category, setCategory] = useState();
    const [country, setCountry] = useState();
    const [race, setRace] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState("");
    const [age, setAge] = useState();
    const [description, setDescription] = useState();
    const [ageOptions, setAgeOptions] = useState(options.age);
    const [raceOptions, setRaceOptions] = useState(options.race);
    const [sizeOptions, setSizeOptions] = useState(options.size);
    const [selectedImage, setSelectedImage] = useState(null);
    const [countryOPAPI, setCountryOPAPI] = useState([]);
    const [categoryOPAPI, setCategoryOPAPI] = useState([])
    const axiosPrivate = useAxiosPrivate();
    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState(false)
    const maxNumber = 69;
    const onLoad = () => {
        //method for button times
        var group1 = document.getElementById("group3");
        group1.classList.remove('hide');
    }
    const HandleSubmit = () => {
        //console.log(race,"RACE")
        axios.post('seller/add_new_product/',
            {
                image: image,
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

    const onChange = (imageList, addUpdateIndex) => {
        // data htmlFor submit
        //console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    useEffect(() => {



    }, []);
    const onload = () => {
        setImageShow(prev => !prev)
    }



    //  myHandler =()=>{
    //     //console.log("yess")
    // }
    return (
        <>
            <DashboardHeader />
            <div className='container ' id='Seller-View'>
                <div className='row'>
                    <div className='Seller-main shadow  p-5 '>
                        <div className='col-lg-12'>

                            <div className='d-flex justify-content-between Add-product'>

                                <div className='d-flex'>
                                    <h2 id="add-product">Add Product</h2>

                                </div>

                                <Breadcrumb className='d-flex align-items-center'>
                                    <Breadcrumb.Item href="/SellerPro">
                                        Products
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active className='Bread-product'>Add Product</Breadcrumb.Item>
                                </Breadcrumb>

                                {/* <div className=''>
                                    <Link to={"/SellerPro"} className="btn btn-view">View Product</Link>
                                </div> */}


                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8 order-2'>
                                <div className='seller-form '>
                                    <div className=" row p-lg-5  p-md-5 p-0">

                                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Product Name</strong></label>
                                            <input
                                                type="email"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                value={productName}
                                                name={productName}
                                                onChange={(e) => setProductName(e.target.value)} />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Price</strong></label>
                                            <input
                                                type="email"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                value={price}
                                                name={price}
                                                onChange={(e) => setPrice(e.target.value)} />
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
                                            <label htmlFor="inputState" className="form-label"><strong>Category</strong></label>
                                            <select
                                                id="inputState"
                                                className="form-select form_clr category-field mt-1"
                                                value={category}
                                                name={category}
                                                onChange={(e) => setCategory(e.target.value)}

                                            >
                                                <option value="" className="dropdown-list" style={{ backgroundColor: "#060c22" }}>Category
                                                </option>
                                                {categoryOptions.map(
                                                    (obj) => (
                                                        <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
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

                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
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


                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
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

                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
                                            <label htmlFor="inputState" className="form-label"><strong>Gender</strong></label>
                                            <select
                                                id="inputState"
                                                className="form-select form_clr category-field mt-1"
                                                value={gender}
                                                name={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <option selected>Choose...</option>
                                                <option value="MALE">Male</option>
                                                <option value="FEMALE">Female</option>
                                            </select>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
                                            <label htmlFor="inputState" className="form-label"><strong>Product Country</strong></label>
                                            <select
                                                id="inputState"
                                                className="form-select form_clr category-field mt-1"
                                                value={country}
                                                name={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                            >
                                                <option value="" className="dropdown-list" style={{ backgroundColor: "#060c22" }}>Country
                                                </option>
                                                {countryOptions.map(
                                                    (obj) => (
                                                        <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Description</strong></label>
                                            <textarea
                                                className="form-control form_clr"
                                                id="exampleFormControlTextarea1"
                                                rows="5"></textarea>

                                        </div>

                                        <div className="d-flex mt-3">
                                            <Link className="btn btn-outline-secondary  me-2" to id="btn-btn">Save</Link>
                                            <button className="btn btn-save" onClick={HandleSubmit}>Publish</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 order-1  mb-lg-0 my-5 d-flex justify-content-center'>
                                <div className=" seller-img-area">
                                    {/* <div className="seller-profile-pic"> */}
                                    <h3 className='text-center'>Add Image</h3>
                                    <div className="seller-profile-img1">
                                        {
                                            // !images &&
                                            <div className='position-relative'>
                                                <button className='upload-icon-btn'>
                                                    <i className="bi bi-images" id="btn-pic"></i>
                                                </button>
                                            </div>
                                        }

                                        <img src={images} alt="" id="seller-preview" />

                                        <div className=" seller-profilepic__content1 " id="group3" onClick={onLoad}>

                                            <label htmlFor="file-input">
                                                <span className="seller-profilepic__icon d-flex flex-column text-center position-absolute " >
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
                                    <p className='text-center mt-3'>Drop your files here</p>

                                    {/* </div> */}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </>
    );
}
