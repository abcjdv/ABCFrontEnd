import {useState , useEffect} from "react";
import axios from "axios";
export default function GetData(){
    const [productData,setProductData]=useState([])
    const getData = () =>{
        axios.get("http://127.0.0.1:8000/product_list/",)
        .then(res=>{
            //console.log(res.data)
            setProductData(res.data)
        }).catch(err=>{
            //console.log(err)
        })

    }
    return(
        <div>
            <p>{getData}</p>
        </div>
    )
}