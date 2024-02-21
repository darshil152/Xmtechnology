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
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import men from "./assets/Image/download (2).jpg"
import women from "./assets/Image/download (3).jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { PopupWidget } from "react-calendly";

export default function About() {
    const navigate = useNavigate();

    const [isOpen, setIsopen] = useState(false)


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
        navigate("/hire/dev")
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
                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Foffice.png?alt=media&token=6fe7c2f6-3ec8-4ed6-aaad-650337c1e533"} className='img-fluid rounded-4 ms-auto chairs' />
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


                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Carousel indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                            <li data-target="#myCarousel" data-slide-to={3} />
                            <li data-target="#myCarousel" data-slide-to={4} />
                            <li data-target="#myCarousel" data-slide-to={5} />
                            <li data-target="#myCarousel" data-slide-to={6} />
                            <li data-target="#myCarousel" data-slide-to={7} />

                        </ol>
                        {/* Wrapper for carousel items */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-box">
                                    <img src={women} alt="" />
                                </div>
                                <p className="testimonial">
                                    I'm so glad I found Akash's team. XM Technologies have a team of experienced IT professionals who are able to handle any problem I throw their way. I'm a very satisfied. Thank you so much akash !!
                                </p>
                                <p className="overview">
                                    <b>Silvia Tucker
                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />
                                </div>
                                <p className="testimonial">
                                    I had a very positive experience with XM Technologies. They were very responsive to my needs and they delivered very good works that was exactly what I wanted. I would definitely recommend them to anyone looking for web development services.
                                </p>
                                <p className="overview">
                                    <b>Zak Edris</b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />

                                </div>
                                <p className="testimonial">
                                    We were looking for permanent based software development company to help us to grow our business. We found Akash and were very impressed with their portfolio and their team's expertise. They were able to understand our needs and deliver a website that exceeded our expectations. We would definitely recommend XM Technologies to anyone looking for a reliable and experienced software development company
                                </p>
                                <p className="overview">
                                    <b>Lary Bautista
                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={women} alt="" />

                                </div>
                                <p className="testimonial">
                                    We needed to improve the security of our software applications. We contacted XM Technologies and they were able to assess our needs and implement a number of security measures that have made our applications much more secure. The team was very knowledgeable and professional, and they were able to deliver the project on time and within budget. We would definitely recommend XMT to anyone looking to improve the security of their software                                </p>
                                <p className="overview">
                                    <b>Suminthra Binda
                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />

                                </div>
                                <p className="testimonial">
                                    I would definitely recommend XM Technologies to anyone looking for natural language processing development services. We needed to develop an AI-powered natural language processing system. Akash helped us to do this, and the system has been very powerful. We have been able to use the system to extract insights from text data, and we have been able to make better decisions based on this data. I had great working with XM Tech. I like Akash's passion related the work.</p>
                                <p className="overview">
                                    <b>Salavador Espejo

                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />

                                </div>
                                <p className="testimonial">
                                    The services I received from XM Technologies was excellent. They were very responsive to my questions and they went above and beyond to make sure that I was satisfied with the data collection process. I would definitely use this company again.</p>
                                <p className="overview">
                                    <b>Indian TTS
                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />

                                </div>
                                <p className="testimonial">
                                    Hi Akash !! Your team was a pleasure to work with. They were friendly, professional, and knowledgeable. I would definitely work with your company again</p>
                                <p className="overview">
                                    <b>Gabriela Lopez

                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={men} alt="" />

                                </div>
                                <p className="testimonial">
                                    The team at XM Technologies was incredibly responsive and helpful throughout the entire process. They took the time to understand our needs and created a designs that was both beautiful and functional. We are happier with the results.</p>
                                <p className="overview">
                                    <b>Bringo Tech
                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={women} alt="" />

                                </div>
                                <p className="testimonial">
                                    Hi Akash !! Your team was a pleasure to work with. They were friendly, professional, and knowledgeable. I would definitely work with your company again                           <b>Gabriela Lopez


                                    </b>
                                </p>
                                <div className="star-rating">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-star-half-o" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Carousel controls */}
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next" >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
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
                                            <p className='m-0'> Digital Marketing </p>
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
                                                <h6 className='ms-3 pt-1 lh-base'>205, Dhara trade center,
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
