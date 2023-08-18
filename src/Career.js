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

        </>
    )
}
