import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate";
import { useLocation } from 'react-router-dom'
import ProductdescriptionMain from "./productdescriptiondcomponent/ProductDescriptionMain";
import Cookies from "universal-cookie";
import DashboardHeader from "./DashboardHeader";
const cookies = new Cookies();

export default function SellerProductDescription(props) {
    const {state} = useLocation();
    const {id}=state;
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState([])
    useEffect(() => {
        axiosPrivate.get("seller/seller_products_listing/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "product list")
            setData(res.data)
        }).catch(err => {
            //console.log(err)
        })
    }, []);
    //console.log(props.productId,'model')
    const descriptiondata = data.map((g, index) => {
        return (<ProductdescriptionMain
            key={index}
            imageId={id}
            modelId={props.modelId}
            {...g} />)
    })
    return (
        <div>
            <DashboardHeader/>
            {descriptiondata}
        </div>
    )
}