import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom"
const BreadcrumbComp = () => {
    return (
        <Breadcrumb className='d-flex justify-content-end align-items-center bread-container mt-lg-3 mt-md-5 mt-4'>
            <Breadcrumb.Item>
                <Link to="/MProducts"> Products</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className='Bread-product'>Checkout form</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default BreadcrumbComp