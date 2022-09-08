import React from 'react'
import FormBody from './components/checkoutformcomponent/FormBody';
import Headerproducts from './components/productcomponents/Headerproducts'
import useAxiosPrivate from "./components/logincomponents/hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies()
const CheckOutForm = () => {
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
    const toggleFavorite = () => {
        setCheckCart(prev => !prev)
        //console.log("function chal pra")
    }
    return (
        <div>
            <Headerproducts cartItem={cartItem}/>
            <FormBody 
            checkCart={checkCart}
            onChange={value=>setCheckCart(value)}
            />

        </div>
    )
}

export default CheckOutForm;