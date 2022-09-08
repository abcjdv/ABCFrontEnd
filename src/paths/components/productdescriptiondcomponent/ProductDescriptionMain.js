import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../logincomponents/hooks/useAxiosPrivate';
import Cookies from "universal-cookie";
import Loader from "../../../utils/loader";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
const cookies = new Cookies();

const ProductdescriptionMain = (props) => {
  const [loader, setLoader] = useState()
  const axiosPrivate = useAxiosPrivate();
  const [cartBool, setCartBool] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [favourites, setFavourites] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const mystyle = {
    verticalAlign: "middle",
    fontSize: "1.5rem",
    border: "2px solid #fff",
    padding: "6px",
    borderRadius: "50%",
    color: "#E86669",


  };
  const mystyle1 = {
    verticalAlign: "middle",
    fontSize: "1.5rem",
    border: "2px solid #fff",
    padding: "6px",
    borderRadius: "50%",
    color: "#fff",
    marginTop: "10px",

  };
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
      }).catch(err => {
      })
  }, [cartBool]);
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
    })
  }, [isFavourite])
  const HandleAddToFavourite = async (id) => {
    setLoader(id)
    try {
      const response = await axiosPrivate.post(`product/add_to_favourite/${id}/`, {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('access')}`
          },
          withCredentials: true
        }
      );
      setIsFavourite(prev => !prev)
      setLoader("")
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const HandleRemoveFromFavourite = async (id) => {
    setLoader(id)
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
      setLoader("")
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const percentage = (value) => {
    return 20 * value / 100;
  }
  const isInFav = (id) => {
    for (let i = 0; i < favourites.length; i++) {
      if (id === favourites[i].products) {
        return true;
      }
    }
    return false;
  }
  const AddToCart = async (id) => {
    setLoader(id)
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
      setLoader("")
      setCartBool(prev => !prev)
      props.onChange(!props.checkCart)
    } catch (err) {
      if (!err?.response) {
      }
    }
  }
  const fun = (id) => {
    for (let i = 0; i < cartItem.length; i++) {
      if (id === cartItem[i].item.id) {
        return true;
      }
    }
    return false;
  }
  if (props.id == props.imageId) {
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
        <main id="main" className="main-page">

          {/*<!-- ======= Product Details Sectionn ======= -->*/}
          <section id="speakers-details">
            <div className="container">
              <Breadcrumb className='d-flex justify-content-end align-items-center bread-container mt-lg-3 mt-md-5 mt-4'>
                <Breadcrumb.Item href="/MProducts">
                  Products
                </Breadcrumb.Item>
                <Breadcrumb.Item active className='Bread-product'>Description</Breadcrumb.Item>
              </Breadcrumb>

              <div className="row justify-content-between mt-3 ">
                <div className="col-lg-5 col-md-10  col-12 mx-auto Product_img" >
                  <img src={props.image} alt="Speaker 1" width="100%" height="100%" className="" />
                </div>
                <div className="col-lg-6 col-md-10  col-12 mx-auto mt-md-3 my-3">
                  <div className="details">
                    <h2>{props.name}</h2>
                    <h4><strong>{props.price}</strong></h4>
                    <Link to={'/Seller'} className="mb-5">@xoxocutiegirl <i className="far fa-check-circle mb-4"></i></Link>
                    <p>{props.description}</p>
                    <div className="row">
                      <div className="col-12 d-flex ps-0 ">
                        <button onClick={() => { AddToCart(props.id) }} className="btn btn-outline spk-btn p-2" disabled={fun(props.id)}>Add to Cart</button>
                        <Link to={''} className="btn btn-outline spk-btn ms-2 p-2">Chat with Agent</Link>
                        <div style={{ position: "relative", width: "100px" }}>
                          {isInFav(props.id) ?
                            <i
                              onClick={() => HandleRemoveFromFavourite(props.id)}
                              className="fa fa-heart fa_heart mt-2"
                              id="heart"
                              aria-hidden="true"
                              style={mystyle}
                            ></i>
                            : <i
                              onClick={() => HandleAddToFavourite(props.id)}
                              className="fa fa-heart fa_heart"
                              id="heart"
                              aria-hidden="true"
                              style={mystyle1}
                            ></i>
                          }
                          {loader === props.id && <Loader className="Pro-description-spinner" />}
                        </div>
                      </div>
                    </div>
                  </div >
                </div >
              </div >
            </div >
          </section >
        </main >
      </>
    )
  }
}

export default ProductdescriptionMain;