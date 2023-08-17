import React from 'react';
import { useState } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import firebaseApp from './Firebase/firebase';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './assets/Image/XM.png';
import Logos from './assets/Image/XM.svg';

import { Button, Col, Image, Row } from 'react-bootstrap';
import circle from './assets/Image/Ellipse 19.png';

import Img1 from './assets/Image/Vector 4.png';
import Img2 from './assets/Image/470be6e4dfc04d543155399e7ffdee85.png';

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


import bgImg from './assets/Image/2752392-removebg-preview 1.png';




const Home = () => {



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
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Portfolio    </Nav.Link>
                            <Nav.Link href="#link">Jobs</Nav.Link>

                            <Button variant="primary" className='rounded-5'>Contact  Us</Button>{' '}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Container fluid>
                    <Row>
                        <div className='dsid'>
                            <div className='div-container '>
                                <Col lg={6} md={8}>
                                    <div className='d-flex text-div'>
                                        <div className='circle1'></div>
                                        <div className='ms-lg-4'>
                                            <h1 className='fw-bold'>Web Design And <br />
                                                Development Company
                                            </h1>

                                            <p className='web'>We create clean and creative websites that are professional and help <br />
                                                you generate more visitors  and revenue.</p>

                                            <Button variant="primary" className='rounded-5 ps-4 pe-4 pt-2 pb-2 fs-5'>Get Started</Button>{' '}

                                            <div>
                                                <img width={50} className='pt-3 ms-5 circle' src={circle} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className='text-end'>
                                        <img width={350} height={130} className='ms-auto' src={Img1} alt="" />
                                        <img className='pt-3 img-fluid imag1' src={Img2} alt="" />

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




            <div className='pt-4 pb-4 mt-5'>
                <Container >
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <div className='text-center '>
                                    <div className='d-flex'>
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

            <div className='mt-3 mb-3 mt-sm-5'>
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

            <div className='mt-4 mb-4 mt-5'>
                <Container>
                    <Row>
                        <Col lg={6} className='text-center m-auto'>
                            <h3 className='fw-bold '>Intelligent Websites That Work Overtime
                                For Marketing Results
                            </h3>
                        </Col>


                    </Row>
                </Container>
            </div>

            <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
                <div className="container-fluid conter">


                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-6 counter">


                                {countetOn && <CountUp start={0} end={25} duration={5} delay={0}></CountUp>}
                                +
                                <br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Years of <br />
                                    Experience

                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter" >   {countetOn && <CountUp start={0} end={38} duration={5} delay={0}></CountUp>}
                                +<br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Expert <br />
                                    TeamMember
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">   {countetOn && <CountUp start={0} end={3} duration={2} delay={0}></CountUp>}
                                K+
                                <br />
                                <p className='pl-3' style={{ fontSize: "25px" }}>
                                    Project <br />
                                    Complete
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 counter">   {countetOn && <CountUp start={0} end={99} duration={3} delay={0}></CountUp>}
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








            <div className='mt-4 mb-4 '>
                <Container>
                    <Row style={{ marginTop: "100px" }}>
                        <Col lg={6} className='text-center m-auto'>
                            <h5 className='text-primary'>OUR SERVICES</h5>
                            <h3 className='fw-bold'>What We Offer</h3>
                        </Col>
                    </Row>


                    <Row>
                        <div className='dic'>
                            <Col lg={4}>
                                <div className='end-div p-3'>
                                    <div>
                                        <h5 className='idea'> Awesome Ideas</h5>
                                        <p className='web'>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. </p>
                                    </div>
                                    <div>
                                        <h5 className='idea'>Web Solution</h5>
                                        <p className='web'>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <img className='img-fluid' src={bgImg} alt="" />
                            </Col>
                            <Col lg={4}>
                                <div className='p-3'>
                                    <div>
                                        <h5 className='idea'>Planning Settings</h5>
                                        <p className='web'>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. </p>
                                    </div>
                                    <div>
                                        <h5 className='idea'>Client Market</h5>
                                        <p className='web'>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>


            <div>
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
                                <Col lg={3} md={6} sm={6} xs={12} >
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
                                        <img src={LocatinIcon} alt="" />
                                        <h6 className='ms-3 pt-1 address lh-base'>207, Dhara trade center,
                                            Mahadev Chowk,
                                            Mota varachha, Surat
                                            394101
                                        </h6>
                                    </div>
                                </Col>

                                <Col lg={3} md={6} sm={6} xs={12} className='pt-4 d-flex'>
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
                                            <p className='m-0'> Home</p>
                                            <p className='m-0'> About Us</p>
                                            <p className='m-0'> Services</p>
                                            <p className='m-0'> Portfolio</p>
                                            <p className='m-0'> Jobs</p>
                                            <p className='m-0'> Contact Us</p>
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