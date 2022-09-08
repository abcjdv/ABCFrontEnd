import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const ProductCarts = (props) => {
  // const [cartItem, setCartItem] = useState([])
  // useEffect(() => {
  //     axios.get("product/cart_items_list/",
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${cookies.get('access')}`
  //         },
  //         withCredentials: true
  //       }
  //     )
  //       .then(res => {
  //         //console.log(res.data)
  //         setCartItem(res.data)
  //       }).catch(err => {
  //         //console.error(err)
  //       })
  //   }, []);
  const mystyle = {
    verticalAlign: "middle",
    fontSize: "1.5rem",
    border: "2px solid #fff",
    padding: "8px",
    borderRadius: "50%",
    color: "#E86669",

  };
  //   //console.log(props.cartItem[props.index]?.item.id,"cartItem")
  return (
    <>
      <div key={props.id} className="col-lg-3 col-md-6 mb-4">
        <div className="card hotel">
          <div className="hotel-img">
            <div className="Product-items-pic">
              <Link to={`/description/${props.id}`}><img width="" height="" src={props.image} alt="Hotel 1" className="" /></Link>
            </div>
          </div>
          <h3>{props.name}</h3>
          <h5>{props.price}</h5>
          <div className="mb-2">
            <button className="btn btn-outline cart-btn" disabled={props.cartItem[props.index]?.item.id && props.id === props.cartItem[props.index].item.id}>Add to Cart</button>
            <i
              // onClick={() => { favourites.map((f) => { props.product === g.id ? //console.log("added") : //console.log("not added") }) }}
              className="fa fa-heart fa_heart"
              id="heart"
              aria-hidden="true"
              style={mystyle}
            >
            </i>
          </div>
        </div>
      </div >
    </>
  )
}
export default ProductCarts;