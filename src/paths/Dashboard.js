import React from "react";
import "./Dashboard.css"
const Dashboard = () => {

    return (
        <div className="bg-white">
            <header>
                <nav className="navbar navbar-expand-lg py-3  ">
                    <div className="container  ">


                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  mt-2">
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary  px-3  side-nav-btn" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" href="Dashboard.html"
                                    tabindex="-1" aria-disabled="true"><i className="fa-solid fa-bars"></i>
                                </a>
                            </li>

                        </ul>

                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">

                            <div className="offcanvas-body col-12 my-auto " id="mysidenav">
                                <a href="" className=" navbar-brand  mt-2 ">
                                    <div className=" font-weight-bold " id="ABC">
                                        ABC Company

                                    </div>


                                </a>


                                <ul className="navbar-nav d-flex flex-column mt-5 ps-3 w-100">
                                    <li className="nav-item w-100">
                                        <a href="Dashboard.html" className="nav-link text-light pl-4">
                                            Dashboard
                                        </a>
                                    </li>

                                    <li className="nav-item w-100 mt-2">
                                        <a href="payment.html" className="nav-link text-light pl-4">
                                            Payment Method
                                        </a>
                                    </li>
                                    <li className="nav-item w-100 mt-2">
                                        <a href="Personal Details.html" className="nav-link text-light pl-4">
                                            Personal Details
                                        </a>
                                    </li>
                                    <li className="nav-item w-100 mt-2">
                                        <a href="Dashboard-Contactus.html" className="nav-link text-light pl-4">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="nav-item w-100 mt-2">
                                        <a href="#" className="nav-link text-light pl-4">
                                            Verify Account
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                </nav>

            </header>


            {/* Dashboard body */}

            <div className="container mt-5">
                <div className="row" id="dashboard">


                    <div className="col-lg-4 col-md-4 col-6 pe-lg-2 Dash-1   ">
                        <div className="shadow p-4 progress_bd ">
                            <h3>Total Sale</h3>
                            <h4 id="b-red"><b>$2693</b></h4>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-4 col-6  px-lg-2 Dash-1 ">
                        <div className="shadow p-4 progress_bd  ">
                            <h3>Total Orders</h3>
                            <h4><b>1299</b></h4>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-6  ps-lg-2 Dash-1 ">
                        <div className="shadow p-4 progress_bd ">
                            <h3>Customers</h3>
                            <h4><b>230</b></h4>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="">
                                <h3 style="font-weight:700" className="my-4">Revenue</h3>
                                <canvas id="myChart" className="bg-white shadow p-4 chart-bd "
                                    style="width:100%;max-width:700px"></canvas>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="">
                                <h3 style="font-weight:700 ;" className="my-4">Delievery</h3>
                                <div className="shadow p-4 progress_bd ">
                                    <div className="d-flex">
                                        <i className="fa-brands fa-apple me-4"></i>
                                        <h6 style="font-weight: 700;" className="mt-1">MacBook Pro 15"</h6>
                                    </div>

                                    <div className="progress" style="height:5px ; width: 85%;">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                            aria-valuemax="100" style="width: 75%"></div>
                                    </div>
                                </div>

                                <div className="shadow p-4 progress_bd mt-3">
                                    <div className="d-flex">
                                        <i className="fa-brands fa-apple me-4"></i>
                                        <h6 style="font-weight: 700;" className="mt-1">I Mac Pro 2019"</h6>
                                    </div>

                                    <div className="progress" style="height:5px ; width: 85%;">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0"
                                            aria-valuemax="100" style="width: 15%"></div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="col-lg-12 Dash-2 mb-5">


                    <div className="shadow p-4 chart-bd bg-white">
                        <h3 className="mb-4">Recent Orders</h3>


                        <table id="example" className="table">

                            <thead>
                                <tr>

                                    <th>Invoice</th>
                                    <th>Customer</th>
                                    <th>Purchase On </th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Tracking</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>#021899</td>
                                    <td>Veronica Costella</td>
                                    <td>21 Aug 2022</td>
                                    <td>$765</td>
                                    <td>Received</td>
                                    <td>DF0HJY</td>
                                </tr>
                                <tr>

                                    <td>#021899</td>
                                    <td>Veronica Costella</td>
                                    <td>21 Aug 2022</td>
                                    <td>$765</td>
                                    <td>Received</td>
                                    <td>DF0HJY</td>
                                </tr>
                                <tr>

                                    <td>#021899</td>
                                    <td>Veronica Costella</td>
                                    <td>21 Aug 2022</td>
                                    <td>$765</td>
                                    <td>Received</td>
                                    <td>DF0HJY</td>
                                </tr>

                                <tr>

                                    <td>#021899</td>
                                    <td>Veronica Costella</td>
                                    <td>21 Aug 2022</td>
                                    <td>$765</td>
                                    <td>Received</td>
                                    <td>DF0HJY</td>
                                </tr>

                                <tr>
                                    <td>#021899</td>
                                    <td>Veronica Costella</td>
                                    <td>21 Aug 2022</td>
                                    <td>$765</td>
                                    <td>Received</td>
                                    <td>DF0HJY</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>




                </div>
            </div>

        </div>
    )
}
export default Dashboard;