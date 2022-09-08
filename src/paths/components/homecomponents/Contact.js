import React, { useState } from "react"
import axios from "../../../api/axios";
import Form from 'react-bootstrap/Form';
import Loader from "../../../utils/loader";
import $ from 'jquery';
export default function Contact() {
  const [show,setShow]=useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  function handleSubmit(event) {
    setShow(true)
    event.preventDefault();
    axios.post("contact_us/", {
      email: email,
      address: address,
      phoneNumber: number,
      message: message,
    })
      .then((response) => {
        setShow(false)
        //console.log(response);
        setEmail('');
        setAddress('')
        setMessage('')
        setNumber('')
        alert('Your request has been placed successfully. We will contact you shortly on your email.')
      });
  }

  return (
    <section id="contact" className="section-bg">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Contact Us</h2>
          <p>If you have any queries do contact us at the following and we hope you have a good time here with us. Off to exploring!</p>
        </div>
        <iframe name="dummyframe" id="dummyframe" style={{ display: "none" }}></iframe>
        <div className="form">
          <form id="safi" target="dummyframe" onSubmit={handleSubmit} className="php-email-form">
            <div>
              <div className="form-group  mt-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={email}
                  id="email" placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group  mt-3">
                <input
                  type="text"
                  name="address"
                  className="form-control form-control-lg"
                  value={address}
                  id="Address"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group  mt-3">
                <input
                  type="text"
                  name="number"
                  className="form-control form-control-lg"
                  value={number}
                  id="phoneNumber"
                  placeholder="Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1" 
                id="message" 
                required>

                <Form.Control onChange={(e) => setMessage(e.target.value)} value={message} as="textarea" rows={3} placeholder="Write your messeage here..." />
              </Form.Group>
            </div>
            <div className="text-center mt-5">
              <button type="submit">Send Message</button>
              </div>
          </form>
        </div>

      </div>
    </section>
  )
}