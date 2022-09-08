import React, { useEffect, useState } from "react";
import { MDBDataTable } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import "./Dashboard.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link,useNavigate } from "react-router-dom";
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import Cookies from "universal-cookie";
import DashboardHeader from "./DashboardHeader";
const cookies = new Cookies();
const DatatablePage = () => {
    const axiosPrivate = useAxiosPrivate();
    const [orders, setOrders] = useState();
    const [orderList, setOrderList] = useState();
    const [orderState, setOrderState] = useState(true);
    const navigate=useNavigate();
    useEffect(() => {
        axiosPrivate.get("seller/orders_listing/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "order list")
            setOrderList(res.data)
            setOrders(res.data.length)
        }).catch(err => {
            //console.log(err)
        })
    }, [orderState])
    let a = 0;
    for (let i = 0; i < orderList?.length; i++) {
        a += parseFloat(orderList[i]?.order.orderTotal);
    }
    //console.log(a, 'total sales');
    const str = []
    for (let j = 0; j < orderList?.length; j++) {
        str.push(orderList[j].order.email)

    }
    const HandleStatus = (id) => {
        axiosPrivate.patch(`seller/update_order_status/${id}/`,{orderStatus:'DISPATCHED'},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).then(res => {
            //console.log(res.data, "order list")
            setOrderState(!orderState)
        }).catch(err => {
            //console.log(err)
        })
    }
    const isDispatched = (id) => {
        for (let i = 0; i < orderList.length; i++) {
          if ('DISPATCHED' === orderList[id].order.orderStatus) {
            return true;
          }
        }
        return false;
      }

    const real_customers = new Set(str);
    const customers = real_customers.size;
    const userAttributes = []
    orderList?.map((el, index) => {
        if (index < 5) {
            userAttributes.push({
                order: <h6 searchvalue={'tourist'} onClick={() => {
                    navigate('/Ordersinfo', { state: { id: el.id} })
                  }}>{el.id}</h6>,
                ordertotal: el.order.orderTotal,
                status: <div className="text-center">
                    <span className={isDispatched(index)?"badge btn_status btn_Completed":"badge btn_status btn-secondary"}> {el.order.orderStatus}</span>
                </div>,
                date: el.created_at,
                customer: el.order.fullName,
                action: <div><center><Button variant="success" className="" onClick={()=>HandleStatus(el.order.id)} disabled={isDispatched(index)}>Dispatch</Button></center></div>
            })
        }
    });

    const data = {
        columns: [
            {
                label: "Order#",
                field: "order",
                sort: "asc",
                width: 100
            },
            {
                label: "Order Total",
                field: "ordertotal",
                sort: "asc",
                width: 150
            },
            {
                label: "Status",
                field: "status",
                sort: "asc",
                width: 150
            },
            {
                label: "Customer",
                field: "customer",
                sort: "asc",
                width: 270
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
            <DashboardHeader />
            <div className="container mt-5  " id="dash_br">
                <div className="row" id="dashboard">
                    <div className="col-lg-4 col-md-4 col-12 pe-lg-2">
                        <div className="shadow p-4 Seller-dash-info d-flex justify-content-between">
                            <div>
                                <h3>Total Sale</h3>
                                <h4 id="b-red"><b>{a.toFixed(2)}</b></h4>
                            </div>

                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-coins Seller-dash-icons"></i>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-4 col-12  px-lg-2">
                        <div className="shadow p-4  Seller-dash-info d-flex justify-content-between">
                            <div>
                                <h3>Total Orders</h3>
                                <h4><b>{!orders ? "0" : orders}</b></h4>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-boxes-packing Seller-dash-icons"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12  ps-lg-2">
                        <div className="shadow p-4 Seller-dash-info d-flex justify-content-between">
                            <div>
                                <h3>Customers</h3>
                                <h4><b>{customers}</b></h4>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-users Seller-dash-icons"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container" id="Seller_product">
                <div className="card shadow p-3" >
                    {/* <div className="card-header d-flex justify-content-between"> */}
                    <div className="px-3">
                        <h3>Recent Orders</h3>
                    </div>
                    {/* </div> */}
                    {/* <div className="container mt-3">
                        <div className="row">
                            <div className="col-lg-12 px-3">
                                <Link to="#" className="me-3 text-truncate">
                                    All (4)
                                </Link>
                                <Link to="#" className="me-3 text-truncate">
                                    Completed (1)
                                </Link>
                                <Link to="#" className="me-3 text-truncate">
                                    Processing (0)
                                </Link>
                                <Link to="#" className="me-3 text-truncate">
                                    On-hold (2)
                                </Link>
                                <Link to="#" className="me-3 text-truncate">
                                    Refunded (1)
                                </Link>
                            </div>
                        </div>

                    </div> */}

                    <div className="card-body px-3">
                        {/* <DataTable
                            columns={tablecolumns}
                            data={tabledata}
                        /> */}
                        <MDBDataTable
                            responsive
                            bordered
                            data={data}
                            sortRows={[' order, status']}
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default DatatablePage;