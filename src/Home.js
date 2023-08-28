import React from 'react';
import { useState } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import firebaseApp from './Firebase/firebase';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Formik } from 'formik';
import * as Yup from "yup";

import Logo from './assets/Image/XM.png';
import Logos from './assets/Image/XM.svg';

import { Button, Col, Image, Row } from 'react-bootstrap';
import circle from './assets/Image/Ellipse 19.png';

import Img1 from './assets/Image/Vector 4.png';
import Img2 from './assets/Image/470be6e4dfc04d543155399e7ffdee85.png';
// import mainimage from "./assets/Image/mainimage.png"
// import mainimage from "./assets/Image/18147.jpg"
import mainimage from "./assets/Image/programmer_v_02.jpg"

import image1 from './assets/Image/Human-touch 1.png';
import image2 from './assets/Image/indeed 1.png';
import image3 from './assets/Image/The-Stanlee-foundation 1.png';
import image4 from './assets/Image/Dmarc 1.png';
import image5 from './assets/Image/Dani-Felt 1.png';
import image6 from './assets/Image/Sallie-Math-Tutor_ 1.png';

import icon1 from './assets/Image/circle.svg';

import Image1 from './assets/Image/code 1.png';
import Image2 from './assets/Image/cart 1.png';
import Image3 from './assets/Image/content 1.png';
import Image4 from './assets/Image/document 1.png';

import CallIcon from './assets/Image/phone 2.svg';
import MailIcon from './assets/Image/mail 1.svg';
import LocatinIcon from './assets/Image/pin 1.svg';

import Fblogo from './assets/Image/facebook 1.svg';
import Twilogo from './assets/Image/twitter 1.svg';
import Inlogo from './assets/Image/in.png';
import Intralogo from './assets/Image/instagram-sketched 1.svg';
import Sklogo from './assets/Image/skype 1.svg';
import Gmlogo from './assets/Image/gmail 1.svg';


import reactlogo from "./assets/Image/react_native_color.svg"
import flutter from "./assets/Image/flutter_color.svg"
import angular from "./assets/Image/angular_color.svg"
import python from "./assets/Image/paython_color.svg"
import ruby from "./assets/Image/ruby_color.svg"
import node from "./assets/Image/node_js_color.svg"
import laravel from "./assets/Image/laravel.png"
import dedicated from "./assets/Image/dedicated-deveoper-bg.webp"
import mysql from "./assets/Image/mysql.png"
import bacgrounds from "./assets/Image/background.png"
import bgImg from './assets/Image/2752392-removebg-preview 1.png';




