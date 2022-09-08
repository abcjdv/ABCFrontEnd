import { useEffect, useState } from "react";
// import "./UserProfile.css";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate";
import Cookies from "universal-cookie";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import optionsData from "../productcomponents/options";
const cookies = new Cookies();
const SellerEditProfile = (props) => {
    const axiosPrivate = useAxiosPrivate();
    const ageOptions = (optionsData.age);
    const sizeOptions = (optionsData.size);
    const raceOptions = (optionsData.race);
    const [countryOPAPI, setCountryOPAPI] = useState([]);
    const [categoryOPAPI, setCategoryOPAPI] = useState([])
    const [age, setAge] = useState("");
    const [bodyType, setBodyType] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [race, setRace] = useState("");
    const [bio, setBio] = useState();
    const [image, setImage] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const Navigate=useNavigate();
    const onLoad = () => {
        //method for button times
        var group1 = document.getElementById("group3");
        group1.classList.remove('hide');
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
            setAge(res.data[0].age)
            setBodyType(res.data[0].bodyType)
            setCountry(res.data[0].country)
            setGender(res.data[0].gender)
            setRace(res.data[0].race)
            setBio(res.data[0].sellerDescription)
            setImage(res.data[0].image)
            setDateOfBirth(res.data[0].dateOfBirth)
            //console.log(res)
        }).catch(err => {
            //console.log(err)
        })


        var fileTag = document.getElementById("file-input"),
            preview = document.getElementById("preview");

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


    }, [])
    // const body = {
    //     image: image,
    //     age: age,
    //     bodyType: bodyType,
    //     gender: gender,
    //     race: race,
    //     country: country,
    //     bio:bio
    // }
    // //console.log(body,"image")
    const HandleCancel=()=>{
        props.onChange(!props.show)
    }
    const HandleSave = async () => {
        const imageFile = new FormData();
        imageFile.append("image", image)
        const body = {
            age: age,
            bodyType: bodyType,
            gender: gender,
            race: race,
            country: country,
            sellerDescription: bio
        }
        await axiosPrivate.patch("seller/update_seller_profile/", body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }).then(res => {
                //console.log(res)
                props.onChange(!props.show)
            }).catch(err => {
                //console.log(err)
            })
    }
    return (
        <div className="Seller-Main-page ">

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-10 col-11 mx-auto ">
                        <div className=" row  Seller-Personal_detail">
                            <h2 className="mb-3">Account</h2>
                            <div className="d-flex justify-content-between position-relative">

                                <div className="form-text col-lg-8 col-md-8 col-6 mb-3 me-2 text-wrap">

                                    <h6 id="Seller-Pro" className="">Profile</h6>
                                    This information will be displayed publicaly so be careful what you share
                                </div>


                                <div className=" img-area position-absolute">
                                    <div className="profile-pic position-relative">
                                        {
                                            !image &&
                                            <div className="">
                                                <span className=" d-flex flex-column text-center  Upload-container" >
                                                    <i className="fas fa-camera"></i>

                                                    <small>Upload Photo</small>
                                                </span>
                                            </div>
                                        }
                                        <div className="profilepic">
                                            <img src={image} alt="" id="preview" />

                                            <div className=" profilepic__content " id="group3" onClick={onLoad}>

                                                <label htmlFor="file-input">
                                                    <span className="profilepic__icon d-flex flex-column text-center " >
                                                        <i className="fas fa-camera"></i>

                                                        <small>Upload Photo</small>
                                                    </span>
                                                </label>

                                                <input id="file-input" type="file"
                                                    onChange={(event) => {
                                                        setImage(event.target.files[0]);
                                                    }} />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4  col-6  mb-3">

                                <label htmlFor="age" className="form-label"><strong>Age</strong></label>
                                <input
                                    type="number"
                                    className="form-control input_bar"
                                    id="inputEmail4"
                                    value={age}
                                    name={age}
                                    onChange={(e) => setAge(e.target.value)} />

                            </div>

                            <div className="col-lg-4 col-6  mb-3">

                                <label htmlFor="inputEmail4" className="form-label"><strong>BodyType</strong></label>
                                <select
                                    value={bodyType}
                                    className="form-select form_clr category-field"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onChange={(e) => {
                                        { setBodyType(e.target.value) }
                                    }}>
                                    {sizeOptions.map(
                                        (obj) => (
                                            <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                            </option>
                                        )
                                    )}
                                </select>

                            </div>



                            <div className="col-lg-4 col-12  mb-3">

                                <label htmlFor="inputEmail4" className="form-label"><strong>Gender</strong></label>
                                <select
                                    value={gender}
                                    id="inputState"
                                    className="form-select form_clr category-field"
                                    onChange={(e) => {
                                        { setGender(e.target.value) }
                                    }}
                                >
                                    <option selected>Choose...</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>

                            </div>

                            <hr className="my-4" />

                            <div>
                                <h6>Personal information</h6>

                                <div className="form-text mb-3">
                                    This information will be displayed publicly so be careful what you share
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-3">
                                <label htmlFor="inputEmail4" className="form-label"><strong>Race</strong></label>
                                <select
                                    value={race}
                                    className="form-select form_clr category-field "
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onChange={(e) => {
                                        { setRace(e.target.value) }
                                    }}>
                                    {raceOptions.map(
                                        (obj) => (
                                            <option value={obj.value} className="dropdown-list" style={{ backgroundColor: "#060c22" }}>{obj.label}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-3">
                                <label htmlFor="inputEmail4" className="form-label"><strong>Country</strong></label>
                                <select
                                    type="text"
                                    value={country}
                                    className="form-select form_clr category-field "
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onChange={(e) => {
                                        { setCountry(e.target.value) }
                                    }}
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


                            <div className="col-lg-4 col-md-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label"><strong>Birthday</strong></label>
                                <input
                                    type="date"
                                    className="form-control input_bar"
                                    id="inputEmail4"
                                    value={dateOfBirth}
                                    name={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                            </div>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Description</strong></label>
                            <Form.Group 
                            className=""
                            controlId="exampleForm.ControlTextarea1"
                             name={bio}
                                id="message" onChange={(e) => setBio(e.target.value)}
                                required>
                                <Form.Control as="textarea" value={bio} className="form_clr" rows={3} placeholder="Write your messeage here..." />
                            </Form.Group>
                            {/* <div className="col-lg-6 col-md-6 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Gender</label>

                                <select id="inputState" className="form-select Pick_input mt-1">
                                    <option selected>Choose...</option>
                                    <option value="gsg">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div> */}

                            {/* <div className="col-lg-4 col-md-4 mb-3">
                                <label for="inputEmail4" className="form-label">Country</label>
                                <input type="text" className="form-control input_bar" id="inputEmail4"
                                    onChange={(e) => setCountry(e.target.value)} />
                            </div> */}



                            <div className="form-text mb-3">
                                This account was created on January 5,2017,8:35PM
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-end ">
                                <button onClick={HandleCancel} className="btn btn-outline-secondary  me-2" id="btn-btn">Cancel</button>
                                <button onClick={HandleSave} className="btn btn-save" >Save</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default SellerEditProfile;