import React from "react";
import { useAppContext } from "../context.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Wrapper({ children }) {
  const { applicantAffidavit, idAffidavit, applicant, idDeponent } =
    useAppContext();

    const navigate = useNavigate();

  return (
    <div className="min-h-100vh text-normal my-2 flex h-screen flex-col bg-slate-100 font-serif leading-relaxed text-black md:text-lg">
      <header className="bg-slate-600 text-white">
        <h1 className="sticky m-1 mt-2 text-center text-xl">
          Barrister Admission Bundle
        </h1>
        <h2 className="sticky m-1 text-center text-xl">(beta version)</h2>
        <nav
          className="m-1 flex grid-cols-3 flex-col justify-between 
        gap-x-1 bg-slate-600 p-1 text-white md:grid"
        >
          <span className="border-2 border-white text-center md:border-0">
            <Link to="/">About</Link>
          </span>
          <button className="border-2 border-white text-center  md:border-0">
            <Link to="info"> Enter Information</Link>
          </button>

          <select
            className="border-2 border-white bg-slate-600 text-center md:border-0"
            onChange={(e) => {
              console.log(e.target.value);
              navigate(`${e.target.value}`);
            }}
          >
            <option value="info">Select Document</option>
            <option value="notice">Notice of Motion</option>
            <option value="applicant">
              {applicantAffidavit ? "Affidavit" : "Affirmation"} of{" "}
              {applicant === "APPLICANT" ? "the Applicant" : applicant}
            </option>
            <option value="id">
              {idAffidavit ? "Affidavit" : "Affirmation"} of{" "}
              {idDeponent === "ID DEPONENT" ? "Identity" : idDeponent}
            </option>
            <option value="letters">Cover letters</option>
          </select>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-auto bg-slate-600 text-center text-white">
        <p className="">MIT License</p>
      </footer>
    </div>
  );
}
