import React from 'react'
import './Home.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import firebaseApp from './Firebase/firebase';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import icon1 from './assets/Image/circle.svg';
import Image1 from './assets/Image/code 1.png';
import Image2 from './assets/Image/cart 1.png';
import Image3 from './assets/Image/content 1.png';
import Image4 from './assets/Image/document 1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";

import Logo from './assets/Image/XM.png';

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


import service1 from "./assets/Image/service1.png"
import service2 from "./assets/Image/service2.png"
import service3 from "./assets/Image/service3.png"
import { useNavigate } from "react-router-dom";

import 'react-phone-number-input/style.css'


import img1 from "./assets/Image/img1.png"
import img2 from "./assets/Image/img2.png"
import img3 from "./assets/Image/img3.png"
import img4 from "./assets/Image/img4.png"
import img5 from "./assets/Image/img5.png"
import img6 from "./assets/Image/img6.png"
import img7 from "./assets/Image/img7.png"
import img8 from "./assets/Image/img8.png"
import img9 from "./assets/Image/img9.png"
import img10 from "./assets/Image/img10.png"


export default function Service() {

    const navigate = useNavigate();



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
            PhoneNo: value,
            Email: values.email,
            Message: message,
            id: makeid(5)
        }

        console.log(obj)

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("ContactUs").add(obj)

                .then((docRef) => {
                    navigate("/")

                    setname("")
                    setValue("")
                    setemail("")
                    setmessage("")
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



    const tomain = () => {
        navigate("/")
    }

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

            <div className="bg-image">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <p className='solutions'> Cutting-Edge IT Solutions: Empowering Your Digital Transformation</p>
                                <h6 className='unlock'>Unlocking Business Potential Through Expert IT Solutions. Seamlessly tailored for growth.</h6>
                                <button className='btn btn-primary contact' onClick={tocontact}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>


            <div className="background-work mt-5">
                <div className="container">
                    <div className="row aligns">
                        <div className="d-flex align-items-center">
                            <div className="col-lg-7">
                                <h6 className="human">THE HUMAN ELEMENT</h6>
                                <p className='secret'>What's our secret? <br />
                                    Great people.</p>
                                <p className='texts'>Behind every technological marvel and information breakthrough, there's an unsung hero – the people who make it all happen. At our information and technology website, we understand that the real magic lies in the collaboration, expertise, and passion of the individuals who drive innovation forward. Our secret ingredient? It's simple: great people.
                                </p>
                                <button className='findout'> Find out more</button>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <img
                                    src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fservice1.png?alt=media&token=a07d78be-d8a7-4955-a027-5d40827c3e44"}
                                    className='mt-5 ms-auto rounded-5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='pt-4 pb-4 mt-5 backgrounds'>
                <Container data-aos="zoom-out" data-aos-duration="1500" >
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <div className='text-center '>
                                    <div className='d-flex '>
                                        <h2 className='fw-bold m-auto'>How it is going?</h2>
                                        <img src={icon1} className='icon2' alt="" />
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
                                <div className='d-flex pt-4 dica'>
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



            <div className="container-fluid works">
                <h1 className='text-center text-light' >Our Work</h1>
                <p className='text-center mb-5 text-light'>A variety of creative capabilities under one roof</p>

                <div className="container">
                    <div className="row">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg1.png?alt=media&token=d123657a-8a89-4d8b-b031-391a846cf582"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg2.png?alt=media&token=292f37bd-0f4a-4bc4-98f3-a74e7a1649a8"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Wintry Mountain Landscape"
                            />
                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg3.png?alt=media&token=218ed0a2-1aa9-465b-8cee-58bc491da067"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Mountains in the Clouds"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg4.png?alt=media&token=d09a5411-9129-4792-bbeb-e388f62b701c"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Mountains in the Clouds"
                            />

                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg5.png?alt=media&token=fd33c58f-a4bc-46ce-b370-08543ab15f7a"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg6.png?alt=media&token=6f267782-aafd-4b47-8ee6-17f77b60cdf3"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg7.png?alt=media&token=ea728e04-191d-47e8-952b-1eb3f4164c53"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Waves at Sea"
                            />

                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg8.png?alt=media&token=773e6146-1283-43cf-b0cf-6a03a6f494ac"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Yosemite National Park"
                            />

                            <img
                                src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fimg9.png?alt=media&token=a28c6a7c-9e62-4252-9d90-d3a57a0fac44"}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Yosemite National Park"
                            />
                        </div>
                    </div>

                </div>
            </div>




            <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
                <div className="container-fluid conters">
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
                                                <a className='mails' href="mailto:info@xmtechnologies.com">
                                                    <h6 className='ms-3 pt-1'>info@xmtechnologies.com</h6></a>

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
