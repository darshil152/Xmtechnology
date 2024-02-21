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
import { Formik } from 'formik';
import * as Yup from "yup";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './Career.css'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Component } from "react";
import { Modal } from "react-bootstrap";

let dummydata = []

export default function Career() {


    useEffect(() => {
        AOS.init();
    }, [])




    const columns = [
        {
            name: "jobtype",
            label: "jobtype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "position",
            label: "Company",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "country",
            label: "country",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "State",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "city",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: "multiple",
        selectableRowsHideCheckboxes: true,
        selectableRowsOnClick: true,
    };
    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();


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



    const [name, setName] = useState('')
    const [Lname, setLname] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [Profile, setProfile] = useState('')
    const [Cvaddress, setCVaddress] = useState('')

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

    const Savedata = (values) => {


        console.log(values)

        let objs = {
            name: values.fname,
            Lname: values.lname,
            Email: values.email,
            Number: values.number,
            Profile: Profile,
            Cvaddress: Cvaddress,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Resumes").add(objs)

                .then((docRef) => {
                    navigate("/")

                    console.log("Document written with ID: ", docRef);
                    handleClose()
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

    const fileechange = (e) => {
        UploadImageTOFirebase(e.target.files[0])
    }

    const UploadImageTOFirebase = (file) => {
        const guid = () => {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return String(s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4());
        }


        let myPromise = new Promise((resolve, reject) => {

            const myGuid = guid();
            const storageUrl = firebaseApp.storage('gs://xmtechnologies-853d7.appspot.com')
            const storageRef = storageUrl.ref();
            console.log('ref : ', storageRef)
            const uploadTask = storageRef.child('Xmtech').child('resume').child(myGuid).put(file)
            uploadTask.on('state_changed',
                (snapShot) => {

                }, (err) => {
                    //catches the errors
                    console.log(err)
                    reject(err)
                }, () => {

                    firebaseApp
                        .storage('gs://xmtechnologies-853d7.appspot.com')
                        .ref()
                        .child('Xmtech')
                        .child('resume')
                        .child(myGuid)
                        .getDownloadURL()
                        .then(fireBaseUrl => {
                            resolve(fireBaseUrl)
                        }).catch(err => {
                            console.log('error caught', err)
                        })
                })
        })
        myPromise.then(url => {
            console.log(url)
            setProfile(url)

        }).catch(err => {
            console.log('error caught', err)
        })

    }


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
            console.log(showdata)
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
        navigate("/hire/dev")

    }

    const tocontact = () => {
        navigate("/contact")


    }


    const toreact = () => {
        navigate("/hire/dev")
    }


    const topython = () => {
        navigate("/hire/python")

    }

    const toios = () => {
        navigate("/hire/ios")
    }


    const tonode = () => {
        navigate("/hire/node")
    }

    const toandroid = () => {
        navigate("/hire/android")
    }

    const tofigmat = () => {
        navigate("/hire/ui")
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


            <div className="container-fluid always">
                <div className="row ">
                    <div className="col-lg-8 padd" >
                        <h1 className='text-light alwayss'>We Are Always <br /> Looking For Talent</h1>
                        <button className='mt-3 uss' onClick={tocontact}>Contact us</button>
                        <button className='mt-3 who'>Who we are</button>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row centers d-flex justify-content-center align-items-center">
                    <div className="col-lg-6" data-aos="fade-left"
                        data-aos-duration="3000">
                        <h1 className='text-dark part'>Be a part of <br /> future of work.</h1>
                        <p className="web">
                            Stop wasting your time, hire our in-house software developers that are tested and experienced to start working on your projects. No more going through hundred of applications, interviewing dozen of candidates, and having to keep tabs on everyone. Every developer you hire from us is assigned a project manager to make sure you have a great experience with our amazing developers.
                        </p>
                        <button className='Apply' onClick={handleShow}>Apply Now</button>
                    </div>
                    <div className="col-lg-6" data-aos="fade-right"
                        data-aos-duration="3000">
                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FFrame.png?alt=media&token=01476b03-e186-457b-bd22-db1a9bf19151"} className='img-fluid saves' />
                    </div>
                </div>
            </div>



            <div className="container-fluid foryou" >
                <div className="row">
                    <div className="container">
                        <h1 className='mt-5 mb-5 text-light text-center sizess'>Hiring developers to work for you!</h1>
                        <Tabs >
                            <TabList>
                                <Tab>Webiste Development</Tab>
                                <Tab>Applicaion Development</Tab>
                                <Tab>Ui/Ux Designing</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="container">
                                    <div className="row " data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FCss.png?alt=media&token=e0f170c0-93b0-497d-b300-5a11629f9f3c "} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2F.net.png?alt=media&token=40c10803-3933-49ec-91ef-cbe9b6949df5 "} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fvue.png?alt=media&token=b2a629fc-36aa-49f3-abc7-fe1c8bcdb529"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fcakephp.png?alt=media&token=c5490456-5b40-4988-83ef-4aac3e17b7f0"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                    </div>

                                    <div className="row mt-3" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fc%23.png?alt=media&token=9a2ff282-6e7b-4b83-8038-c7a17e82f858"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fnext.png?alt=media&token=9301e8b2-3b6c-41e1-bdd6-e1922a055578 "} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fmongo.png?alt=media&token=8e079581-ed97-4d0a-af2d-bef1607bfc31"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fajax.png?alt=media&token=7da03ee7-b588-4b51-bd59-8a31fb085703"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                    </div>

                                    <div className="row mt-3" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fpython%20(2).png?alt=media&token=4dc05868-e036-4637-a0d1-4aebbfe516ac"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fdjango.png?alt=media&token=4410cdfe-aa5c-4c6f-b9f8-bad151ac9519 "} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FiPhone%208%20Plus%20-%2021%20(1).png?alt=media&token=9aca2d7d-3f99-4c31-b0dc-11ce9ab1d806"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Flaravel.png?alt=media&token=769908b9-dd52-4a64-9598-81580eea852b"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                    </div>
                                    <div className="row mt-3 text-center" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fjava.png?alt=media&token=4fb0151b-e0af-4c52-a0d0-03f0cf826dd0"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Freact%20(2).png?alt=media&token=7e7fc809-aca4-4468-8d0f-07729449c411"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FiPhone%208%20Plus%20-%2021.png?alt=media&token=c2572573-fa28-4907-874d-194fc8e5302c8"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FiPhone%208%20Plus%20-%2024.png?alt=media&token=8c56e16a-b4a6-4718-a6fe-6a63eafbd033"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="container">
                                    <div className="row " data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fantive.png?alt=media&token=34425bda-cef2-44dd-8988-c5785293346c "} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fflutter.png?alt=media&token=e458cf0c-ad45-4fde-9a61-9a640feeccb9"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FiPhone%208%20Plus%20-%2023.png?alt=media&token=43e223e1-3e54-45fb-881a-42fbe93dc656"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                        <div className="col-lg-3">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fandroid%20(2).png?alt=media&token=bd0c5534-fc2d-4723-a0bb-10037f4d5cc4"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>
                                    </div>
                                </div>



                            </TabPanel>
                            <TabPanel>
                                <div className="container text-center">
                                    <div className="row" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="col-lg-12">
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2FiPhone%208%20Plus%20-%2023.png?alt=media&token=43e223e1-3e54-45fb-881a-42fbe93dc656"} className='img-fluid saves' style={{ borderRadius: "15px" }} onClick={toreact} />
                                        </div>

                                    </div>
                                </div>



                            </TabPanel>
                        </Tabs>


                    </div>
                </div >
            </div>







            <div className="container-fluid forbg">
                <div className="row" >
                    <div className="col-lg-6" data-aos="fade-left"
                        data-aos-duration="3000" style={{ padding: "55px" }}>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/test-15878.appspot.com/o/Images%2Fforming%20team%20leadership-rafiki%201.png?alt=media&token=97dcafa9-d976-4bda-9e00-2a0c406ba3a8"} className='img-fluid ms-auto' />
                    </div>
                    <div className="col-lg-6" data-aos="fade-right"
                        data-aos-duration="3000" style={{ padding: "55px" }} >
                        <h1 className="mt-5 xm">XM Technologies</h1>
                        <h1 className='text-dark team'>Ready to be part of our team?</h1>
                        <p className="web">Are you creatively curious or curiously creative too? Join our <br /> network to work with us, grow with us and make wonderful things together.</p>
                        <button className='mt-3 who' style={{ margin: "0px" }} onClick={handleShow}>Apply Now</button>
                    </div>

                </div>
            </div>






            <div className="container practice" data-aos="fade-right"
                data-aos-duration="3000">
                <div className="row text-center">
                    <div className="col-lg-12">

                        <h1 className='value'>  corporate open roles</h1>
                        <p className='remote'>As a remote-first, global company, XM Technology does not offer relocation or visa assistance. Applicants must be br eligible to work in the country where the position is offered.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">

                <div className="row ms-auto">

                    <div className="col-lg-3">
                        <div className="space">


                            <label htmlFor="jobs">Jobs</label><br />
                            <select name="jobs" id="names" onChange={handlejob} className='rounded-3'>
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
                    </div>


                    <div className="col-lg-3">
                        <label htmlFor="Country">Country</label><br />

                        <select name="Country" id="names" onChange={handlecountry} className='rounded-3'>
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
                        <label htmlFor="state">State</label><br />

                        <select name="state" id="names" onChange={handlestate} className='rounded-3'>
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
                        <label htmlFor="city">City</label><br />

                        <select name="city" id="names" onChange={handlecity} className='rounded-3'>
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
                    <br />

                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            <button className='btn btn-primary' onClick={filterdata}> Search</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Job List"}
                                    data={showdata}
                                    columns={columns}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
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

            <Modal show={showModal} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Apply Here !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik
                        initialValues={{ fname: "", lname: "", number: '', email: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                            Savedata(values)
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email()
                                .required("email Required"),
                            fname: Yup.string()
                                .required("Name Required"),
                            lname: Yup.string()
                                .required("Name Required"),
                            number: Yup.string()
                                .required("number Required"),


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
                                                        placeholder="Enter your number"
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
                                            <div className="row mt-4 ">
                                                <div className="col-lg-12">
                                                    <input className='text-input input datass' style={{ width: "80%" }} type="file" onChange={(e) => fileechange(e)} />
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-lg-12">
                                                    <textarea name="" cols="200" rows="5" id='names' className='textaraa' onChange={(e) => setCVaddress(e.target.value)} placeholder='Write your cover letter'></textarea>
                                                </div>
                                            </div>


                                            <div className="row ">
                                                <div className="col-lg-12 mt-3 text-center">
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
                </Modal.Body >


            </Modal >

        </>
    )
}
