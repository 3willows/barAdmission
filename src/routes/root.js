import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"
import { useAppContext } from "../Context.js"

export default function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const { applicant, solicitors, year, mover, dispatch } = useAppContext()
  const toggleFan = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <h1>Court Papers for Barrister Admission</h1>
      <button onClick={toggleFan}>
        {isOpen ? "Close notes" : "Open notes"}
      </button>

      {isOpen && (
        <div>
          <p>
            Not an exhaustive list: research and take care of other necessary
            pre-requisites yourself!{" "}
          </p>
        </div>
      )}

      <p className="">
        Name of Applicant:{" "}
        <input
          type="text"
          value={applicant}
          onChange={(e) =>
            dispatch({ type: "applicant", payload: e.target.value })
          }
        ></input>
      </p>
      <p className="">
        Name of Solicitors for the Applicant:
        <input
          type="text"
          value={solicitors}
          onChange={(e) =>
            dispatch({ type: "solicitors", payload: e.target.value })
          }
        ></input>
      </p>
      <p className="">
        Year of Application:
        <input
          type="text"
          value={year}
          onChange={(e) => dispatch({ type: "year", payload: e.target.value })}
        ></input>
      </p>
      <p className="">
        [Optional] Name of the Mover for the Applicant:
        <input
          type="text"
          value={mover}
          onChange={(e) => dispatch({ type: "mover", payload: e.target.value })}
        ></input>
      </p>
      <p className="">
        <Link to={`noticeofmotion`}> Notice of Motion</Link>
      </p>
      <p className="">
        <button>Affirmation of Identity</button>
      </p>
      <p className="">
        <button>Affirmation of {applicant}</button>{" "}
      </p>
      <p className="">
        <button>Letters to 3 regulators</button>
      </p>
    </div>
  )
}
