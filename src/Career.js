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
import Data from './Data';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import frame from "./assets/Image/Frame.png"
import react from "./assets/Image/react.png"
import ios from "./assets/Image/ios.png"
import node from "./assets/Image/node.png"
import figma from "./assets/Image/figma.png"
import android from "./assets/Image/android.png"
import python from "./assets/Image/python.png"
import group from "./assets/Image/forming team leadership-rafiki 1.png"
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

let dummydata = []

export default function Career() {

    let countryData = Country.getAllCountries();


    const [job, setjob] = useState('');
    const [item, setItem] = useState([]);
    const [showdata, setShowdata] = useState([]);

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);


    const [Hcountry, setHCountry] = useState('');
    const [Hstate, setHState] = useState('');
    const [Hcity, setHCity] = useState('');

    const [position, setposition] = useState();



    useEffect(() => {

        let alldata = []
        let position = []
        let country = []
        let state = []
        let city = []
        const db = firebaseApp.firestore();
        db.collection('Jobs').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {


                dummydata.push(doc.data())
                alldata.push(doc.data())
                setItem(alldata)
                setShowdata(alldata)


                position.push(doc.data().position)
                country.push(doc.data().country)
                state.push(doc.data().state)
                city.push(doc.data().city)

                let x = position.filter((item,
                    index) => position.indexOf(item) === index);
                setposition(x)

                let y = country.filter((item,
                    index) => country.indexOf(item) === index);
                setCountry(y)

                let z = state.filter((item,
                    index) => state.indexOf(item) === index);
                setState(z)

                let a = city.filter((item,
                    index) => city.indexOf(item) === index);
                setCity(a)


            })
        }).catch(err => {
            console.error(err)
        });

    }, []);




    const filterdata = () => {

        if (job != '' && Hcountry !== '' && Hstate != '' && Hcity != '') {
            let filter2 = showdata.filter((i) => i.position == job && i.country == Hcountry && i.state == Hstate && i.city == Hcity)
            setShowdata(filter2)
        } else if (job != '' && Hcountry !== '' && Hstate != '') {

            let filter2 = showdata.filter((i) => i.position == job && i.country == Hcountry && i.state == Hstate)
            setShowdata(filter2)
        }
        else if (job != '' && Hcountry !== '') {

            let filter2 = showdata.filter((i) => i.position == job && i.country == Hcountry)
            setShowdata(filter2)
        }
        else if (job != '') {
            if (job == "alls") {
                let filter2 = showdata.filter((i) => i.position == job)
                setShowdata(item)
            }
        }
        else {
            setShowdata(item)
        }


    }

    const handlejob = (e) => {
        setjob(e.target.value)
    }

    const handlecountry = (e) => {
        setHCountry(e.target.value)

    }
    const handlestate = (e) => {
        setHState(e.target.value)

    }

    const handlecity = (e) => {
        setHCity(e.target.value)
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
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Portfolio    </Nav.Link>
                            <Nav.Link href="#link">Jobs</Nav.Link>
                            <Nav.Link href="#link">Hire</Nav.Link>
                            <Button variant="primary" className='rounded-5'>Contact  Us</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className="container-fluid always">
                <div className="row ">
                    <div className="col-lg-8 padd" >
                        <h1 className='text-light alwayss'>We Are Always <br /> Looking For Talent</h1>
                        <button className='mt-3 uss'>Contact us</button>
                        <button className='mt-3 who'>Who we are</button>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row centers d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <h1 className='text-dark part'>Be a part of <br /> future of work.</h1>
                        <p className="web">
                            Stop wasting your time, hire our in-house software developers that are tested and experienced to start working on your projects. No more going through hundred of applications, interviewing dozen of candidates, and having to keep tabs on everyone. Every developer you hire from us is assigned a project manager to make sure you have a great experience with our amazing developers.
                        </p>
                        <button className='Apply'>Apply Now</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={frame} className='img-fluid saves' />
                    </div>
                </div>
            </div>


            <div className="container-fluid foryou">
                <div className="row">
                    <div className="container">
                        <h1 className='mt-5 mb-5 text-light text-center sizess'>Hiring developers to work for you!</h1>
                        <div className="row ">
                            <div className="col-lg-4">
                                <img src={react} className='img-fluid saves' />
                            </div>
                            <div className="col-lg-4">
                                <img src={python} className='img-fluid saves' />
                            </div>
                            <div className="col-lg-4">
                                <img src={node} className='img-fluid saves' />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-4">
                                <img src={ios} className='img-fluid saves' />
                            </div>
                            <div className="col-lg-4">
                                <img src={android} className='img-fluid saves' />
                            </div>
                            <div className="col-lg-4">
                                <img src={figma} className='img-fluid saves' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid forbg">
                <div className="row ">
                    <div className="col-lg-6" style={{ padding: "55px" }}>
                        <img src={group} className='img-fluid ms-auto' />
                    </div>
                    <div className="col-lg-6" style={{ padding: "55px" }} >
                        <h1 className="mt-5 xm">XM Technologies</h1>
                        <h1 className='text-dark team'>Ready to be part of our team?</h1>
                        <p className="web">Are you creatively curious or curiously creative too? Join our <br /> network to work with us, grow with us and make wonderful things together.</p>
                        <button className='mt-3 who' style={{ margin: "0px" }}>Apply Now</button>
                    </div>

                </div>
            </div>






            <div className="container practice">
                <div className="row">
                    <div className="col-lg-12">

                        <h1 className='value'>  corporate open roles</h1>
                        <p className='remote'>As a remote-first, global company, Xmtechnology does not offer relocation or visa assistance. Applicants must be br eligible to work in the country where the position is offered.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">

                <div className="row ms-auto">

                    <div className="col-lg-3">

                        <label htmlFor="jobs">Jobs</label><br />
                        <select name="jobs" id="" onChange={handlejob}>
                            <option value="">Choose</option>
                            <option value="alls" >All Position</option>

                            {
                                position && position.map((i) => {
                                    return (
                                        <option>{i}</option>

                                    )
                                })
                            }
                        </select>
                    </div>


                    <div className="col-lg-3">
                        <label htmlFor="Country">Country</label><br />

                        <select name="Country" id="" onChange={handlecountry}>
                            <option value="">Choose</option>
                            <option value="country">All Country</option>

                            {
                                country && country.map((i) => {
                                    return (
                                        <option>{i}</option>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <div className="col-lg-3">
                        <label htmlFor="state">state</label><br />

                        <select name="state" id="" onChange={handlestate}>
                            <option value="">Choose</option>
                            <option value="state" >All state</option>

                            {
                                state && state.map((i) => {
                                    return (
                                        <option>{i}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="col-lg-2">
                        <label htmlFor="city">city</label><br />

                        <select name="city" id="" onChange={handlecity}>
                            <option value="">Choose</option>
                            <option value="city" >All city</option>

                            {
                                city && city.map((i) => {
                                    return (
                                        <option>{i}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="col-lg-1 mt-4">
                        <button className='btn btn-primary' onClick={filterdata}> Search</button>
                    </div>

                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">

                    <table>
                        <tr className='headingdetail'>
                            <th>Job type</th>
                            <th>Position Title</th>
                            <th>Country</th>
                            <th>state</th>
                            <th>city</th>
                        </tr>
                        {showdata && showdata.map((item, i) => {
                            return (
                                <tr>
                                    <td className='detailtable'>{item.jobtype}</td>
                                    <td className='detailtable'> <Link to="/">{item.position}</Link > </td>
                                    <td className='detailtable'>{item.country}</td>
                                    <td className='detailtable'>{item.state}</td>
                                    <td className='detailtable'>{item.city}</td>

                                </tr>
                            )
                        })}
                    </table>

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
    )
}
