import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Logo from './assets/Image/XM.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";



import CallIcon from './assets/Image/phone 2.svg';
import MailIcon from './assets/Image/mail 1.svg';
import LocatinIcon from './assets/Image/pin 1.svg';

import Fblogo from './assets/Image/facebook 1.svg';
import Twilogo from './assets/Image/twitter 1.svg';
import Inlogo from './assets/Image/in.png';
import Intralogo from './assets/Image/instagram-sketched 1.svg';
import Sklogo from './assets/Image/skype 1.svg';
import Gmlogo from './assets/Image/gmail 1.svg';
import Logos from './assets/Image/XM.svg';


import './Home.css'
import img1 from "./assets/Image/img1.png"
import img2 from "./assets/Image/img2.png"
import img3 from "./assets/Image/img3.png"
import img4 from "./assets/Image/img4.png"
import img5 from "./assets/Image/img5.png"
import img6 from "./assets/Image/img6.png"
import img7 from "./assets/Image/img7.png"
import img8 from "./assets/Image/img8.png"




export default function Portfolio() {

    useEffect(() => {
        AOS.init();


    }, [])

    const navigate = useNavigate();

    const topage = () => {
        navigate("/career")
    }

    const toservice = () => {
        navigate("/service")
    }

    const toabout = () => {
        navigate("/about")
    }

    const toportfolio = () => {
        navigate("/portfolio")
    }

    const tohire = () => {
        navigate("/hire/react")
    }


    const tomain = () => {
        navigate("/")
    }
    const tocontact = () => {
        navigate("/contact")

    }



    return (
        <>
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="" className='img-fluid headerlogo' onClick={tomain} /></Navbar.Brand>
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




            <div className="container" >
                <div className="row mt-5">
                    <div className="col-lg-6">

                        <p className='text-primary mb-4'>OUR WORKS</p>
                        <h1 className='amazing'>Amazing things come from collaboration. Browse our selected work.</h1>
                    </div>
                </div>
            </div>

            <div className="container" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="row mt-5 ">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg4.png?alt=media&token=d09a5411-9129-4792-bbeb-e388f62b701c"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg5.png?alt=media&token=fd33c58f-a4bc-46ce-b370-08543ab15f7a"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg6.png?alt=media&token=6f267782-aafd-4b47-8ee6-17f77b60cdf3"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg7.png?alt=media&token=ea728e04-191d-47e8-952b-1eb3f4164c53"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg8.png?alt=media&token=773e6146-1283-43cf-b0cf-6a03a6f494ac"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg9.png?alt=media&token=a28c6a7c-9e62-4252-9d90-d3a57a0fac44"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg1.png?alt=media&token=d123657a-8a89-4d8b-b031-391a846cf582"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg2.png?alt=media&token=292f37bd-0f4a-4bc4-98f3-a74e7a1649a8"}
                            className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                </div>
            </div>


            <div className="coontainer-fluid make">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className='text-light'>Let's make something br amazing together.</h1>
                        <p className='text-light'>Our futuristic and progressive IT solutions will help you attain your business goals. Contact us to make a massive difference in your business.</p>

                        <button className='us' onClick={tocontact}>Contant Us</button>


                    </div>
                </div>
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
                                                <h6 className='ms-3 pt-1'>+91 9624068750</h6>
                                            </div>
                                            <div className='d-flex pt-2'>
                                                <img src={MailIcon} alt="" />
                                                <a className='mails' href="mailto:info@xmtechnologies.in">
                                                    <h6 className='ms-3 pt-1'>info@xmtechnologies.in</h6></a>

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
