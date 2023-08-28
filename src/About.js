import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import firebaseApp from './Firebase/firebase'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/Image/XM.png';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { City, Country, State } from "country-state-city";
import Selector from "./Selector";
import './Career.css'
import Data from './Data';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import office from "./assets/Image/office.png"
import icon1 from './assets/Image/circle.svg';
import Logos from './assets/Image/XM.svg';
import CallIcon from './assets/Image/phone 2.svg';
import MailIcon from './assets/Image/mail 1.svg';
import LocatinIcon from './assets/Image/pin 1.svg';
import Fblogo from './assets/Image/facebook 1.svg';
import Twilogo from './assets/Image/twitter 1.svg';
import Inlogo from './assets/Image/in.png';
import Intralogo from './assets/Image/instagram-sketched 1.svg';
import Sklogo from './assets/Image/skype 1.svg';
import Gmlogo from './assets/Image/gmail 1.svg';


import { PopupWidget } from "react-calendly";

export default function About() {

    const [isOpen, setIsopen] = useState(false)


    const topage = () => {
        window.location.href = "/career"
    }

    const toservice = () => {
        window.location.href = "/service"
    }

    const toabout = () => {
        window.location.href = "/about"
    }

    const toportfolio = () => {
        window.location.href = "/portfolio"
    }

    const tohire = () => {
        window.location.href = "/hire/react"
    }


    const tomain = () => {
        window.location.href = "/"
    }

    const tocontact = () => {
        window.location.href = "/contact"

    }

    return (
        <>
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="" className='img-fluid headerlogo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="" onClick={toabout}>About Us</Nav.Link>
                            <Nav.Link href="" onClick={toservice}>Services</Nav.Link>
                            <Nav.Link href="" onClick={toportfolio}>Portfolio</Nav.Link>
                            <Nav.Link href="" onClick={topage}>Jobs</Nav.Link>
                            <Nav.Link href="" onClick={tohire}>Hire</Nav.Link>
                            <Button variant="primary" className='rounded-5' onClick={tocontact}>Contact  Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className="cotainer-fluid bgimage" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="row">
                    <div className="col-lg-12">
                    </div>
                </div>
            </div>




            <div className="container-fluid" data-aos="fade-up" data-aos-duration="1500">
                <div className="row">
                    <div className="col-lg-6" style={{ padding: "55px" }}>
                        <img src={office} className='img-fluid rounded-4 ms-auto chairs' />
                    </div>
                    <div className="col-lg-6" style={{ padding: "55px" }} >
                        <h1 className="mt-5 xm ipsum">XM Technologies</h1>
                        <h1 className='text-dark team ipsum'>More About Our Success Stories</h1>
                        <p className="web ipsum">Positive pleasure-oriented goals are much more powerful <br /> motivators than negative fear-based ones. Although each  <br /> is successful separately, the right combination of both is the most  <br />powerful motivational force known to humankind.
                            <br />
                            We are committed to deliver the best Quality IT Products with <br /> Passion & Prompt Services. Our highly experienced, creative and <br /> versatile development team has both the capability and aptitude <br /> to create innovative and technologically advanced mobile apps. <br /> We believe in frank working environments.</p>
                        <div className="center">
                            <button className='mt-3 who whosss' style={{ margin: "0px" }} onClick={tocontact}>Apply Now</button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container" data-aos="fade-up" data-aos-duration="1500">
                <div className="row ">
                    <div className="col-lg-12" style={{ padding: "55px" }}>
                        <h1 className='text-center mb-5 ' style={{ fontWeight: "900" }}>Our XM</h1>
                        <p className='web center'> <span style={{ color: "black", fontSize: "25px" }}>Our Mission </span>- To deliver innovative and top-notch IT solutions that meet the short-term and long-term business goals. To translate the high-tech recommendations in a manner that humans can control for the ultimate benefit of organizational objectives. To bring the best user experience by leveraging the latest digital transformation invented across the globe. <br />
                            <br /><br />
                            <span style={{ color: "black", fontSize: "25px" }}>Our Vision </span> -To bring disruptive changes in the way businesses operate by incorporating the latest technology that reduces human efforts with utmost efficiency to ensure smooth and result-oriented business operations.
                        </p>
                    </div>
                </div>
            </div>


            <div className="cotainer-fluid foryou">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container  text-light">
                            <div className="row mt-5">
                                <h1 className='text-center mb-5 ' style={{ fontWeight: "900" }}>Our Vision</h1>

                                <div className="col-lg-6">
                                    <h1 className='ipsum'>Unleashing the Power of Information:</h1>

                                </div>
                                <div className="col-lg-6">
                                    <p className='ipsum'>In this era of rapid digital transformation, information is the cornerstone of progress. Our vision revolves around making information accessible, organized, and actionable. We believe that by harnessing the power of data and knowledge, we can drive informed decision-making, spur innovation, and enhance collaboration across all domains.

                                    </p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <h1 className='ipsum'>Pioneering Technological Evolution:

                                    </h1>
                                </div>
                                <div className="col-lg-6">
                                    <p className='ipsum'>Technology is the driving force behind innovation. Our vision is to be at the forefront of technological evolution, constantly exploring new horizons, and turning complex ideas into elegant solutions. By staying ahead of the curve, we aim to provide our audience with insights into the latest trends, breakthroughs, and advancements that are shaping the world around us.</p>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-lg-6">
                                    <h1 className='ipsum'>Fostering Innovation and Creativity:

                                    </h1>
                                </div>
                                <div className="col-lg-6">
                                    <p className='ipsum'>Innovation flourishes in an environment that encourages creativity and diversity of thought. Our vision is to cultivate a community where ideas are celebrated, and curiosity is nurtured. We aspire to be a hub for individuals to connect, collaborate, and exchange insights, ultimately fostering a culture of innovation that leads to groundbreaking solutions.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div data-aos="fade-up" data-aos-duration="1500">
                <Container className='mb-5'>
                    <Row style={{ marginTop: "100px" }}>
                        <Col lg={6} className='text-center m-auto'>
                            <h3 className='fw-bold'>Testimonials</h3>
                            <p>What our Customers are Saying</p>
                        </Col>
                    </Row>


                    <Row>
                        <div className=' mb-5 dics'>
                            <Col lg={4} md={6}>
                                <div className='border border-secondary-subtle  m-auto text-center p-4 mt-5 ms-2 me-3 mb-2' style={{ width: "350px" }}>
                                    {/* <img className='image-text-div img-fluid' width={55} height={60} src={testimonial1} alt="" /> */}
                                    <div className='d-flex  justify-content-center'>
                                        <div className='image-text-div'></div>
                                    </div>
                                    <h4 className='fw-bold pt-3'>Tim Brown</h4>
                                    <p className='web'>Can say about these guys only good
                                        words. After we build a website the
                                        customer's flow is quite stable and our
                                        SEO results growing. </p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className='border border-secondary-subtle  m-auto text-center p-4  mt-5  ms-2 me-3 mb-2' style={{ width: "350px" }}>
                                    {/* <img className='image-text-div' width={55} src={testimonial2} alt="" /> */}
                                    <div className='d-flex  justify-content-center'>
                                        <div className='image-text-div1'></div>
                                    </div>
                                    <h4 className='fw-bold pt-3'>Michael Vice</h4>
                                    <p className='web'>Can say about these guys only good
                                        words. After we build a website the
                                        customer's flow is quite stable and our
                                        SEO results growing. </p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className='border border-secondary-subtle  m-auto text-center p-4  mt-5  ms-2 me-3 mb-2' style={{ width: "350px" }}>
                                    {/* <img className='image-text-div' width={55} height={55} src={testimonial3} alt="" /> */}
                                    <div className='d-flex  justify-content-center'>
                                        <div className='image-text-div2'></div>
                                    </div>
                                    <h4 className='fw-bold pt-3'>Lucy Raymond</h4>
                                    <p className='web'>Can say about these guys only good
                                        words. After we build a website the
                                        customer's flow is quite stable and our
                                        SEO results growing. </p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </Col>

                        </div>
                    </Row>

                </Container>
            </div>




            <div className='d-flex justify-content-center p-0 m-0'>
                <div className='footer-div'>
                    <div className='footer-div-image1'>
                        <div className='footer-div-image2 pb-5 pt-3 p-3'>
                            <Container>
                                <Row >
                                    <Col lg={4} md={6} sm={11} className='m-auto pt-5 '>

                                        <div>
                                            <img src={Logos} alt="" />
                                            <p className='pt-4' style={{ width: "300px" }}>Our technical intelligence can put you on the fast track to success. That’s the promise from XM Technologies.</p>

                                            <p>Follow us on social media!</p>

                                            <div className='d-flex'>
                                                <img src={Fblogo} alt="" />
                                                <img className='ms-3' src={Twilogo} alt="" />
                                                <img className='ms-3' src={Inlogo} alt="" />
                                                <img className='ms-3' src={Intralogo} alt="" />
                                                <img className='ms-3' src={Sklogo} alt="" />
                                                <img className='ms-3' src={Gmlogo} alt="" />
                                            </div>
                                        </div>

                                    </Col>


                                    <Col lg={2} md={6} sm={12} className='m-auto pt-4'>

                                        <div>
                                            <h5>Navigations</h5>
                                            <p className='m-0' onClick={tomain}> Home</p>
                                            <p className='m-0' onClick={toabout}> About Us</p>
                                            <p className='m-0' onClick={toservice}> Services</p>
                                            <p className='m-0' onClick={toportfolio}> Portfolio</p>
                                            <p className='m-0' onClick={topage}> Jobs</p>
                                            <p className='m-0' onClick={tocontact}> Contact Us</p>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12} className='m-auto  pt-5'>
                                        <div>
                                            <h5>Services</h5>
                                            <p className='m-0'> Web Development</p>
                                            <p className='m-0'> Digital Marketing</p>
                                            <p className='m-0'> Application Development</p>
                                            <p className='m-0'> E-Commerce Solution</p>
                                            <p className='m-0'> Backup & Security</p>
                                            <p className='m-0'> Enterprise Software Services</p>
                                            <p className='m-0'> IT Support</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={12} className='m-auto pt-5'>

                                        <div>
                                            <h5>Get in touch</h5>
                                            <div className='d-flex pt-2'>
                                                <img src={LocatinIcon} className='mb-4' alt="" />
                                                <h6 className='ms-3 pt-1 lh-base'>207, Dhara trade center,
                                                    Mahadev Chowk,
                                                    Mota varachha, Surat
                                                    394101
                                                </h6>
                                            </div>
                                            <div className='d-flex pt-2'>
                                                <img src={CallIcon} alt="" />
                                                <h6 className='ms-3 pt-1'>+91 999-888-0845</h6>
                                            </div>
                                            <div className='d-flex pt-2'>
                                                <img src={MailIcon} alt="" />
                                                <h6 className='ms-3 pt-1'>info@xmtechnologoies.com</h6>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
