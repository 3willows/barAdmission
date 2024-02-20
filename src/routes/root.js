import React, { useState } from "react";
// import { Link } from "react-router-dom"
import { useAppContext } from "../Context.js";
import { DataInput } from "../components/DataInput";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import AffidavitOfApplicant from "./affidavitOfApplicant";
import AffidavitOfIdentity from "./affidavitOfIdentity";
import NoticeOfMotion from "./noticeOfMotion";
import LettersTo3Regulators from "./letterTo3Regulators";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NoticeOfMotion />
      <div className="pagebreak"></div>
      <AffidavitOfApplicant />
      <div className="pagebreak"></div>
      <AffidavitOfIdentity />
      <div className="pagebreak"></div>
      <LettersTo3Regulators />
    </div>
  );
});

export default function Root() {
  const [page, setPage] = useState("Welcome");
  const { dispatch } = useAppContext();

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true });
    } else {
      dispatch({ type: relevantAffidavit, payload: false });
    }
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="text-8 min-h-100vh m-2 flex h-screen flex-col bg-slate-800 text-lg">
      <header className="bg-slate-600">
        <h1 className="sticky m-1 mt-2 text-center">
          Barrister Admission Bundle
        </h1>
        <nav className="m-1 flex flex-row gap-x-1 bg-slate-600">
          <button
            className=" m-1 "
            onClick={() => setPage((prev) => "Welcome")}
          >
            About
          </button>
          <select
            onChange={(e) => setPage((prev) => e.target.value)}
            className=" m-1"
          >
            <option>Documents</option>
            <option value="Notice">Notice of Motion</option>
            <option value="Notice">Notice of Motion</option>
          </select>
          <div className=" m-1">Technology</div>
          <div className=" m-1">Philosophy</div>
        </nav>
      </header>
      <main>
        {page === "Notice" && <NoticeOfMotion />}
        {page === "Welcome" && (
          <article className="">
            <p className="py-4">
              This is a webpage designed to let you create all the necessary
              Court documents for barrister admission in Hong Kong in one go.
            </p>
            <p className="m-1 text-center">
              <button
                onClick={() => setPage((prev) => "Info")}
                className="bg-slate-600"
              >
                Enter information
              </button>
            </p>
          </article>
        )}
        {page === "Info" && (
          <article>
            <div className="m-1">
              <h3>The Applicant</h3>
            </div>
            <p className="m-1">
              Applicant Name <DataInput prop="applicant" />
            </p>
            <p className="m-1">
              Applicant Address <DataInput prop="applicantAddress" />
            </p>
            <p className="m-1">
              Affidavit?
              <input
                type="checkbox"
                onChange={(e) => handleAffidavit("applicantAffidavit", e)}
                className="m-1"
              ></input>
            </p>
            <div className="">
              <h3>The Solicitors</h3>
              <p className="m-1">
                Name of Solicitors for the Applicant{" "}
                <DataInput prop="solicitors" />
              </p>
              <p className="m-1">
                Solicitors' Address <DataInput prop="solicitorsAddress" />
              </p>
              <p className="m-1">
                Solicitors' phone no <DataInput prop="solicitorsPhone" />
              </p>
              <p className="m-1">
                Solicitors' fax no. <DataInput prop="solicitorsFax" />
              </p>
            </div>
            <div className="">
              <h3>Deponent on Identity</h3>
              <p className="m-1">
                Name of Deponent <DataInput prop="idDeponent" />
              </p>
              <p className="m-1">
                Deponent Address <DataInput prop="idDeponent" />
              </p>
              <p className="m-1">
                Affidavit?
                <input
                  type="checkbox"
                  onChange={(e) => handleAffidavit("idAffidavit", e)}
                ></input>
              </p>
            </div>
            <div>
              <h3>Information for the application</h3>
              <p className="m-1">
                Date of Certificate of Qualification for Admission{" "}
                <DataInput prop="certdate" />
              </p>
              <p className="m-1">
                Year of Application <DataInput prop="year" />
              </p>
              <p className="m-1">
                Name of the Mover for the Applicant <DataInput prop="mover" />
              </p>
            </div>{" "}
          </article>
        )}
        <div className="hidden">
          <ComponentToPrint ref={componentRef} />
        </div>
        <article className="m-1 text-center">
          <button onClick={handlePrint} className="bg-slate-600">
            Print {page === "Welcome" ? `Sample` : `Bundle`}
          </button>{" "}
        </article>
      </main>
      <footer className="mt-auto  bg-slate-600 text-center">
        <p className="">Creative Commons Licence</p>
      </footer>
    </div>
  );
}
