import Headerproducts from "./components/productcomponents/Headerproducts";
import Mainproducts from "./components/productcomponents/Mainproducts";
import Productsitems from "./components/productcomponents/products"
import useAxiosPrivate from "./components/logincomponents/hooks/useAxiosPrivate";
import { useState,useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies()
export default function MalesProducts() {
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
                    <Productsitems
                        genderbtn="I'm interested in Female's clothes"
                        btn="about-btn-men scrollto"
                        location="/FProducts"
                        gender={"MALE"}
                        checkCart={checkCart}
                        onChange={value => setCheckCart(value)}
                    />
                </div>
            </section>
        </div>

    )
}