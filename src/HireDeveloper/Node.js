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
import firebaseApp from '../Firebase/firebase';
import { Formik } from 'formik';
import * as Yup from "yup";

import Logos from '../assets/Image/XM.svg';
import CallIcon from '../assets/Image/phone 2.svg';
import MailIcon from '../assets/Image/mail 1.svg';
import LocatinIcon from '../assets/Image/pin 1.svg';
import Fblogo from '../assets/Image/facebook 1.svg';
import Twilogo from '../assets/Image/twitter 1.svg';
import Inlogo from '../assets/Image/in.png';
import Intralogo from '../assets/Image/instagram-sketched 1.svg';
import Sklogo from '../assets/Image/skype 1.svg';
import Gmlogo from '../assets/Image/gmail 1.svg';


import one from "../assets/HireImage/deep-learning.png"
import two from "../assets/HireImage/web-developers.svg"
import three from "../assets/HireImage/ai-ml-engineers.svg"
import four from "../assets/HireImage/UseEcp.png"
import five from "../assets/HireImage/software-development.png"
import six from "../assets/HireImage/dev.png"
import api from "../assets/HireImage/api.png"
import mobile from "../assets/HireImage/mobilede.png"
import { useNavigate } from "react-router-dom";

export default function Node() {



    const [fname, setFname] = useState("")
    const [email, setemail] = useState("")
    const [team, setteam] = useState("")
    const [contact, setcontact] = useState("")
    const [message, setmessage] = useState("")

    const [Tname, setTFname] = useState("")
    const [Temail, setTemail] = useState("")
    const [Tcontact, setTcontact] = useState("")
    const [Tmessage, setTmessage] = useState("")
    const navigate = useNavigate();


    const saveTrial = () => {
        let obj = {
            Name: Tname,
            PhoneNo: Tcontact,
            Email: Temail,
            Message: Tmessage,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Trial").add(obj)

                .then((docRef) => {
                    navigate("/")

                    setTFname("")
                    setTemail("")
                    setTcontact("")
                    setTmessage('')
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

    const savedata = (values) => {

        console.log(values)
        let obj = {
            Name: values.fname,
            PhoneNo: values.contact,
            Email: values.email,
            Message: message,
            team: team,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("HireDev").add(obj)

                .then((docRef) => {
                    navigate("/")

                    setFname("")
                    setemail("")
                    setcontact("")
                    setteam("")
                    setmessage('')
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

    const tomain = () => {
        navigate("/")

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
                            <Button variant="primary" className='rounded-5' onClick={tocontact}>Contact Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container mt-5 ">
                <div className="row">

                    <div className="col-lg-6">
                        <h1 className='hire'>Hire node  Developers</h1>
                        <p className='para'><b>Hire nodeJs developers</b> that use the combination of the latest technology and a client-centric approach for delivering data-intensive web and mobile applications. We have a team of 25+ highly experienced Node.js developers that uses databases like MySQL, MongoDB, SQL, and many more to create highly productive enterprise-grade networking solutions.</p>
                        <ul>
                            <li>Custom Node.js Development</li>
                            <li>Real-time Application Development
                            </li>
                            <li>Node.js Migration
                            </li>
                            <li>Maintenance and Upgradation
                            </li>
                            <li>Node.js Enterprise Web Apps
                            </li>
                        </ul>

                        <button className='btn btn-primary mt-2'>Let Discuss about the react Project</button>
                    </div>

                    <div className="col-lg-6  mt-5 mt-sm-0  studentdetail " >
                        <div className='test'>


                            <h1 style={{ textAlign: "center", marginBottom: "35px" }}>Get Free Consultation Now</h1>
                            <p className='text-center'>Set up a developer interview and hire within 48 hours</p>

                            <Formik
                                initialValues={{ fname: "", email: "", contact: "", }}
                                onSubmit={(values, { setSubmitting }) => {
                                    savedata(values)
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email()
                                        .required("Email Required"),
                                    fname: Yup.string()
                                        .required("Name Required"),
                                    contact: Yup.string()
                                        .required("contact Required"),

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
                                            <form onSubmit={handleSubmit}>
                                                <div className="container-fluid">

                                                    <div className="row ">
                                                        <div className="col-lg-12">
                                                            <input
                                                                name="fname"
                                                                type="text"
                                                                id='name'
                                                                style={{ width: "100%" }}

                                                                placeholder="Enter your fname"
                                                                value={values.fname}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={errors.fname && touched.fname && "error-input"}
                                                            />
                                                            {errors.fname && touched.fname && (
                                                                <div className="input feedback">{errors.fname}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="row mt-4">
                                                        <div className="col-lg-12">
                                                            <input
                                                                name="email"
                                                                type="text"
                                                                id='name'
                                                                style={{ width: "100%" }}

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
                                                    </div>


                                                    <div className="row mt-3">
                                                        <select className='text-input inputstyle' id='name' style={{ width: "95%" }} value={team} onChange={(e) => setteam(e.target.value)}>
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



                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-12">
                                                            <input
                                                                name="contact"
                                                                type="tel"
                                                                id='names'
                                                                style={{ width: "100%" }}
                                                                placeholder="Enter your contact"
                                                                value={values.contact}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={errors.contact && touched.contact && "error-input"}
                                                            />
                                                            {errors.contact && touched.contact && (
                                                                <div className="input feedback">{errors.contact}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <textarea name="" id="" cols="70" rows="10" className='ml-3 mr-3' style={{ width: "96%" }} placeholder='Your Message' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>


                                                    </div>


                                                    <div className="row">
                                                        <div className="col-lg-12 mt-4 text-center">
                                                            <button type="submit" className='btn btn-primary text-center rounded-0' style={{ padding: "10px 45px" }} disabled={isSubmitting}>
                                                                Hire Developers
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                            </form >
                                        </>
                                    );
                                }}
                            </Formik>





                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='text-center' style={{ marginTop: "35px" }}>Hire nodeJs Developers As Per Your Business Needs</h1>
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
                            <h1>$2400  <span>Month</span></h1>
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

                    <h1 className='text-center'>Hire Node Developer for various End-to-End Services</h1>
                    <p className='text-center pb-5'>We have a team of elite Node.js developers for hire that creates the best quality non-blocking I/O-based server-side solutions to take your business to the next level. Hire our Node.js experts who use HTTP & RESTful Services to build and deploy different types of REST API services.</p>

                    <div className='dic'>
                        <Col lg={4} md={6}>
                            <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={mobile} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Mobile Development</h4>
                                <p className='web'>Our team of experts uses Node.js to build server-side components of mobile applications to make them fast and more efficient.</p>
                                <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={api} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>API Development for Node.js</h4>
                                <p className='pt-2 web' >Our Node.js coders have all the necessary knowledge for creating back-end solutions that are high-performing, reliable, and scalable.
                                </p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={five} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Web Application Development</h4>
                                <p className='pt-2 web'>We provide the service of web application development using the most recent Node.js frameworks like ExpressJS, Loopback, SailsJS, etc.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={four} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>UI/UX For Node.js</h4>
                                <p className='web'>To get highly innovative UX/UI design and the creation of effective system monitoring dashboards for your business you need to hire experienced Node.js specialists from us.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={three} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>Customization</h4>
                                <p className='pt-2 web'>We provide different types of robust solutions with the help of Node.js and also offer customized Node.js development services as per your requirements.</p>
                                <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                <div className='d-flex justify-content-center'>
                                    <img width={50} src={six} alt="" />
                                </div>
                                <h4 className='fw-bold pt-3'>integration
                                    Modification and Integration</h4>
                                <p className='web'>integration
                                    Modification and Integration
                                    Our developers can integrate APIs and third-party plugins to modify your application and have various functionalities.</p>
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
                            <input className='text-input input' id='form' type="text" value={Tname} onChange={(e) => setTFname(e.target.value)} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <label htmlFor="Full name ">Email name</label>
                            <input className='text-input input' id='form' type="email" value={Temail} onChange={(e) => setTemail(e.target.value)} />
                        </div>

                        <div className="col-lg-6 mt-4">
                            <label htmlFor="Full name ">Number</label>
                            <input className='text-input input' id='form' type="tel" value={Tcontact} onChange={(e) => setTcontact(e.target.value)} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            <label htmlFor="Full name ">Message</label>
                            <textarea name="" id="" cols="255" rows="10" className='text-input input' value={Tmessage} onChange={(e) => setTmessage(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="row mt-5 text-center">
                        <button className='btn btn-primary rounded-5 m-auto w-50' style={{ padding: "10px 5px" }} onClick={saveTrial}>Submit</button>
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
