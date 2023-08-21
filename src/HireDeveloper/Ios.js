import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Home.css'
import Logo from '../assets/Image/XM.png';
import { Button, Col, Image, Row } from 'react-bootstrap';
import check from "../assets/Image/check.png"
import time from "../assets/Image//rating.png"
import half from "../assets/Image/time.svg"
import full from "../assets/Image/full-time.svg"
import Image1 from '../assets/Image/code 1.png';
import Image2 from '../assets/Image/cart 1.png';
import Image3 from '../assets/Image/content 1.png';
import Image4 from '../assets/Image/document 1.png';


import one from "../assets/HireImage/one.png"
import two from "../assets/HireImage/two.png"
import three from "../assets/HireImage/three.png"
import four from "../assets/HireImage/four.png"
import five from "../assets/HireImage/five.png"
import six from "../assets/HireImage/six.png"


export default function Ios() {
    return (
        <>
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Portfolio    </Nav.Link>
                            <Nav.Link href="" >Jobs</Nav.Link>
                            <Nav.Link href="" >Hiring</Nav.Link>

                            <Button variant="primary" className='rounded-5'>Contact  Us</Button>{' '}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container mt-5 ">
                <div className="row">

                    <div className="col-lg-6">
                        <h1 className='hire'>Hire iOS/iPhone App Developers</h1>
                        <p className='para'><b>Hire Ios developers  </b> from us to develop the most advanced, robust, and user-friendly iPhone application for the expansion of your business. Our best iPhone developers follow the modern industry standards to deliver fully functional iOS applications for different types of businesses. We have a team of 20+ iOS programmers that develop highly advanced and feature-rich applications.</p>
                        <ul>
                            <li>Migration & Upgradation

                            </li>
                            <li>Support & Maintenance
                            </li>
                            <li>Custom App Development
                            </li>
                            <li>MVP Development
                            </li>
                            <li>UI/UX Strategy Development</li>

                        </ul>

                        <button className='btn btn-primary mt-2'>Let Discuss about the Ios Project</button>
                    </div>
                    <div className="col-lg-6  mt-5 mt-sm-0   studentdetail " >
                        <div className='test'>

                            <h1 style={{ textAlign: "center", marginBottom: "35px" }}>Get Free Consultation Now</h1>
                            <p className='text-center'>Set up a developer interview and hire within 48 hours</p>

                            <label htmlFor="Full name">full name</label>
                            <input className='text-input inputstyle' id='form' type="text" />


                            <label className='mt-4 text-left' htmlFor="Email">Email address</label>
                            <input className='text-input inputstyle' id='form' type="text" />


                            <label className='mt-4 text-left' htmlFor="Contact">Contact</label>
                            <input className='text-input inputstyle' id='form' type="text" />

                            <label className='mt-4 text-left' htmlFor="message">message</label>
                            <input className='text-input inputstyle' id='form' type="text" />


                            <button className=' mt-5   btn btn-primary' >Hire Developer</button>

                        </div>
                    </div>
                </div>
            </div>


            <Container className='mt-5'>
                <Row className='formargin'>

                    <h1 className='text-center'>Hire Ios Developer for various End-to-End Services</h1>
                    <p className='text-center pb-5'>We develop next-generation iOS applications to ensure that they provide consistent performance regardless of the complexity of the app. Hire iPhone Developers from us to get the most scalable and interactive applications for different types of Apple devices. Our best iOS developers use the latest iOS technologies to deliver customized iOS applications for businesses from all over the world.</p>

                    <div className='dic'>
                        <Col lg={4} md={6}>
                            <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={one} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>iPhone App Strategy</h4>
                                <p className='web'>Hire skilled iOS developers from us because they provide the best strategies to launch the iPhone application. Our programmers create the blueprint of the application and also provide the facility for a consultation.</p>
                                <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={two} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>iPhone App Design</h4>
                                <p className='pt-2 web' >app-design
                                    iPhone App Design
                                    Get in touch with our iPhone developers that use UI/UX designing tools like Xcode, Fabric, and AppCode to develop the most engaging apps that follow Apple’s design guidelines.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={three} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>iphone-testing
                                </h4>
                                <p className='pt-2 web'>Our developers use the testing tools like EarlGrey, Detox, and OCMock to deliver iPhone applications that can work flawlessly on different versions of iOS.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={four} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Support and Maintenance</h4>
                                <p className='web'>support-maintenence

                                    Hire remote iOS developers from us because we provide the best support and maintenance services to make sure that the iPhone application is fully optimized.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={five} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>App Migration</h4>
                                <p className='pt-2 web'>migration
                                    App Migration
                                    Hire an expert team of iOS developers to update your old iOS applications to the latest version of iOS 16.1. Plus, we also provide the service of migration to migrate your existing application to iOS quickly without any data loss.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={six} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Apple Watch App Development</h4>
                                <p className='web'>Consult with us to extend and grow your business by exploring the market of Apple Watch applications. We use technologies like Swift and Objective C to create different types of Apple Watch apps.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>






            <div className="container-fluid" style={{ backgroundColor: "#ededed", marginTop: "60px", padding: "50px" }}>
                <div className="container">
                    <div className="row ">

                        <h1 className='text-center'>Schedule A Quick Interview Now To Avail A 15-days Risk-free Trial.</h1>
                        <p className="web text-center">Don't know where to begin? Simply fill out this form and set up a meeting to get started.</p>

                        <div className="col-lg-12 mt-5">
                            <label htmlFor="Full name ">Name</label>
                            <input className='text-input input' id='form' type="text" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <label htmlFor="Full name ">Email name</label>
                            <input className='text-input input' id='form' type="text" />
                        </div>

                        <div className="col-lg-6 mt-4">
                            <label htmlFor="Full name ">Number</label>
                            <input className='text-input input' id='form' type="number" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            <label htmlFor="Full name ">Message</label>
                            <input className='text-input input' id='form' type="text" style={{ height: "250px" }} />
                        </div>
                    </div>

                    <div className="row mt-5 text-center">
                        <button className='btn btn-primary m-auto w-50'>Submit</button>
                    </div>
                </div>
            </div>


        </>
    )
}
