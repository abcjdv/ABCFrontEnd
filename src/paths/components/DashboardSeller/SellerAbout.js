import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import Form from 'react-bootstrap/Form';
import DashboardHeader from './DashboardHeader';
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import Cookies from 'universal-cookie';
import EditProfileModel from '../../../utils/models/EditProfileModel';
const cookies = new Cookies();
export default function SellerViewProduct() {
    const axiosPrivate = useAxiosPrivate();
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
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
        setImages(imageList);
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
    return (
        <>
            <DashboardHeader />
            <div className='container ' id='Seller-View'>
                <div className='row'>
                    <div className='Seller-main shadow  p-5 '>
                        <div className='col-lg-12'>

                            <div className='d-flex justify-content-between'>

                                <div className='d-flex'>
                                    <h2>Profile</h2>

                                </div>

                                <div className=''>
                                    <EditProfileModel />
                                </div>


                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-8 order-2'>
                                <div className='seller-form '>
                                    <form className=" row p-5">

                                        <div className="col-6 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Age</strong></label>
                                            <input
                                                type="text"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                name={age}
                                                value={age}
                                                // onChange={(e) => setAge(e.target.value)}
                                                disabled
                                            />
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Race</strong></label>
                                            <input
                                                type="text"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                name={race}
                                                value={race}
                                                // onChange={(e) => setRace(e.target.value)}
                                                disabled
                                            />
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>BodyType</strong></label>
                                            <input
                                                type="text"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                name={bodyType}
                                                value={bodyType}
                                                // onChange={(e) => setBodyType(e.target.value)}
                                                disabled
                                            />
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Gender</strong></label>
                                            <input
                                                type="text"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                name={gender}
                                                value={gender}
                                                // onChange={(e) => setGender(e.target.value)}
                                                disabled
                                            />
                                        </div>


                                        <div className="col-6 mb-3">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Country</strong></label>
                                            <input
                                                type="text"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                name={country}
                                                value={country}
                                                // onChange={(e) => setCountry(e.target.value)}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Birthday</strong></label>
                                            <input
                                                type="date"
                                                className="form-control form_clr"
                                                id="inputEmail4"
                                                value={dateOfBirth}
                                                name={dateOfBirth}
                                                // onChange={(e) => setDateOfBirth(e.target.value)}
                                                disabled
                                            />
                                        </div>

                                        {/* <h5 style={{marginBottom:4}}>About Me</h5> */}
                                        {/* <p><em>Personalize your store page by telling customers a little about yourself.</em></p> */}


                                        <div className="col-12 ">
                                            <label htmlFor="inputEmail4" className="form-label"><strong>Bio</strong></label>
                                            <Form.Group
                                                className=""
                                                controlId="Form.ControlTextarea1"
                                                name={bio}
                                                id="message" onChange={(e) => setBio(e.target.value)}
                                                required>
                                                <Form.Control as="textarea" value={bio} rows={3} placeholder="Write your messeage here..." disabled />
                                            </Form.Group>
                                        </div>


                                    </form>
                                </div>
                            </div>

                            <div className='col-lg-4 order-1  mb-lg-0 mb-4'>
                                {/* <div className='pic-section p-5'> */}
                                {/* <h3>Add Image</h3> */}
                                <div className="Seller-profilepic-about mx-auto mt-5">
                                    <ImageUploading
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps
                                        }) => (
                                            // write your building UI
                                            <div className="upload__image-wrapper-about">


                                                <button onClick={onImageUpload}
                                                    style={isDragging ? { color: "red" } : null}
                                                    {...dragProps}
                                                >
                                                    <div className="image-item">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <i className={imageList[0]?.data_url ? "bi bi-person-circle hide" : "bi bi-person-circle show"} id="btn-pic"></i>
                                                </button>


                                            </div>
                                        )}
                                    </ImageUploading>

                                </div>
                                <div className="col-12 text-center">
                                    <Link to={''} className=" mail-size">{userName}<i className="far fa-check-circle mt-4"></i></Link>
                                    <div className="d-flex  justify-content-center   mt-1">
                                        <i className="fa-solid fa-star mt-1"></i>
                                        <i className="fa-solid fa-star mt-1"></i>
                                        <i className="fa-solid fa-star mt-1"></i>
                                        <i className="fa-solid fa-star mt-1"></i>
                                        <i className="fa-solid fa-star mt-1 me-1"></i>
                                        <span>(22)</span>
                                    </div>

                                </div>

                                {/* </div> */}
                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </>
    );
}

