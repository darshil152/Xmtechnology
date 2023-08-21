import React from 'react'
import './Home.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Container from 'react-bootstrap/Container';
import firebaseApp from './Firebase/firebase';
import PhoneInput from 'react-phone-number-input';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import icon1 from './assets/Image/circle.svg';
import Image1 from './assets/Image/code 1.png';
import Image2 from './assets/Image/cart 1.png';
import Image3 from './assets/Image/content 1.png';
import Image4 from './assets/Image/document 1.png';

import service1 from "./assets/Image/service1.png"
import service2 from "./assets/Image/service2.png"
import service3 from "./assets/Image/service3.png"



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


    const submitform = () => {
        let obj = {
            Name: name,
            PhoneNo: value,
            Email: email,
            Message: message,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("ContactUs").add(obj)

                .then((docRef) => {

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

    return (
        <>
            <div className="bg-image">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <p className='solutions'> Cutting-Edge IT Solutions: Empowering Your Digital Transformation</p>
                                <h6 className='unlock'>Unlocking Business Potential Through Expert IT Solutions. Seamlessly tailored for growth.</h6>
                                <button className='btn btn-primary contact'>Contact Us</button>
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
                                        <img src={icon1} className='icon1' alt="" />
                                    </div>

                                    <p className='p-3'>We offer professional web design services at affordable rates to help your
                                        business attract more visitors and keep them on your site!</p>
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='dic'>
                            <Col lg={4} md={6}>
                                <div className='border  m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Web Development</h4>
                                    <p className='web'>Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.</p>
                                    <Button variant="primary" className='ps-4 pe-4 mt-4 pt-2 pb-2 rounded-0'>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services '>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image2} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Digital Marketing</h4>
                                    <p className='pt-2 web' >By utilizing social media and paid advertising, we help small and medium businesses succeed online.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image3} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Application Development</h4>
                                    <p className='pt-2 web'>React Native, Flutter, Native Android, Native iOS. Our team thrives on methodological and technical challenges.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>E-Commerce Solutions</h4>
                                    <p className='web'>Provide e-commerce websites and applications for companies to sell online. E-commerce websites with online payment solutions are our specialty.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Backup & Security</h4>
                                    <p className='pt-2 web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 mt-3 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className='border   m-auto text-center p-4 mt-2 ms-2 me-3 mb-2 services'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={35} src={Image1} alt="" />
                                    </div>
                                    <h4 className='fw-bold pt-3'>Enterprise Software Services</h4>
                                    <p className='web'>SMBs succeed online with us. Security and backup are included. Our daily backups give you 100% security.</p>
                                    <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2  rounded-0 '>LEARN MORE</Button>{' '}
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
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


            <div className="background-work">
                <div className="container">
                    <div className="row aligns">
                        <div className="d-flex align-items-center">
                            <div className="col-lg-7">
                                <h6 className="human">THE HUMAN ELEMENT</h6>
                                <p className='secret'>What's our secret? <br />
                                    Great people.</p>
                                <p className='texts'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </p>
                                <button className='findout'> Find out more</button>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <img
                                    src={service1}
                                    className='mt-5 ms-auto rounded-5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='pt-4 pb-4 mt-5 backgrounds'>
                <Container >
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
                                src={img1}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={img2}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Wintry Mountain Landscape"
                            />
                            <img
                                src={img3}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Mountains in the Clouds"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={img4}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Mountains in the Clouds"
                            />

                            <img
                                src={img5}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src={img6}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Boat on Calm Water"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={img7}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Waves at Sea"
                            />

                            <img
                                src={img8}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Yosemite National Park"
                            />

                            <img
                                src={img9}
                                class="w-100 shadow-1-strong rounded mb-4 grids"
                                alt="Yosemite National Park"
                            />
                        </div>
                    </div>
                    <h3 className='fw-bold text-light text-center mt-5 '>Intelligent Websites That Work Overtime
                        For Marketing Results
                    </h3>
                </div>
            </div >




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
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">   {countetOn && <CountUp start={0} end={1} duration={5} delay={0}></CountUp>}
                                K+
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

                <div className="main">
                    <div className="name p-3">

                        <input type="text" name="name" id="name" placeholder='Name' onChange={handlename} />
                    </div>

                    <div className="phno p-3">
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} />
                    </div>
                    <div className="email p-3">
                        <input type="email" name="email" id="email" placeholder='Email' onChange={handlemail} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <textarea name="" id="" cols="100" rows="5" placeholder='Your message' onChange={handlemessage}></textarea>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12 text-center">
                        <Button variant='primary rounded-0' className='text-center' onClick={submitform}>Send Message</Button>
                    </div>
                </div>


            </div>



        </>
    )
}
