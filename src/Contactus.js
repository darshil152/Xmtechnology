import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Logo from './assets/Image/XM.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import { Formik } from 'formik';
import * as Yup from "yup";
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
import firebaseApp from './Firebase/firebase';
import { useNavigate } from 'react-router-dom';


export default function Contactus() {

    const navigate = useNavigate();


    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [Contact, setContact] = useState('')
    const [address, setaddress] = useState('')

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

    const savedata = (values) => {

        console.log(values)
        let obj = {
            Name: values.fname,
            lname: values.lname,
            PhoneNo: values.number,
            Email: values.email,
            address: address,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Contact").add(obj)

                .then((docRef) => {
                    setName("")
                    setLname("")
                    setContact("")
                    setEmail("")
                    setaddress("")
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






    return (
        <>
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="" className='img-fluid' onClick={tomain} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="" onClick={toabout}>About Us</Nav.Link>
                            <Nav.Link href="" onClick={toservice}>Services</Nav.Link>
                            <Nav.Link href="" onClick={toportfolio}>Portfolio</Nav.Link>
                            <Nav.Link href="" onClick={topage}>Jobs</Nav.Link>
                            <Nav.Link href="" onClick={tohire}>Hire</Nav.Link>
                            <Button variant="primary" className='rounded-5'>Contact  Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className="container-fluid contactbg">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 className='mt-5 contact'>CONTACT US</h1>
                        <p className='web' style={{ fontSize: "20px" }}>Let’s talk about what you want to accomplish and how we can make it happen.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid mt-5" >
                <div className="container">
                    <div className="row ">

                        <Formik
                            initialValues={{ fname: "", lname: "", number: '', email: "" }}
                            onSubmit={(values, { setSubmitting }) => {
                                savedata(values)
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required("Email Required"),
                                fname: Yup.string()
                                    .required("fname Required"),
                                lname: Yup.string()
                                    .required("lname Required"),
                                number: Yup.string()
                                    .required("Contact number Required"),


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
                                                    <div className="col-lg-6 mt-4">
                                                        <input
                                                            name="fname"
                                                            type="text"
                                                            id='names'
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


                                                    <div className="col-lg-6 mt-4">
                                                        <input
                                                            name="lname"
                                                            type="text"
                                                            id='names'
                                                            style={{ width: "100%" }}

                                                            placeholder="Enter your lname"
                                                            value={values.lname}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={errors.lname && touched.lname && "error-input"}
                                                        />
                                                        {errors.lname && touched.lname && (
                                                            <div className="input feedback">{errors.lname}</div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="row ">


                                                    <div className="col-lg-6 mt-4">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            id='names'
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

                                                    <div className="col-lg-6 mt-4">
                                                        <input
                                                            name="number"
                                                            type="tel"
                                                            id='names'
                                                            style={{ width: "100%" }}

                                                            placeholder="Enter your message"
                                                            value={values.number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={errors.number && touched.number && "error-input"}
                                                        />
                                                        {errors.number && touched.number && (
                                                            <div className="input feedback">{errors.number}</div>
                                                        )}
                                                    </div>

                                                </div>


                                                <div className="row">
                                                    <div className="col-lg-12 mt-4">
                                                        <textarea name="" cols="255" rows="10" id='forms' style={{ width: "100%" }} value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Enter your address"
                                                        ></textarea>

                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-lg-12 mt-4 mb-5 text-center">
                                                        <button type="submit" className='btn btn-primary text-center rounded-0' style={{ padding: "10px 45px" }} disabled={isSubmitting}>
                                                            SUBMIT
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
                                            <p className='m-0' > Contact Us</p>
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
