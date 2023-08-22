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


import one from "../assets/HireImage/deep-learning.png"
import two from "../assets/HireImage/web-developers.svg"
import three from "../assets/HireImage/ai-ml-engineers.svg"
import four from "../assets/HireImage/machine-learning-1.png"
import five from "../assets/HireImage/software-development.png"
import six from "../assets/HireImage/dev.png"

export default function Python() {
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
                        <h1 className='hire'>Hire Python  Developers</h1>
                        <p className='para'><b>Hire Python Developer </b> from XmTecnology to grow your business with industry-best Python development services. Our python developers build the best commercial-grade products by using data and predictive analysis. Leverage 40+ full-stack Python developers with mastery of Tornado, Flask, Django, and Web2py.</p>
                        <ul>
                            <li>Hire a Talented Python Developer in 48 Hours
                            </li>
                            <li>Role-Specific Developers</li>
                            <li>Save up to 40% on Development/Maintenance/Support Cost</li>
                            <li>100% Source Code Protection</li>
                            <li>Risk Free 2 weeks Trial</li>

                        </ul>

                        <button className='btn btn-primary mt-2'>Let Discuss about the python Project</button>
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
                        <h1 className='text-center' style={{ marginTop: "35px" }}>Hire python Js Developers As Per Your Business Needs</h1>
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

                    <h1 className='text-center'>Hire python Developer for various End-to-End Services</h1>
                    <p className='text-center pb-5'>Hire python developers from us because we believe in delivering high-quality Python solutions at affordable prices. XmTechnology is a leading Python Development Company with years of experience to build a variety of web solutions for small businesses to large-scale businesses. Our highly talented team of python developers will use the python editors like PyCharm Professional Edition, VS Code, and PyCharm Community Edition to deliver the best object-oriented solutions. Hiring python developers can be challenging but don't worry as we provide python development services so that you can have a highly secure and maintainable website for your business.</p>

                    <div className='dic'>
                        <Col lg={4} md={6}>
                            <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={four} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>machine-learning</h4>
                                <p className='web'>Hire best python machine learning programmers from us that deliver the latest Machine Learning apps. Our team of full stack python developer use libraries like Sckit-Learn, TensorFlow, and Nilearn to build various machine-learning applications by using python frameworks.</p>
                                <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={one} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Python for Deep Learning</h4>
                                <p className='pt-2 web' >With the help of experienced python coders, you can have strong models that can be used to build different types of deep and machine learning applications like speech and image recognition.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={five} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Custom Python Development</h4>
                                <p className='pt-2 web'>software-development
                                    Custom Python Development
                                    Hire top python developers from us that provide development services to build highly customizable, and secure backend for various web applications and portals. Our highly experienced python programmers use the latest tools of python programming language to build customized solutions.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={two} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Web-development</h4>
                                <p className='web'>Our team of remote python developers will build highly secure, dynamic, and robust websites and web applications as per your requirements. Our skilled python developers use some of the top python frameworks like Django, Flask, Web2Py, Pyramid, and Bottle to build highly functional web apps.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={three} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Python AI & ML development</h4>
                                <p className='pt-2 web'>Hire AI & ML Python developer from XmTechnology as they will provide some of the best AI & ML programming language development services. Our python programmer will use the libraries and deep learning frameworks like NLTK, and Keras to deliver the AI & deep learning & ML applications quickly.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={six} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Python Migration & Upgradation Services</h4>
                                <p className='web'>We have a team of Python developers that provides the service of migrating your web app. Our Developers maintains compatibility, plugin & version upgrade of the web app. Our remote developers will provide Migration & Upgradation services to Python without any loss.</p>
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