const Home = () => {


    useEffect(() => {

        AOS.init();
    }, [])


    const [countetOn, setCounteron] = useState(false)
    const [value, setValue] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [message, setmessage] = useState()


    const handlename = (e) => {
        setname(e.target.value)
    }


    const handlemail = (e) => {
        setemail(e.target.value)
    }

    const handlemessage = (e) => {
        setmessage(e.target.value)
    }




    const submitform = (values) => {

        let obj = {
            Name: values.name,
            PhoneNo: values.number,
            Email: values.email,
            Message: message,
            id: makeid(5)
        }

        console.log(obj)

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("ContactUs").add(obj)

                .then((docRef) => {

                    setname("")
                    setValue("")
                    setemail("")
                    setmessage("")
                    navigate("/")

                    console.log("Document written with ID: ", docRef);
                    resolve(docRef.id);
                })
                .catch((error) => {
                    console.error("Please check form again ", error);
                    reject(error);
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
        }).catch(error => {
            console.error(error)
        })


    }

    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const navigate = useNavigate();


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
                            <Button variant="primary" className='rounded-5' onClick={tocontact}>Contact Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





            <div>
                <Container fluid>
                    <Row>
                        <div className='dsid'>
                            <div className='div-container '>
                                <Col lg={6} md={8} className='mt-5' data-aos="fade-right">
                                    <div className='d-flex justify-content-center text-div'>
                                        <div className='circle1'></div>
                                        <div className='ms-lg-4' data-aos="fade-right" data-aos-duration="1500">
                                            <h1 className='fw-bold designs' style={{ fontSize: "50px" }}>Web Design And <br />
                                                Development Company
                                            </h1>

                                            <p className='web create mt-4' style={{ fontSize: "23px" }}>We create clean and creative websites that are professional and help <br />
                                                you generate more visitors  and revenue.</p>

                                            <Button variant="primary" className='rounded-5 ps-4 mt-4 pe-4 pt-2 pb-2 fs-5'>Get Started</Button>{' '}

                                            <div data-aos="fade-left" data-aos-duration="2000">
                                                <img width={50} className='pt-3  ms-5 mt-4 circle' src={circle} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div data-aos="fade-left" data-aos-duration="2000">
                                        <img className=' img-fluid ' src={mainimage} alt="" />
                                    </div>

                                </Col>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='pb-5 horizontal'>
                <Container>
                    <Row>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image1} className='img-fluid pt-4' alt="" />
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image2} className='img-fluid pt-4' alt="" />
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image3} className='img-fluid pt-4' alt="" />
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image4} className='img-fluid pt-4' alt="" />
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image5} className='img-fluid pt-4' alt="" />
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={6}>
                            <img src={image6} className='img-fluid pt-4' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>




            <div className='pt-4  mt-5 backgrounds'>
                <Container >
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <div className='text-center '>
                                    <div className=''>
                                        <h2 className='fw-bold m-auto'>How it is going?</h2>
                                    </div>

                                    <p className='p-3 web' >We offer professional web design services at affordable rates to help your
                                        business attract more visitors and keep them on your site!</p>
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='dic'>
                            <Col lg={4} md={6} sm={6}>
                                <div className=' dica'>
                                    <div>
                                        <h4>Info Gathering</h4>
                                        <p className='Info'>Need a good understanding of what are
                                            your business goals and dreams.
                                        </p>
                                        <div className='width-div'><hr /></div>
                                    </div>
                                    <div className='image-div'></div>
                                </div>

                            </Col>
                            <Col lg={4} md={6} sm={6}>

                                <div className='d-flex pt-4 dica'>
                                    <div>
                                        <h4>Planning</h4>
                                        <p className='Info'>We will help you to decide what
                                            technologies should be implemented.
                                        </p>
                                        <div className='width-div'><hr /></div>
                                    </div>
                                    <div className='image-div1'></div>
                                </div>

                            </Col>
                            <Col lg={4} md={6} sm={6}>
                                <div className='d-flex pt-4 dica'>
                                    <div>
                                        <h4>Design</h4>
                                        <p className='Info'>It’s time to determine the look and
                                            feel of your site.
                                        </p>
                                        <div className='width-div'><hr /></div>
                                    </div>
                                    <div className='image-div2'></div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={6}>
                                <div className='d-flex pt-4 dica'>
                                    <div>
                                        <h4>Development</h4>
                                        <p className='Info'>Writing valid HTML / CSS code that
                                            complies to current web standards.
                                        </p>
                                        <div className='width-div'><hr /></div>
                                    </div>
                                    <div className='image-div3'></div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                                <div className='d-flex pt-4 dica'>
                                    <div>
                                        <h4>Testing and Launch</h4>
                                        <p className='Info'>Testing of the complete functionality
                                            of forms and scripts etc.
                                        </p>
                                        <div className='width-div'><hr /></div>
                                    </div>
                                    <div className='image-div4'></div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className='mt-3 mb-3 mt-sm-5 bg1' style={{ width: "100%" }}>
                <Container>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <div className='text-center '>
                                    <div className='d-flex'>
                                        <h2 className='fw-bold m-auto'>Our Services</h2>
                                    </div>

                                    <p className='p-3'>We offer professional web design services at affordable rates to help your
                                        business attract more visitors and keep them on your site!</p>
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='dic'>
                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Web Development</h4>
                                    <p className='web'>Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.</p>
                                    <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image2} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Digital Marketing</h4>
                                    <p className='pt-2 web' >By utilizing social media and paid advertising, we help small and medium businesses succeed online.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image3} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Application Development</h4>
                                    <p className='pt-2 web'>React Native, Flutter, Native Android, Native iOS. Our team thrives on methodological and technical challenges.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>E-Commerce Solutions</h4>
                                    <p className='web'>Provide e-commerce websites and applications for companies to sell online. E-commerce websites with online payment solutions are our specialty.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Backup & Security</h4>
                                    <p className='pt-2 web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Enterprise Software Services</h4>
                                    <p className='web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                                <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services' >
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image4} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>IT Support</h4>
                                    <p className='web'>We maintain websites for small, medium, and large businesses. Your existing website is regularly updated.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                        </div>
                    </Row>
                </Container>
            </div >

            <div className='mt-5 mb-4 mt-5'>
                <Container>
                    <Row className='mt-5'>



                    </Row>
                </Container>
            </div>

            <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
                <div className="container-fluid conter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">
                                {countetOn && <CountUp start={0} end={8} duration={5} delay={0}></CountUp>}
                                +
                                <br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Years of <br />
                                    Experience

                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter" >   {countetOn && <CountUp start={0} end={40} duration={5} delay={0}></CountUp>}
                                +<br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Expert <br />
                                    TeamMember
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">   {countetOn && <CountUp start={0} end={150} duration={5} delay={0}></CountUp>}
                                +
                                <br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Project <br />
                                    Complete
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">   {countetOn && <CountUp start={0} end={100} duration={5} delay={0}></CountUp>}
                                %
                                <br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Clients <br />
                                    Satisfied
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollTrigger>


            <div className="container" data-aos="fade-up" data-aos-duration="1500">
                <div className="row text-center formargin " >
                    <div className="col-lg-12">
                        <h1 style={{ fontWeight: "900" }}>Hire Our Dedicated Developers</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="card hiring" >
                                    <div className="row ">
                                        <h4 className='text-center'>Hire Mobile developer</h4>
                                        <div className="col-lg-6 col-md-6 text-center">
                                            <div className="hiringss">
                                                <img src={reactlogo} className='img-flui' />
                                            </div>
                                            React Native
                                        </div>
                                        <div className="col-lg-6 col-md-6 text-center">
                                            <div className="hiringss">
                                                <img src={flutter} className='img-flui' />
                                            </div>
                                            Flutter
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div class="card hiring" >
                                    <div className="row ">
                                        <h4 className='text-center'>Hire Frontend developer</h4>
                                        <div className="col-lg-6 col-md-6 text-center">
                                            <div className="hiringss">
                                                <img src={angular} className='img-flui' />
                                            </div>
                                            Angular
                                        </div>
                                        <div className="col-lg-6 col-md-6 text-center">
                                            <div className="hiringss">
                                                <img src={reactlogo} className='img-flui' />
                                            </div>
                                            React
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 hiring">
                            <h4 className='mb-4'>Hire Backend developer</h4>
                            <div className="col-lg-3 col-md-3 text-center">
                                <div className="hiringss">
                                    <img src={python} className='img-flui' />
                                </div>

                                python
                            </div>
                            <div className="col-lg-3 col-md-3 text-center">
                                <div className="hiringss">
                                    <img src={laravel} className='img-flui' height={60} width={60} />
                                </div>
                                laravel
                            </div>
                            <div className="col-lg-3 col-md-3 text-center">
                                <div className="hiringss">
                                    <img src={node} className='img-flui' />
                                </div>
                                node
                            </div>
                            <div className="col-lg-3 col-md-3 text-center">
                                <div className="hiringss">
                                    <img src={mysql} className='img-flui' height={70} width={70} />
                                </div>
                                mysql
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="overlasy">
                            <img src={dedicated} className='' style={{ aspectRatio: "1/1" }} />
                        </div>
                    </div>
                </div>

            </div>



            <div className='mt-4 mb-4 '>
                <Container>
                    <Row style={{ marginTop: "100px" }}>
                        <Col lg={6} className='text-center m-auto'>
                            <h3 className='fw-bold'>What We Offer</h3>
                        </Col>
                    </Row>


                    <Row>
                        <div className='dic'>
                            <Col lg={4}>
                                <div className='end-div p-3'>
                                    <div data-aos="fade-left" data-aos-duration="1500">
                                        <h5 className='idea' style={{ fontSize: "20px" }}> Blazing Fast & Enhanced
                                            Site Performance.</h5>
                                        <p className='web' style={{ fontSize: "15px" }}>Building a high-performing site to engage your users  </p>
                                    </div>
                                    <div data-aos="fade-right" data-aos-duration="1500">
                                        <h5 className='idea' style={{ fontSize: "20px" }}>Design Thinking
                                            with Embedded Innovation</h5>
                                        <p className='web' style={{ fontSize: "15px" }}>Delivering effective web strategies with structured IT solutions to boost your site performance</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <img className='img-fluid' src={bgImg} alt="" data-aos="fade-down" data-aos-duration="1500" />
                            </Col>
                            <Col lg={4}>
                                <div className='p-3'>
                                    <div data-aos="fade-left" data-aos-duration="1500">
                                        <h5 className='idea' style={{ fontSize: "20px" }}>Expanding Capabilities
                                        </h5>
                                        <p className='web' style={{ fontSize: "15px" }}>Supporting our partners with in-depth insights analysis </p>
                                    </div>
                                    <div data-aos="fade-right" data-aos-duration="1500">
                                        <h5 className='idea' style={{ fontSize: "20px" }}>Optimizing Business Environment
                                            Results</h5>
                                        <p className='web' style={{ fontSize: "15px" }}>Providing premium services to transform business challenges into optimised results </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>


            <div data-aos="flip-left" data-aos-duration="1500" >
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



            <div className='bg-color-componet '>
                <div className='Grop text-light'>
                    <Container>
                        <Row>
                            <div className='dics'>
                                <Col lg={2} md={6} sm={6} xs={12} >
                                    <div className='pt-4'>
                                        <h2 className='contact'>Contacts</h2>
                                    </div>
                                </Col>


                                <Col lg={3} md={6} sm={6} xs={12} >
                                    <div className='pt-4'>
                                        <div className='d-flex pt-4'>
                                            <img src={CallIcon} alt="" />
                                            <h6 className='ms-3 pt-1'>+91 999-888-0845</h6>
                                        </div>

                                        <div className='d-flex pt-4'>
                                            <img src={MailIcon} alt="" />
                                            <h6 className='ms-3 pt-1'>info@xmtechnologoies.com</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6} xs={12} >
                                    <div className='d-flex '>
                                        <img src={LocatinIcon} alt="" className='mt-4' />
                                        <h6 className='ms-3 pt-1 mt-4 address lh-base'>207, Dhara trade center,
                                            Mahadev Chowk,
                                            Mota varachha, Surat
                                            394101
                                        </h6>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} sm={6} xs={12} className='pt-4 pl-3 d-flex'>
                                    <img src={Fblogo} alt="" />
                                    <img className='ms-3' src={Twilogo} alt="" />
                                    <img className='ms-3' src={Inlogo} alt="" />
                                    <img className='ms-3' src={Intralogo} alt="" />
                                    <img className='ms-3' src={Sklogo} alt="" />
                                    <img className='ms-3' src={Gmlogo} alt="" />
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="container message">
                <div className="row">
                    <div className="col-lg-12 ">
                        <h2 className='text-center question mt-5' >Still have questions?</h2>
                        <p className="mt-3 text-center web">We’re ready to answer your questions and jump start your project</p>
                    </div>
                </div>


                <Formik
                    initialValues={{ email: "", name: "", number: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        submitform(values)
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Email Required"),
                        name: Yup.string()
                            .required("Name Required"),

                    })}

                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (
                            <>
                                <div className="main">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-4 centerrr mt-3">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    id='name'
                                                    placeholder="Enter your name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.name && touched.name && "error-input"}
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="input feedback">{errors.name}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-4 centerrr mt-3">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    id='email'
                                                    placeholder="Enter your email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.email && touched.email && "error-input"}
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input feedback">{errors.email}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-4 centerrr mt-3">
                                                <PhoneInput
                                                    style={{ width: "315px" }}
                                                    placeholder="Enter phone number"
                                                    value={value}
                                                    onChange={setValue} />
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-4 text-center">
                                                <textarea name="" id="" cols="120" rows="5" value={message} placeholder='Your message' onChange={handlemessage}></textarea>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-lg-12 mt-4 text-center">
                                                <button type="submit" className='btn btn-primary text-center rounded-0' style={{ padding: "10px 45px" }} disabled={isSubmitting}>
                                                    SUBMIT
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </>
                        );
                    }}
                </Formik>








            </div >


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
                                            <p className='m-0' > Home</p>
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
    );
};

export default Home;