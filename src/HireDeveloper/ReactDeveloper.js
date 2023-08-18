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

export default function ReactDeveloper() {
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
                        <h1 className='hire'>Hire React  Developers</h1>
                        <p className='para'><b>Hire ReactJs developers</b> from us that harness the power of AI technologies to create interactive user interfaces for Progressive Web Applications (PWA) and Single Page Applications (SPA). Our team of 35+ React developers uses AI platforms like OpenAI Codex, Tabnine, and CodeT5 to improve code quality and reduce development costs while developing personalized web apps.</p>
                        <ul>
                            <li>Migration & Upgradation</li>
                            <li>Support & Maintenance</li>
                            <li>Expertise with JavaScript</li>
                            <li>Maintained Coding Standards</li>
                        </ul>

                        <button className='btn btn-primary mt-2'>Let Discuss about the react Project</button>
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


            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='text-center' style={{ marginTop: "35px" }}>Hire React Js Developers As Per Your Business Needs</h1>
                    </div>
                </div>

                <div className="row formargin">
                    <div className="col-lg-4 ">
                        <div className="dream">
                            <h4 className='text-center'>Ready to Start Your Dream Project?</h4>

                            <div className="mainss">
                                <div className="expert">
                                    <img src={time} />
                                    <p className='expert'>150 + Experts</p>
                                </div>
                                <div className="half">
                                    <img src={half} />
                                    <p className='expert'> Hourly  Hiring</p>

                                </div>
                            </div>

                            <div className="fulltime">
                                <img src={full} />
                                <p className='expert'>Full-Time Hiring</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="dream">
                            <h1>$20  <span style={{ fontSize: "16px" }}>Hourlys</span></h1>
                            <h5 className='mt-3 mb-3'>Hourly Plan</h5>
                            <ul >
                                <li>Dedicated developer</li>
                                <li>Pay as you go</li>
                                <li>Suitable for short-term engagement</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="dreams">
                            <h6 className='recomended'>RECOMMENDED FOR YOU</h6>
                            <h1>$2400  <span>Hourlys</span></h1>
                            <h5 className='mt-3 mb-3'>Monthly Plan</h5>
                            <ul style={{ listStyleType: "disc" }}>

                                <li>Suitable for long-term engagement</li>
                                <li>Dedicated team of developers, Scrum Master, QAs, and architects</li>
                                <li>160 hours per month</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <Container className='mt-5'>
                <Row className='formargin'>

                    <h1 className='text-center'>Hire ReactJS Developer for various End-to-End Services</h1>
                    <p className='text-center pb-5'>Take your business to the next level by hiring our expert ReactJS developers. XmTechnology is a ReactJS Development Company that has expertise in developing robust and fully-featured web applications. Our talented ReactJS programmers will use their skills to deliver websites with a better front-end experience.</p>

                    <div className='dic'>
                        <Col lg={4} md={6}>
                            <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image1} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Web Development</h4>
                                <p className='web'>Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular.</p>
                                <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image2} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Digital Marketing</h4>
                                <p className='pt-2 web' >By utilizing social media and paid advertising, we help small and medium businesses succeed online.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image3} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Application Development</h4>
                                <p className='pt-2 web'>React Native, Flutter, Native iOS. Our team thrives on methodological and technical challenges.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image1} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>E-Commerce Solutions</h4>
                                <p className='web'>Provide e-commerce websites and applications for companies. E-commerce websites with online payment solutions are our specialty.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image1} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Backup & Security</h4>
                                <p className='pt-2 web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={35} src={Image1} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Enterprise Software Services</h4>
                                <p className='web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
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
