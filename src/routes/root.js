import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"
import { useAppContext } from "../Context.js"
import { DataInput } from "../components/DataInput"

export default function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const { applicant } = useAppContext()
  const toggleFan = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <h1>Court Papers for Hong Kong Barrister Admission</h1>
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
          Affidavit of {applicant}
        </Link>
      </p>{" "}
      <p className="">
        <Link to={`id`} target="__ref">
          {" "}
          Affidavit of Identity
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
