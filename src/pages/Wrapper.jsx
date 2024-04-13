import React from "react";
import { useAppContext } from "../context.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Wrapper({ children }) {
  const { applicantAffidavit, idAffidavit, applicant, idDeponent } =
    useAppContext();

  const navigate = useNavigate();

  return (
    <div className=" min-h-100vh text-normal my-2 flex  h-screen  flex-col  bg-slate-100 font-serif leading-relaxed text-black md:text-lg">
      <header className="bg-slate-600 p-2 text-white">
        <h1 className="sticky m-1 mt-2 text-left text-xl font-bold">
          Barrister Admission Bundle (Beta)
        </h1>
        <nav
          className="m-1 flex grid-cols-3 flex-col justify-between 
        gap-x-1 bg-slate-600 py-1 text-white md:grid"
        >
          <Link
            to="/"
            className="border-2 border-white py-1 text-left md:border-0"
          >
            About
          </Link>
          <Link
            to="info"
            className="border-2  border-white py-1 text-left md:border-0"
          >
            Enter Information
          </Link>

          <select
            className="rounded-none border-2 border-white bg-slate-600 py-1 text-left md:border-0 "
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
      <div className="flex-grow">{children}</div>
      <footer className=" bg-slate-600 p-2 text-white ">
        <h1 className="m-1 mt-2 text-left text-xl font-bold">
          <a
            href="https://github.com/3willows/barAdmission"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </h1>
      </footer>
    </div>
  );
}
