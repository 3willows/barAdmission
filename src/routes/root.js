import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"
import { useAppContext } from "../Context.js"
import { DataInput } from "../components/DataInput"

export default function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const { applicant, applicantAffidavit, idAffidavit, dispatch } =
    useAppContext()
  const toggleFan = () => {
    setIsOpen(!isOpen)
  }

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true })
    } else {
      dispatch({ type: relevantAffidavit, payload: false })
    }
  }

  return (
    <div className="App">
      <h1>Barrister Admissions Bundle</h1>
      <button onClick={toggleFan}>
        {isOpen
          ? "Just a quick primer: remember to do your own homework!"
          : "NOTES"}
      </button>
      <div className="">
        <h3>The Applicant</h3>
      </div>
      <p className="">
        Applicant Name <DataInput prop="applicant" />
      </p>
      <p className="">
        Applicant Address <DataInput prop="applicantAddress" />
      </p>
      <p className="">
        Affidavit?
        <input
          type="checkbox"
          onChange={(e) => handleAffidavit("applicantAffidavit", e)}
        ></input>
      </p>
      <div className="">
        <h3>The Solicitors</h3>
        <p className="">
          Name of Solicitors for the Applicant: <DataInput prop="solicitors" />
        </p>
        <p className="">
          Solicitors' Address: <DataInput prop="solicitorsAddress" />
        </p>
        <p className="">
          Solicitors' phone no: <DataInput prop="solicitorsPhone" />
        </p>
        <p className="">
          Solicitors' fax no. <DataInput prop="solicitorsFax" />
        </p>
       
      </div>
      <div className="">
        <h3>Deponent on Identity</h3> 
        <p className="">
          Name of Deponent <DataInput prop="idDeponent" />
        </p>
        <p className="">
          Affidavit?
          <input
            type="checkbox"
            onChange={(e) => handleAffidavit("idAffidavit", e)}
          ></input>
        </p>
      </div>
      <div>
        <h3>Information for the application</h3>
        <p className="">
          Date of Certificate of Qualification for Admission
          <DataInput prop="certdate" />
        </p>
        <p className="">
          Year of Application:
          <DataInput prop="year" />
        </p>
        <p className="">
          Name of the Mover for the Applicant:
          <DataInput prop="mover" />
        </p>
      </div>
      <p className="">
        <Link to={`applicant`} target="_ref">
          {" "}
          {applicantAffidavit ? "Affidavit" : "Affirmation"} of {applicant}
        </Link>
      </p>{" "}
      <p className="">
        <Link to={`id`} target="__ref">
          {" "}
          {idAffidavit ? "Affidavit" : "Affirmation"} of Identity
        </Link>
      </p>
      <p className="">
        <Link to={`letters`} target="___ref">
          {" "}
          Letters to 3 regulators
        </Link>
      </p>
      <p className="">
        <Link to={`notice`} target="_____ref">
          Notice of Motion
        </Link>
      </p>
    </div>
  )
}
