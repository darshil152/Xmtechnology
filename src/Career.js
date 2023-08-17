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

let dummydata = []

export default function Career() {

    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();

    const [job, setjob] = useState('');
    const [item, setItem] = useState([]);
    const [showdata, setShowdata] = useState([]);

    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState();
    const [city, setCity] = useState();

    const [position, setposition] = useState();

    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);


    useEffect(() => {

        let alldata = []
        let position = []
        const db = firebaseApp.firestore();
        db.collection('Jobs').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dummydata.push(doc.data())
                alldata.push(doc.data())
                setItem(alldata)
                setShowdata(alldata)


                position.push(doc.data().position)

                let x = position.filter((item,
                    index) => position.indexOf(item) === index);
                setposition(x)


            })
        }).catch(err => {
            console.error(err)
        });

    }, []);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        cityData && setCity(cityData[0]);
    }, [cityData]);


    const filterdata = (dummydata) => {

        console.log(job)
        if (job == "all") {
            let filterCoffee = item.filter(test => test.country === country.name)
            setShowdata(filterCoffee)
        } else {
            let filterCoffee = item.filter(test => test.position === job && test.country === country.name)
            setShowdata(filterCoffee)
        }
    }

    const handlejob = (e) => {
        setjob(e.target.value)
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

            <section className="min-h-screen px-3 grid place-items-center pb-20 selection:text-white selection:bg-teal-500 ">
                <div>
                    <h2 className="text-2xl font-bold text-teal-900">
                        Filter jobs
                    </h2>
                    <br />
                    <div className="flex flex-wrap gap-3 p-8">
                        <div>
                            <p className="text-black-800 font-semibold">Job type :</p>
                            <select onChange={handlejob} name="jobs" id="jobs" className='w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 joboption'>
                                <option >Choose job type</option>

                                <option value="all">All area of interest</option>
                                {
                                    position && position.map((i) => {
                                        return (
                                            <>
                                                <option>{i}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <p className="font-semibold">Country :</p>
                            <Selector
                                data={countryData}
                                selected={country}
                                setSelected={setCountry}
                            />
                        </div>
                        {state && (
                            <div>
                                <p className="font-semibold">State :</p>
                                <Selector
                                    data={stateData}
                                    selected={state}
                                    setSelected={setState}
                                />
                            </div>
                        )}
                        {city && (
                            <div>
                                <p className="font-semibold">City :</p>
                                <Selector data={cityData} selected={city} setSelected={setCity} />
                            </div>
                        )}

                        <div className='mt-3'>
                            <button class=" mt-4 btn btn-primary" style={{ width: "150px" }} onClick={filterdata}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row justify-content-center">

                        <table>
                            <tr className='headingdetail'>
                                <th>Job type</th>
                                <th>Position Title</th>
                                <th>Country</th>
                            </tr>
                            {showdata && showdata.map((item, i) => {
                                return (
                                    <tr>
                                        <td className='detailtable'>{item.jobtype}</td>
                                        <td className='detailtable'> <Link to="/">{item.position}</Link > </td>
                                        <td className='detailtable'>{item.country}</td>
                                    </tr>
                                )
                            })}
                        </table>

                    </div>
                </div>

            </section>

        </>
    )
}
