import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Logo from './assets/Image/XM.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';

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

    return (
        <>
            <Navbar expand="lg" className="nav pb-3 pt-4 ">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="">Jobs</Nav.Link>
                            <Nav.Link href="#link">Hire</Nav.Link>
                            <Button variant="primary" className='rounded-5'>Contact  Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className="container" >
                <div className="row mt-5">
                    <div className="col-lg-6">

                        <p className='text-primary mb-4'>OUR WORKS</p>
                        <h1 className=''>Amazing things come from collaboration. Browse our selected work.</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img1} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img2} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img3} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img4} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img5} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img6} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>

                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6  col-md-6 centering">

                        <img src={img8} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>
                    <div className="col-lg-6  col-md-6 centering mt-5">

                        <img src={img7} className='mb-3' />
                        Xm store <br />
                        UI / UX Design
                    </div>
                </div>
            </div>


            <div className="coontainer-fluid make">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className='text-light'>Let's make something br amazing together.</h1>
                        <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                        <button className='us'>Contant Us</button>


                    </div>
                </div>
            </div>
        </>
    )
}
