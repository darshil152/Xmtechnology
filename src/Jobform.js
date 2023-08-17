import React, { useState } from 'react'
import firebaseApp from './Firebase/firebase'


export default function Jobform() {


    const [jobtype, setJobtype] = useState('')
    const [position, setposition] = useState('')
    const [country, setcountry] = useState('')
    const [description, setdescription] = useState('')
    const [location, setlocation] = useState('')
    const [responsibility, setresponsibility] = useState('')
    const [skills, setskills] = useState('')
    const [qualification, setqualification] = useState('')


    const savejob = () => {
        console.log(jobtype, position, country, description, location, responsibility, skills, qualification)

        let obj = {
            jobtype: jobtype,
            position: position,
            country: country,
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

        <div className="container">
            <div className="row">
                <div className="col-lg-3 ">

                    <label htmlFor="jobtype">Job Type</label>
                    <input type="text" onChange={(e) => setJobtype(e.target.value)} />

                </div>
                <div className="col-lg-3 ">
                    <label htmlFor="position">Position Title</label>
                    <input type="text" onChange={(e) => setposition(e.target.value)} />
                </div>

                <div className="col-lg-3 ">
                    <label htmlFor="Country">Country</label>
                    <input type="text" onChange={(e) => setcountry(e.target.value)} />
                </div>

                <div className="col-lg-3 ">
                    <label htmlFor="Description">Description</label>
                    <input type="text" onChange={(e) => setdescription(e.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <label htmlFor="Location">location</label>
                    <select onChange={(e) => setlocation(e.target.value)}>
                        <option value="">Select location</option>
                        <option value="Remote">Remote</option>
                        <option value="Office">Office</option>
                    </select>

                </div>
            </div>

            <div className="col-lg-3 ">
                <label htmlFor="Responsibility">Responsibility</label>
                <input type="text" onChange={(e) => setresponsibility(e.target.value)} />
            </div>

            <div className="col-lg-3 ">
                <label htmlFor="skills">skills</label>
                <input type="text" onChange={(e) => setskills(e.target.value)} />
            </div>

            <div className="col-lg-3 ">
                <label htmlFor="qualification">qualification</label>
                <input type="text" onChange={(e) => setqualification(e.target.value)} />
            </div>

            <button className='btb btn-primary' onClick={savejob}>Add job</button>

        </div>





    )
}
