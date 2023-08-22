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


import one from "../assets/HireImage/Thinking.png"
import two from "../assets/HireImage/UseEcp.png"
import three from "../assets/HireImage/coding.png"
import four from "../assets/HireImage/dev.png"
import five from "../assets/HireImage/machine.png"
import six from "../assets/HireImage/thinkings.png"

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


                            <label className='mt-4 text-left' htmlFor="Email">Choose Developer Team</label>
                            <select className='text-input inputstyle' id='form'>
                                <option value="react">React Developer</option>
                                <option value="node">Node Developer</option>
                                <option value="ios">Ios Developer</option>
                                <option value="flutter">Flutter Developer</option>
                                <option value="android">Android Developer</option>
                                <option value="python">Python Developer</option>
                                <option value="mern">Mern Developer</option>
                                <option value="ui/ux">Ui/Ux Developer</option>
                                <option value="fullstack">Fullstack Developer</option>
                                <option value="Laravel">Laravel Developer</option>
                                <option value="Vue">Vue Developer</option>
                                <option value="Django">Django Developer</option>
                                <option value="DotNet">DotNet Developer</option>
                                <option value="Angular">Angular Developer</option>
                            </select>




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
                                    <img width={50} src={three} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>ReactJS UI and UX Development</h4>
                                <p className='web'>Hire React.JS developers from us for top-notch UI/UX design and development services. Our developers will use the latest libraries like MobX, Enzyme, Redux, and React Intl to ensure that they will provide user-friendly interfaces for all devices.</p>
                                <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={one} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Custom ReactJS Web Development</h4>
                                <p className='pt-2 web' >Transform your vision into reality with custom ReactJS web development solutions. Hire React developer from us to build scalable and innovative applications.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={five} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>ReactJS Plugins Development</h4>
                                <p className='pt-2 web'>We have a team of expert developers who will build fully-featured web applications by using custom ReactJS plugin development. Our team of ReactJS experts will be developing and integrating the plugins and different modules.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={six} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>ReactJS Maintenance & Support</h4>
                                <p className='web'>Hire ReactJS Developer from XmTechnology to get rid of vulnerabilities in your ReactJS web application. Our React developers will do routine maintenance and also implement the latest features to satisfy the client’s requirements.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={four} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>ReactJS Migration & Upgradation Services</h4>
                                <p className='pt-2 web'>Hire the best remote ReactJS programmers from XmTechnology because they have years of experience. They have proven their expertise as in the past they did the process of migrating & upgrading the existing web app to the ReactJS platform without losing any data.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={two} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Front-End ReactJS Development</h4>
                                <p className='web'>Hire our React.js developers as they will provide various front-end development services for ReactJS web applications. Our programmers have expertise in building Single Page Applications (SPAs), real-time data exchange applications, and many more.</p>
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
