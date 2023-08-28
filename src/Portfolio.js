import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Logo from './assets/Image/XM.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';



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

export default function Portfolio() {

    useEffect(() => {
        AOS.init();


    }, [])

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

                        <img src={img1} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img2} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img3} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img4} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img5} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img6} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img8} className='mb-3' />
                        XM Store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img7} className='mb-3' />
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
