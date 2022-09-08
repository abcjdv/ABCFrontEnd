import { useState, useEffect } from "react";
import useAxiosPrivate from "./components/logincomponents/hooks/useAxiosPrivate";
import Headerproducts from "./components/productcomponents/Headerproducts";
import Mainproducts from "./components/productcomponents/Mainproducts";
import Productsitems from "./components/productcomponents/products"
import Cookies from "universal-cookie";
import { Outlet } from "react-router-dom";
const cookies = new Cookies();
export default function FemalesProducts() {
    const [cartItem,setCartItem]=useState();
    const axiosPrivate = useAxiosPrivate();
    const [checkCart,setCheckCart]=useState(false);
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
                setCartItem(res.data.length)
            }).catch(err => {
                //console.error(err)
            })
    }, [checkCart])
    return (
        <div>
            <Headerproducts cartItem={cartItem}/>
            <section id="hotels" className="section-with-bg wow fadeInUp">
                <Mainproducts />
                <div className="container">
                    <div className="row">
                        <Productsitems
                            genderbtn="I'm interested in Men's clothes"
                            btn="about-btn-men scrollto"
                            location="/MProducts"
                            gender={"FEMALE"}
                            checkCart={checkCart}
                            onChange={value=>setCheckCart(value)}
                        />
                    </div>
                </div>
            </section>
            <Outlet />
        </div>

    )
}