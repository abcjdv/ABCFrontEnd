import React from "react"
import "./FAQ.css";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
export default function Feature2() {
  return (
    <section id="features" className="features section-with-bg">

      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>FAQ</h2>
          <p>Here are our frequently asked questions</p>
        </header>

        {/* <!-- Pills --> */}

        <div className="row feture-tabs" data-aos="fade-up">
          <div className="col-lg-12">

            {/* <nav>
              <div class="nav nav-Pills nav-justified d-flex justify-content-around my-5" id="nav-pills"
                role="tablist" >

                <button class=" nav-link active" id="nav-Buyer-tab" data-bs-toggle="tab" data-bs-target="#nav-Buyer"
                  type="button" role="tab" aria-controls="nav-Buyer" aria-selected="true">BUYER</button>

                <button class=" nav-link  " id="nav-Seller-tab" data-bs-toggle="tab" data-bs-target="#nav-Seller"
                  type="button" role="tab" aria-controls="nav-Seller" aria-selected="true">SELLER</button>

              </div>
            </nav> */}

            <ul className="nav nav-pills nav-justified mb-3">
              <li className="nav-item">
                <a className="nav-link active" id="nav-Buyer-tab" data-bs-toggle="tab" data-bs-target="#nav-Buyer" role="tab" aria-controls="nav-Buyer" aria-selected="true" href="#">Buyer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-Seller-tab" data-bs-toggle="tab" data-bs-target="#nav-Seller" role="tab" aria-controls="nav-Seller" aria-selected="true" href="#">Seller</a>
              </li>
            </ul>

            <div className="tab-content " id="nav-tabcontent" >

              {/* For Buyer */}
              <div className="tab-pane fade show active" id="nav-Buyer" role="tabpanel" aria-labelledby="nav-Buyer-tab">
                <Accordion  >
                  <Accordion.Item eventKey="0" >
                    <Accordion.Header>Account</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="6">
                          <Accordion.Header id="bk" >Do I need to create an account to purchase? </Accordion.Header>
                          <Accordion.Body >
                            <p> Yes! All customers are to create an account with us in order to purchase and make payment to receive the goods! </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className="mt-3">
                          <Accordion.Header >Why do I need to create an account? </Accordion.Header>
                          <Accordion.Body>
                            <p>  Some promotions are only available to customers with an account. By registering an account, you will be eligible for those promotions.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8" className="mt-3">
                          <Accordion.Header >I forgot my password. How do I reset it? </Accordion.Header>
                          <Accordion.Body>
                            <p>You can click here to reset your password.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9" className="mt-3">
                          <Accordion.Header >What if I face other problems or have other queries? </Accordion.Header>
                          <Accordion.Body>
                            <p> Reach us at supports@ubgenesis.com. We are ready to help!</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion-2 */}

                  <Accordion.Item eventKey="1" className="mt-3">
                    <Accordion.Header>Purchasing & Payment</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="10">
                          <Accordion.Header> What are the payment methods available?  </Accordion.Header>
                          <Accordion.Body>
                            <p> We accept payment by credit card, debit card, PayNow! and PayPal </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11" className="mt-3">
                          <Accordion.Header>Are all items in stock? </Accordion.Header>
                          <Accordion.Body>
                            <p> Items are one of a kind and only prepared once an order comes through to our sellers.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12" className="mt-3">
                          <Accordion.Header>I would like to checkout with PayNow. How do I do it?  </Accordion.Header>
                          <Accordion.Body>
                            <p>Select “PayNow” on the checkout page and follow the payment instructions that will come with it. Billing codes are to be attached to the comments for us to process. If forgotten, they can screenshot and send to our whatsapp hotline or email. </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="13" className="mt-3">
                          <Accordion.Header>I would like to checkout with a credit card. How do I do it?  </Accordion.Header>
                          <Accordion.Body>
                            <p>Select “Credit Card” on the checkout page and follow the payment instructions that will come with it. There will be a 2.5% fee automatically imposed during check out. </p>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="14" className="mt-3">
                          <Accordion.Header>What is the duration for payment?  </Accordion.Header>
                          <Accordion.Body>
                            <p>All payments are to be made within 24 hours upon order placement. All orders will be canceled if it is not paid within 24 hours. </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion-3 */}

                  <Accordion.Item eventKey="2" className="mt-3">
                    <Accordion.Header>Shipping & Delivery</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="15">
                          <Accordion.Header>What are the shipping options available?</Accordion.Header>
                          <Accordion.Body>
                            <p> There are 2 shipping methods available: you may collect the item from your nearest PICK Locker or you may opt for Ninja Van delivery straight to your address.  </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="16" className="mt-3">
                          <Accordion.Header>What are the rates?  </Accordion.Header>
                          <Accordion.Body>
                            <p> Here are the shipping rates that we provide. Shipping charges will be added upon checkout.</p>

                            <div className="col-lg-7 col-md-7  mx-auto">
                              <Table className="table_border">
                                <thead>
                                  <tr>
                                    <th className="Table_head">Delivery Options</th>
                                    <th className="Table_head">Price</th>
                                  </tr>
                                </thead>
                                <tbody className="bg_color">
                                  <tr>
                                    <td>PICk Locker</td>
                                    <td>$2.50</td>
                                  </tr>
                                  <tr>
                                    <td>NINJA Van</td>
                                    <td>$6</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="17" className="mt-3">
                          <Accordion.Header>When will I receive my item? </Accordion.Header>
                          <Accordion.Body>
                            <p>As every item is unique, please allow some time for the buyer to prepare it. Upon receiving the item from the seller, we aim to deliver it to you within 72 Hours.  </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="18" className="mt-3">
                          <Accordion.Header>What happens if I never receive my item?  </Accordion.Header>
                          <Accordion.Body>
                            <p>In the rare event that you do not receive your order, please contact us immediately. </p>
                          </Accordion.Body>
                        </Accordion.Item>

                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>



              </div>

              {/* For Seller */}

              <div className="tab-pane fade show " id="nav-Seller" role="tabpanel" aria-labelledby="nav-Seller-tab">
                <Accordion >
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Account</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="19">
                          <Accordion.Header>Do I have to verify myself in order to sell?</Accordion.Header>
                          <Accordion.Body>
                            <p>Everyone and anyone is allowed to sell however we recommend all sellers to verify themselves in order to gain your buyers trust! All verified sellers will have a verified tick on their profile and their products.  </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="20" className="mt-3">
                          <Accordion.Header>How do I verify myself?  </Accordion.Header>
                          <Accordion.Body>
                            <p> All verification will be done by submitting a selfie to us, containing your face and you holding a piece of paper stating your username and the date. Verification is completely optional but we strongly recommend it as it gives the buyer the confidence to purchase from you knowing that the product is indeed from you. Once verified, you will have a tick on your profile and products. </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="21" className="mt-3">
                          <Accordion.Header>Will my information be kept confidential?  </Accordion.Header>
                          <Accordion.Body>
                            <p>All information and photos that you submit to us will be kept confidential. Keeping you anonymous is our utmost priority. Everything will be done discreetly. </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="22" className="mt-3">
                          <Accordion.Header>What if I face other problems or have other queries? </Accordion.Header>
                          <Accordion.Body>
                            <p>Reach us at supports@ubgenesis.com. We are ready to help!</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion-2 */}

                  <Accordion.Item eventKey="4" className="mt-3">
                    <Accordion.Header>Purchasing & Payment</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="23">
                          <Accordion.Header> How do I receive my payment?   </Accordion.Header>
                          <Accordion.Body>
                            <p> All payments will be done through 2 methods, either bank transfer or PAYNOW. For bank transfer, sellers will have to input their bank details. For PAYNOW, sellers will have to input their valid PAYNOW number. If they wish to change their bank details or PAYNOW, they can just change themselves under the setting button.  </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="24" className="mt-3">
                          <Accordion.Header>How often will I receive my payment? </Accordion.Header>
                          <Accordion.Body>
                            <p>You will receive payment every week. </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="25" className="mt-3">
                          <Accordion.Header>Is there any commision?   </Accordion.Header>
                          <Accordion.Body>
                            <p>ABC Company will deduct 20% commission for each product selling price which will be set by you.</p>
                          </Accordion.Body>
                        </Accordion.Item>



                      </Accordion>

                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Accordion-3 */}

                  <Accordion.Item eventKey="5" className="mt-3">
                    <Accordion.Header>Shipping & Delivery</Accordion.Header>
                    <Accordion.Body className="Accor_head">
                      <Accordion>
                        <Accordion.Item eventKey="26">
                          <Accordion.Header>How long do I have to prepare my order?</Accordion.Header>
                          <Accordion.Body>
                            <p>Upon receiving an order, sellers have 36 hours to ensure the product is ready for shipment. Sellers will choose a PICK Locker of their convenience and place the item inside. You will receive a notification once we collect your item from the lockers.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="27" className="mt-3">
                          <Accordion.Header>How would I know I received an order? </Accordion.Header>
                          <Accordion.Body>
                            <p>Once an order has been placed with you, you will receive a notification by us via email and Whatsapp.</p>
                          </Accordion.Body>
                        </Accordion.Item>

                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>



              </div>
            </div>


          </div>

          <div className="col-lg-6">
            <img src="assets/img/features-2.png" className="img-fluid" alt="" />
          </div>
        </div>

      </div>

    </section>
  )
}