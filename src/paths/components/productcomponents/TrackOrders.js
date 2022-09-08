import React from 'react'
import { Link } from "react-router-dom";
import "./product.css";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Headerproducts from "./Headerproducts"
const steps = ['Processing', 'Shipped', 'Delievered'];


export default function TrackOrders() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <>
            <Headerproducts />
            <Dropdown className='track-order-drop1 pt-lg-0 pt-md-4 pt-5'>
                <Dropdown.Toggle variant="" id="dropdown-basic">

                    Track My Order

                </Dropdown.Toggle>

                <Dropdown.Menu id="Order-dropdown" className='shadow'>
                    <div className='p-4 '>
                        <form class="row g-3 tool_tip">
                            <h6>My Recent Orders</h6>
                            <Link to={"/Trackorders"} className="mb-3">2022/14/02  041 589 636999</Link>
                            <h6>Track my Order</h6>

                            <div className='position-relative mt-2'>
                                <div class="col-12">
                                    <label for="inputPassword4" class="form-label">Your order number:</label>
                                    <input type="text" placeholder='eg.123456789' class="form-control recent-orders-input" id="inputPassword4" />
                                </div>
                                <Button className='' id="btn-btn-submit"><i class="fa-solid fa-angle-right"></i></Button>

                            </div>

                        </form>
                    </div>

                </Dropdown.Menu>
            </Dropdown>
            <div className="Track-Order-Items">
                <div className="container ">
                    <div className="row  gx-5">
                        <div className="col-lg-10 col-12 py-3 p-3  mt-1 mx-auto">

                            <div className='row'>

                                <div className='col-12'>
                                    <div className='d-flex justify-content-between p-3 Track-order-number shadow'>
                                        <div className='d-flex flex-column'>
                                            <Link to={""}>Order #14662789631259</Link>
                                            <small>Placed on 22 Aug2022 21:56:53</small>
                                        </div>

                                        <div className='d-flex align-items-center' >
                                            <p> <strong>Total: </strong><strong style={{ color: "white" }}>Rs. 1,185</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className=" col-12  mt-3">
                                    <div className='p-3 pkg-1 shadow'>

                                        <div className='Track-order-pkg'>
                                            <div className='d-flex flex-column'>
                                                <h4><i class="fa-solid fa-box-open me-2"></i>Package 1</h4>
                                                <small>Sold by<Link to={""} className="ms-2">SIGMA TEL</Link></small>
                                            </div>


                                        </div>

                                        <hr />

                                        <div className='d-flex justify-content-between '>
                                            <div>
                                                <Link to={""}>Get by Fri 26 Aug - Sat 27 Aug</Link>
                                            </div>

                                            <div>
                                                <p>Ninja Delievery</p>
                                            </div>
                                        </div>

                                        <div className='col-lg-10 col-12 mx-lg-auto mx-0 py-5'>
                                            <Box sx={{ width: '100%' }}>
                                                <Stepper nonLinear activeStep={activeStep}>
                                                    {steps.map((label, index) => (
                                                        <Step key={label} completed={completed[index]}>
                                                            <StepButton color="inherit" onClick={handleStep(index)}>
                                                                {label}
                                                            </StepButton>
                                                        </Step>
                                                    ))}
                                                </Stepper>
                                                <div>
                                                    {allStepsCompleted() ? (
                                                        <React.Fragment>
                                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                                All steps completed - you&apos;re finished
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                <Box sx={{ flex: '1 1 auto' }} />
                                                                <Button onClick={handleReset}>Reset</Button>
                                                            </Box>
                                                        </React.Fragment>
                                                    ) : (
                                                        <React.Fragment>
                                                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                                                {/* Step {activeStep + 1} */}
                                                            </Typography>
                                                            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                <Button
                                                                    color="inherit"
                                                                    disabled={activeStep === 0}
                                                                    onClick={handleBack}
                                                                    sx={{ mr: 1 }}
                                                                >
                                                                    Back
                                                                </Button>
                                                                <Box sx={{ flex: '1 1 auto' }} />
                                                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                                    Next
                                                                </Button>
                                                                {activeStep !== steps.length &&
                                                                    (completed[activeStep] ? (
                                                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                                            Step {activeStep + 1} already completed
                                                                        </Typography>
                                                                    ) : (
                                                                        <Button onClick={handleComplete}>
                                                                            {completedSteps() === totalSteps() - 1
                                                                                ? 'Finish'
                                                                                : 'Complete Step'}
                                                                        </Button>
                                                                    ))}
                                                            </Box> */}
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            </Box>
                                        </div>


                                        <div className='col-12 Products-container d-flex justify-content-between p-3'>
                                            <div className="col-8 Product-name d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="content d-flex flex-column">
                                                    <Link to="" className="txt-txt">
                                                        Yoga  Training
                                                        Accessories
                                                        Single
                                                        SPRING</Link>
                                                    <small>No Warranty</small>
                                                </div>
                                            </div>
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Rs.489</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Qty:1</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='col-12 Products-container d-flex justify-content-between p-3'>
                                            <div className="col-8 Product-name d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="content d-flex flex-column ">
                                                    <Link to="" className="txt-txt">
                                                        Honor 8 Lite Tempered GLass Premium <br />Quality</Link>
                                                    <small>N/A No Warranty</small>
                                                </div>
                                            </div>
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Rs.580</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Qty:3</span>
                                                </div>
                                            </div>

                                        </div>


                                    </div>


                                </div>

                                <div className=" col-12  mt-3">
                                    <div className='p-3 pkg-1 shadow'>

                                        <div className='Track-order-pkg'>
                                            <div className='d-flex flex-column'>
                                                <h4><i class="fa-solid fa-box-open me-2"></i>Package 2</h4>
                                                <small>Sold by<Link to={""} className="ms-2">Shane Warn</Link></small>
                                            </div>


                                        </div>

                                        <hr />
                                        <div className='d-flex justify-content-between '>
                                            <div>
                                                <Link to={""}>Get by Fri 26 Aug - Sat 27 Aug</Link>
                                            </div>

                                            <div>
                                                <p>Ninja Delievery</p>
                                            </div>
                                        </div>

                                        <div className='col-lg-10 col-12 mx-lg-auto mx-0 py-5'>
                                            <Box sx={{ width: '100%' }}>
                                                <Stepper nonLinear activeStep={activeStep}>
                                                    {steps.map((label, index) => (
                                                        <Step key={label} completed={completed[index]}>
                                                            <StepButton color="inherit" onClick={handleStep(index)}>
                                                                {label}
                                                            </StepButton>
                                                        </Step>
                                                    ))}
                                                </Stepper>
                                                <div>
                                                    {allStepsCompleted() ? (
                                                        <React.Fragment>
                                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                                All steps completed - you&apos;re finished
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                <Box sx={{ flex: '1 1 auto' }} />
                                                                <Button onClick={handleReset}>Reset</Button>
                                                            </Box>
                                                        </React.Fragment>
                                                    ) : (
                                                        <React.Fragment>
                                                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                                                {/* Step {activeStep + 1} */}
                                                            </Typography>
                                                            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                <Button
                                                                    color="inherit"
                                                                    disabled={activeStep === 0}
                                                                    onClick={handleBack}
                                                                    sx={{ mr: 1 }}
                                                                >
                                                                    Back
                                                                </Button>
                                                                <Box sx={{ flex: '1 1 auto' }} />
                                                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                                    Next
                                                                </Button>
                                                                {activeStep !== steps.length &&
                                                                    (completed[activeStep] ? (
                                                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                                            Step {activeStep + 1} already completed
                                                                        </Typography>
                                                                    ) : (
                                                                        <Button onClick={handleComplete}>
                                                                            {completedSteps() === totalSteps() - 1
                                                                                ? 'Finish'
                                                                                : 'Complete Step'}
                                                                        </Button>
                                                                    ))}
                                                            </Box> */}
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            </Box>
                                        </div>


                                        <div className='col-12 Products-container d-flex justify-content-between p-3'>
                                            <div className="col-8 Product-name d-flex">

                                                <div className=" img-wrap">
                                                    <Link to=""><img src={""} alt='not found' /></Link>
                                                </div>
                                                &nbsp;
                                                <div className="content d-flex flex-column ">
                                                    <Link to="" className="txt-txt">
                                                        Yoga  Training
                                                        Accessories
                                                        Single
                                                        SPRING</Link>
                                                    <small>No Warranty</small>
                                                </div>
                                            </div>
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Rs.489</span>
                                                </div>
                                            </div>
                                            &nbsp;
                                            <div className=" col-2 Product-price  pt-2">
                                                <div className="">
                                                    <span className="">Qty:1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className='col-12  mt-4'>
                                    <div className='row'>

                                        <div className="col-lg-6  ">
                                            <div className='col-12'>
                                                <div className='Track-shipping p-3 shadow'>
                                                    <h5><strong>Shipping Address</strong></h5>
                                                    <hr />
                                                    <p>Mitchell Clerk</p>
                                                    <p>Kyle Mitchell
                                                        c/o Free Code Camp, Inc.
                                                        725 Washington Street
                                                        Suite 203
                                                        Oakland, CA 94607
                                                        copyright@freecodecamp.org
                                                        (510) 712 - 0933</p>
                                                    <p>03014857067</p>
                                                </div>
                                            </div>

                                            <div className='col-12 mt-3'>
                                                <div className='Track-Billing p-3 shadow'>
                                                    <h5><strong>Billing Address</strong></h5>
                                                    <hr />
                                                    <p>Mitchell John</p>
                                                    <p>Kyle Mitchell
                                                        c/o Free Code Camp, Inc.
                                                        725 Washington Street
                                                        Suite 203
                                                        Oakland, CA 94607
                                                        copyright@freecodecamp.org
                                                        (510) 712 - 0933</p>
                                                    <p>03014857067</p>
                                                </div>
                                            </div>


                                        </div>


                                        <div className="col-lg-6">
                                            <div className='Track-total-summary p-3 shadow'>
                                                <h5><strong>Total Summary</strong></h5>
                                                <hr />
                                                <div className='d-flex justify-content-between'>
                                                    <p>Subtotal</p>
                                                    <span>
                                                        <small>Rs. 887</small>
                                                    </span>

                                                </div>

                                                <div className='d-flex justify-content-between'>
                                                    <p>Shipping Fee</p>
                                                    <span>
                                                        <small>Rs. 289</small>
                                                    </span>

                                                </div>

                                                <hr />

                                                <div className='d-flex justify-content-between'>
                                                    <p>Total</p>
                                                    <span>
                                                        <h6>Rs. 1,185</h6>
                                                    </span>

                                                </div>
                                                Paid by Cash on Delivery
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}