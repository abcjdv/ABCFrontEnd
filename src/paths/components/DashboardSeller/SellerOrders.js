import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import "./Dashboard.css"
import { Link,useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';
import useAxiosPrivate from "../logincomponents/hooks/useAxiosPrivate"
import DashboardHeader from "./DashboardHeader";
const cookies = new Cookies();
export default function Sellerorder() {
    const navigate=useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [orderList, setOrderList] = useState();
    const [orderState, setOrderState] = useState(true);
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
        }).catch(err => {
            //console.log(err)
        })
    }, [orderState])
    const isDispatched = (id) => {
        for (let i = 0; i < orderList.length; i++) {
          if ('DISPATCHED' === orderList[id].order.orderStatus) {
            return true;
          }
        }
        return false;
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
    const orderData = [
        {
            order: 213,
            ordertotal: "12342",
            status: "completed",
            date: "12/32/31",
            customer: "qadeer",
            action: "add"
        },
        {
            order: 232,
            ordertotal: "45325",
            status: "In progress",
            date: "12/02/22",
            customer: "adeel",
            action: "add"
        },
        {
            order: 212,
            ordertotal: "12342",
            status: "canceled",
            date: "12/02/23",
            customer: "umer",
            action: "add"
        },
        {
            order: 322,
            ordertotal: "12342",
            status: "delivered",
            date: "12/02/22",
            customer: "asim",
            action: "add"
        }
    ]
    const userAttributes = []
    orderList?.map((el,index) => {
        userAttributes.push({
            order: <h6 as={Link} searchvalue={'tourist'} onClick={() => {
                navigate('/Ordersinfo', { state: { id: el.id} })
              }}>{el.id}</h6>,
            ordertotal: el.order.orderTotal,
            status: <div className="text-center">
                <span className={isDispatched(index)?"badge btn_status btn_Completed":"badge btn_status btn-secondary"}> {el.order.orderStatus}</span>
            </div>,
            date: el.created_at,
            customer: el.order.fullName,
            action: <div><center><Button variant="success" onClick={()=>HandleStatus(el.order.id)}  disabled={isDispatched(index)}>Dispatch</Button></center></div>
        })
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
            <div className="container" id="Seller_product">
                <div className="card shadow p-3" >
                    {/* <div className="card-header d-flex justify-content-between"> */}
                    <div className="px-3">
                        <h3>Orders</h3>
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
    )
}
