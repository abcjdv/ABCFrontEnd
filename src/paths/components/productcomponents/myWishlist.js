import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Headerproducts from './Headerproducts';
import "./product.css";
import useAxiosPrivate from '../logincomponents/hooks/useAxiosPrivate';
import Cookies from 'universal-cookie';
import Loader from "../../../utils/loader";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from 'react-bootstrap';
const cookies = new Cookies();
export default function MyWishlist() {
    const [loaderId, setLoaderId] = useState()
    const [cartItem, setCartItem] = useState();
    const [checkCart, setCheckCart] = useState(false);
    const [readId, setReadId] = useState()
    const axiosPrivate = useAxiosPrivate();
    const [products, setProducts] = useState();
    const [favourites, setFavourites] = useState();
    const [isFavourite, setIsFavourite] = useState(false);
    const [cartLength, setCartLength] = useState();
    const [loader, setLoader] = useState(false)
    const [readMore, setReadMore] = useState(false)
    useEffect(() => {
        axiosPrivate.get("/product_list/",
        )
            .then(res => {
                setProducts(res.data)
            }).catch(err => {
                //console.log(err)
            })
    }, [])
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
                setCartItem(res.data)
                setCartLength(res.data?.length)
            }).catch(err => {
                //console.error(err)
            })
    }, [checkCart])
    useEffect(() => {
        axiosPrivate.get("product/favourites_list/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            setFavourites(res.data)
        }).catch(err => {
            //console.log(err)
        })
    }, [isFavourite, checkCart])
    const isInFav = (id) => {
        for (let i = 0; i < favourites?.length; i++) {
            if (id === favourites[i].products) {
                return true;
            }
        }
        return false;
    }
    const fun = (id) => {
        for (let i = 0; i < cartItem.length; i++) {
            if (id === cartItem[i].item.id) {
                return true;
            }
        }
        return false;
    }
    const HandleRemoveFromFavourite = async (id) => {
        setLoaderId(id)
        let favId;
        for (let i = 0; i < favourites.length; i++) {
            if (id === favourites[i].products) {
                favId = favourites[i].id;
            }
        }
        try {
            const response = await axiosPrivate.delete(`product/remove_from_favourite/${favId}/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookies.get('access')}`
                    },
                    withCredentials: true
                }
            );
            setIsFavourite(prev => !prev)
            setLoaderId("")
        } catch (err) {
            if (!err?.response) {
                //console.log(err);
            }
        }
    }
    const AddToCart = async (id) => {
        setLoaderId(id)
        try {
            const response = await axiosPrivate.post(`/product/add_to_cart/${id}/`, {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookies.get('access')}`
                    },
                    withCredentials: true
                }
            );
            setCheckCart(!checkCart)
            setLoaderId("")
        } catch (err) {
            setLoaderId("")
            if (!err?.response) {
                //console.log(err)
                setLoaderId("")
            }
        }
    }
    const ReadSetId = (id) => {
        if (id) {
            setReadId(id)
        } else {
            setReadId('')
        }

    }
    const wishListItems = products?.map((el, index) => {
        if (isInFav(el.id)) {
            return (
                <div key={index}>
                    <div className='col-12 d-flex  p-lg-3 p-md-3 p-4 ps-lg-3 ps-md-3 ps-0'>
                        <div className="col-6  d-flex">

                            <div className=" img-wrap">
                                <Link to=""><img src={el.image} alt='not found' /></Link>
                            </div>
                            &nbsp;
                            <div className="d-flex flex-column ms-1">
                                <Link to="" className="txt-txt">
                                    {el.name}</Link>
                                <small className='Color-family'>{readId === el.id ? el.description : el.description.substring(0, 100)}<Link onClick={() => { readId === el.id ? setReadId('') : ReadSetId(el.id) }} to>{readId === el.id ? <p>Readless</p> : <p>Readmore</p>}</Link></small>
                            </div>
                        </div>
                        &nbsp;
                        <div className=" col-3">
                            <div className="text-center">
                                <span className="Price">{el.price}</span>
                            </div>
                        </div>
                        &nbsp;
                        <div className=" col-3">
                            <div className="text-center">
                                {!fun(el.id) && <><i onClick={() => AddToCart(el.id)} className={loaderId ? "visually-hidden" : "fa-solid fa-cart-shopping fa_shop"}></i></>}&nbsp;&nbsp;
                                <i onClick={() => HandleRemoveFromFavourite(el.id)} className={loaderId ? "visually-hidden" : "fa-solid fa-trash-can can-can"}></i>{loaderId === el.id && <Loader />}

                            </div>
                        </div>


                    </div>
                </div>
            )
        }
    })
    return (
        <>
            <Headerproducts cartItem={cartLength} />
            <Dropdown className='track-order-drop1 pt-lg-0 pt-md-4 pt-5'>
                <Dropdown.Toggle variant="" id="dropdown-basic">

                    Track My Order

                </Dropdown.Toggle>

                <Dropdown.Menu id="Order-dropdown" className='shadow'>
                    <div className='p-4 '>
                        <form className="row g-3 tool_tip">
                            <h6>My Recent Orders</h6>
                            <Link to={"/Trackorders"} className="mb-3">2022/14/02  041 589 636999</Link>
                            <h6>Track my Order</h6>

                            <div className='position-relative mt-2'>
                                <div className="col-12">
                                    <label for="inputPassword4" className="form-label">Your order number:</label>
                                    <input type="text" placeholder='eg.123456789' className="form-control recent-orders-input" id="inputPassword4" />
                                </div>
                                <Button className='' id="btn-btn-submit"><i className="fa-solid fa-angle-right"></i></Button>

                            </div>

                        </form>
                    </div>

                </Dropdown.Menu>
            </Dropdown>
            <div className="My-Wishlist">
                <div className="container ">
                    {favourites?.length === 0 ? <span>
                        <Alert variant="" style={{ color: "black", backgroundColor: "#f6ecd0" }} className='mt-4 '>
                            <h6 className="mb-0 p-3" style={{ fontWeight: "500" }}>
                                No Items In Wishlist. Please navigate to <Link to={"/MProducts"} className="ALert-msg"><strong>products page</strong></Link>.
                            </h6>
                        </Alert>
                    </span> :
                        <div className="row  gx-5">
                            <div className="col-lg-10 col-12 py-3 p-3  mt-1 mx-auto">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='p-3  shadow  add-to-cart-head'>
                                            <div className=''>
                                                <Link to={""}>ADD ALL TO CART</Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-12 mt-3 ">
                                        <div className='p-3 Myorders-pkg-1 shadow'>

                                            <div className='Track-order-pkg'>
                                                <div className=''>
                                                    Watchlist
                                                </div>
                                            </div>
                                            <hr />
                                            {wishListItems}
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}