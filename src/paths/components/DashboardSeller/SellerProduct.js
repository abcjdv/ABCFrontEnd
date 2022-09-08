import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import "./Dashboard.css"
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import ProductEditModel from "../../../utils/models/ProductEditModel"
import Cookies from "universal-cookie";
import DashboardHeader from "./DashboardHeader";
const cookies = new Cookies();
export default function SellerProduct() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [productList, setProductList] = useState();
  const [productState, setProductState] = useState(true);
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
      setProductList(res.data)
    }).catch(err => {
      //console.log(err)
    })
  }, [productState])
  const handleDeleteProduct = (id) => {
    axiosPrivate.delete(`seller/delete_seller_product/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('access')}`
        },
        withCredentials: true
      }
    ).then(res => {
      //console.log(res, "Delete")
      setProductState(prev => !prev)
    }).catch(err => {
      //console.log(err)
    })
  }
  const userAttributes = []
  productList?.map((el, index) => {
    userAttributes.push({
      image: <img src={el.image}
        alt="image"
        style={{ width: "30px", height: "30px" }}
      />,
      name: el.name,
      status: el.status,
      qty: el.quantity,
      date: el.dateCreated,
      price: el.price,
      action: <div className="text-center d-flex justify-content-around"><i onClick={() => {
        navigate('/SellerPD', { state: { id: el.id} })
      }} className="fa-solid fa-eye me-2"></i>
        <ProductEditModel productId={index} />
        <i onClick={() => handleDeleteProduct(el.id)} to={""} className="fa-solid fa-trash-can "></i></div>
    })
  });
  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 100
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150
      },
      // {
      //   label: "Stock",
      //   field: "stock",
      //   sort: "asc",
      //   width: 270
      // },
      {
        label: "Qty.",
        field: "qty",
        sort: "asc",
        width: 200
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 150
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100
      }
    ],
    rows: userAttributes
  };

  return (
    <>
      <button onClick={() => {
        navigate('/otherpath', { state: { id: 7, color: 'green' } })
      }}>button</button>
      <DashboardHeader />
      <div className="container" id="Seller_product">
        <div className="card shadow p-3" >
          <div className="card-header d-flex justify-content-between">
            <div>
              <h3>Products</h3>
            </div>

            <div className=''>
              <Link to={"/SellerView"} className="btn btn-view">Add new Product</Link>
            </div>


          </div>
          <div className="card-body px-3">
            <MDBDataTable responsive bordered sortable data={data} />
          </div>

        </div>
      </div>
    </>
  )
}
