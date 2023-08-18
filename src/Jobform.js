import React, { useState } from 'react'
import firebaseApp from './Firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Jobform() {


    const [jobtype, setJobtype] = useState('')
    const [position, setposition] = useState('')
    const [country, setcountry] = useState('')
    const [state, setstate] = useState('')
    const [city, setCity] = useState('')
    const [description, setdescription] = useState('')
    const [location, setlocation] = useState('')
    const [responsibility, setresponsibility] = useState('')
    const [skills, setskills] = useState('')
    const [qualification, setqualification] = useState('')


    const savejob = () => {


        console.log(jobtype && position, country, description, location, responsibility, skills, qualification)

        let obj = {
            jobtype: jobtype,
            position: position,
            country: country,
            state: state,
            city: city,
            description: description,
            location: location,
            responsibilities: responsibility,
            skillset: skills,
            qualifications: qualification,
            id: makeid(5)
        }

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Jobs").add(obj)

                .then((docRef) => {
                    toast('Job added successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

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

        <div className="container mt-5 studentdetail ">

            <div className="row ">
                <div className="col-lg-12 p-3">


                    <h1 style={{ textAlign: "center", marginBottom: "35px" }}>Job form</h1>

                    <label htmlFor="jobtype">Job Type</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setJobtype(e.target.value)} />


                    <label className='mt-4 text-left' htmlFor="position">Position Title</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setposition(e.target.value)} />


                    <label className='mt-4 text-left' htmlFor="Country">Country</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setcountry(e.target.value)} />

                    <label className='mt-4 text-left' htmlFor="Country">state</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setstate(e.target.value)} />

                    <label className='mt-4 text-left' htmlFor="Country">City</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setCity(e.target.value)} />


                    <label className='mt-4 text-left' htmlFor="Description">Description</label> <br />
                    <textarea name="" id='form' cols="80" rows="5" onChange={(e) => setdescription(e.target.value)}></textarea>



                    <label className='mt-4 ' text-left htmlFor="Location">Location:</label>
                    <select className='ml-4' onChange={(e) => setlocation(e.target.value)}>
                        <option value="">Select location</option>
                        <option value="Remote">Remote</option>
                        <option value="Office">Office</option>
                    </select>
                    <br />


                    <label className='mt-4 text-left' htmlFor="Responsibility">Responsibility</label>
                    <textarea name="" id='form' cols="80" rows="5" onChange={(e) => setresponsibility(e.target.value)}></textarea>



                    <label className='mt-4 text-left' htmlFor="skills">skills</label>
                    <textarea name="" id='form' cols="80" rows="5" onChange={(e) => setskills(e.target.value)}></textarea>


                    <label className='mt-4 text-left' htmlFor="qualification">qualification</label>
                    <input className='text-input inputstyle' id='form' type="text" onChange={(e) => setqualification(e.target.value)} />


                    <button className=' mt-5  btn btn-primary' onClick={savejob}>Add job</button>

                </div>
            </div>
        </div>





    )
}
