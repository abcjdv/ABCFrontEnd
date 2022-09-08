import { useEffect, useState } from "react";
// import "./UserProfile.css";
import axios from "../../../api/axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
const cookies = new Cookies();
const UserProfile = () => {
    const [edit, setEdit] = useState(true);
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [image, setImage] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [imageList, setImageList] = useState();
    const onLoad = () => {
        //method for button times
        var group1 = document.getElementById("group3");
        group1.classList.remove('hide');
    }
    useEffect(() => {
        axios.get("user/user_profile/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setFullName(res.data[0].fullName)
            setUserName(res.data[0].userName)
            setEmail(res.data[0].email)
            setPhoneNumber(res.data[0].phoneNo)
            setImage(res.data[0].image)
            setAddress(res.data[0].address)
            setDateOfBirth(res.data[0].dateOfBirth)
            setGender(res.data[0].gender)
        }).catch(err => {
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


    }, [edit])
    const HandleSave = async () => {
        const imageFile = new FormData();
        imageFile.append("image", image)
        const body = {
            image: imageList,
            userName: userName,
            fullName: fullName,
            phoneNo: phoneNumber,
            address: address,
            dateOfBirth: dateOfBirth,
        }
        await axios.patch("user/update_user/", body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }).then(res => {
                alert('Updated Successfully')
                setEdit(!edit)
            }).catch(err => {
            })
    }
    return (
        <>
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
            <div className="Main-page  ">
                <div className="container">
                    <div className="row mt-lg-5 mt-5">
                        <div className="col-lg-8 col-11 mx-auto ">
                            <div className=" row p-5  Personal_detail">
                                <h2 className="mb-3">Account</h2>
                                <div className="d-flex justify-content-between position-relative">

                                    <div className="form-text col-lg-8 col-md-8 col-6 mb-3 me-2 text-wrap">

                                        <h6 id="Pro" className="">Personal Details</h6>
                                        This information will be displayed publicaly so be careful what you share
                                    </div>


                                    <div className=" img-area position-absolute">
                                        <div className="profile-pic position-relative">
                                            {
                                                !image &&
                                                <div className="">
                                                    <span className=" d-flex flex-column text-center  upload-container" >
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
                                                            setImageList(event.target.files[0]);
                                                        }}
                                                        disabled={edit ? true : false} />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12  mb-3">

                                    <label htmlFor="inputEmail4" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control input_bar"
                                        id="inputEmail4"
                                        value={fullName}
                                        name={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        disabled={edit} />

                                </div>

                                <div className="col-lg-6 col-md-6 col-12  mb-3">

                                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control input_bar "
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        name={userName}
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        disabled={edit} />

                                </div>

                                <div className="col-lg-6 col-md-6 col-12  mb-3">

                                    <label htmlFor="inputEmail4" className="form-label"><strong>Gender</strong></label>
                                    <select
                                        value={gender}
                                        id="inputState"
                                        className="form-select form_clr category-field"
                                        onChange={(e) => {
                                            { setGender(e.target.value) }
                                        }}

                                        disabled
                                    >
                                        <option >Choose...</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                    </select>

                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mb-3">
                                    <label htmlFor="inputEmail4" className="form-label">Birthday</label>
                                    <input
                                        type="date"
                                        className="form-control input_bar"
                                        id="inputEmail4"
                                        value={dateOfBirth}
                                        name={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        disabled={edit}
                                    />
                                </div>



                                <hr className="my-4" />

                                <div>
                                    <h6>Contact Details</h6>

                                    <div className="form-text mb-3">
                                        This information will be displayed publicly so be careful what you share
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mb-3">
                                    <label htmlFor="inputEmail4" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control input_bar"
                                        id="inputEmail4"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        disabled
                                    />
                                </div>



                                <div className="col-lg-6 col-md-6 col-12 mb-3">
                                    <label htmlFor="inputEmail4" className="form-label">Phone Number</label>
                                    <input
                                        type="phone"
                                        className="form-control input_bar"
                                        id="inputEmail4"
                                        value={phoneNumber}
                                        name={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        disabled={edit} />
                                </div>

                                <div className="col-12  mb-3">

                                    <label htmlFor="inputEmail4" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control input_bar "
                                        aria-label="Address"
                                        aria-describedby="basic-addon1"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        disabled={edit} />

                                </div>

                                {/* <div className="form-text mb-3">
                                    This account was created on January 5,2017,8:35PM
                                </div> */}
                                <hr className="my-4" />
                                <div className="d-flex justify-content-end ">
                                    {edit
                                        ? <button onClick={() => setEdit(prev => !prev)} className="btn btn-save" >Edit</button>
                                        : <><button className="btn btn-outline-secondary  me-2" onClick={() => setEdit(prev => !prev)} id="btn-btn">Cancel</button>
                                            <button onClick={HandleSave} className="btn btn-save" >Save</button></>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UserProfile;