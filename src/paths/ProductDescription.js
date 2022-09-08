import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from 'react-router-dom'
import Headerproducts from "./components/productcomponents/Headerproducts"
import ProductdescriptionMain from "./components/productdescriptiondcomponent/ProductDescriptionMain";
import useAxiosPrivate from "./components/logincomponents/hooks/useAxiosPrivate";
import Cookies from "universal-cookie";
const cookies = new Cookies()


export default function ProductDescription() {
  let { id } = useParams();
  const [data, setData] = useState([])
  const [cartItem, setCartItem] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [checkCart, setCheckCart] = useState(false);
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
        //console.log(res.data)
        setCartItem(res.data.length)
      }).catch(err => {
        //console.error(err)
      })
  }, [checkCart])
  useEffect(() => {
    axios.get("/product_list/",)
      .then(res => {
        //console.log(res.data)
        setData(res.data)
      }).catch(err => {
        //console.log(err)
      })
  }, []);
  const descriptiondata = data.map((g, index) => {
    return (<ProductdescriptionMain
      key={index}
      imageId={id}
      {...g}
      checkCart={checkCart}
      onChange={value => setCheckCart(value)} 
      />)
  })
  return (
    <div>
      <Headerproducts cartItem={cartItem} />
      {descriptiondata}
    </div>
  )
}
