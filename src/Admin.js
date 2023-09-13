import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useEffect } from 'react';
import firebaseApp from './Firebase/firebase';
import { Modal, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/Image/XM.png';
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();


    useEffect(() => {
        getuestion()
        getContact()
        getahiredev()
        getresume()
        gettrial()
    }, [])

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


    const tomain = () => {
        navigate("/")

    }

    const tocontact = () => {
        navigate("/contact")
    }


    const columnsContact = [
        {
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "PhoneNo",
            label: "PhoneNo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Message",
            label: "Message",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const columnsContactUs = [
        {
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "lname",
            label: "lname",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "PhoneNo",
            label: "PhoneNo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "address",
            label: "address",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const Hiredev = [
        {
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "PhoneNo",
            label: "PhoneNo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Message",
            label: "Message",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "team",
            label: "team",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const resumes = [
        {
            name: "name",
            label: "name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lname",
            label: "Lname",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Number",
            label: "Number",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Cvaddress",
            label: "Cvaddress",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Profile",
            label: "Profile",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Profile",
            label: "Button",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <>
                        <button type="button" className='btn btn-primary' onClick={() => showresume(value)}>Show</button>
                    </>
                )
            }
        },

    ];

    const trials = [
        {
            name: "Email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "PhoneNo",
            label: "PhoneNo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Message",
            label: "Message",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];


    const showresume = (value) => {
        handleShow()
        setData(value)
    }



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

    const [contact, setContact] = useState([])
    const [contactus, setContactus] = useState([])
    const [dev, setDev] = useState([])
    const [resume, setResume] = useState([])
    const [data, setData] = useState([])
    const [trial, setTrial] = useState([])

    const getuestion = () => {
        let x = []
        const db = firebaseApp.firestore();
        db.collection('ContactUs').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                x.push(doc.data())
                setContact(x)
            })
        }).catch(err => {
            console.error(err)
        });
    }



    const gettrial = () => {
        let x = []
        const db = firebaseApp.firestore();
        db.collection('Trial').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                x.push(doc.data())
                setTrial(x)
            })
        }).catch(err => {
            console.error(err)
        });
    }

    const getContact = () => {
        let x = []
        const db = firebaseApp.firestore();
        db.collection('Contact').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                x.push(doc.data())
                setContactus(x)
            })
        }).catch(err => {
            console.error(err)
        });
    }

    const getahiredev = () => {
        let x = []
        const db = firebaseApp.firestore();
        db.collection('HireDev').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                x.push(doc.data())
                setDev(x)
            })
        }).catch(err => {
            console.error(err)
        });
    }

    const getresume = () => {
        let x = []
        const db = firebaseApp.firestore();
        db.collection('Resumes').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                x.push(doc.data())
                setResume(x)
            })
        }).catch(err => {
            console.error(err)
        });
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


            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Contact List"}
                                    data={contact}
                                    columns={columnsContact}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </div>
            </div>


            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"ContactUs List"}
                                    data={contactus}
                                    columns={columnsContactUs}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Hire Developer"}
                                    data={dev}
                                    columns={Hiredev}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Resumes"}
                                    data={resume}
                                    columns={resumes}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <CacheProvider value={muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Trial Demo"}
                                    data={trial}
                                    columns={trials}
                                    options={options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </div>
            </div>



            <Modal show={showModal} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src={data} width={450} height={500} />

                </Modal.Body>

            </Modal >
        </>
    )
}
