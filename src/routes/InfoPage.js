import React, { useRef } from "react";
import { useAppContext } from "../Context.js";
import { DataInput } from "../components/DataInput";
import { useReactToPrint } from "react-to-print";

import AffidavitOfApplicant from "./affidavitOfApplicant";
import AffidavitOfIdentity from "./affidavitOfIdentity";
import NoticeOfMotion from "./noticeOfMotion";
import CoverLetters from "./coverLetters";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NoticeOfMotion />
      <div className="pagebreak"></div>
      <AffidavitOfApplicant />
      <div className="pagebreak"></div>
      <AffidavitOfIdentity />
      <div className="pagebreak"></div>
      <CoverLetters />
    </div>
  );
});


export function InfoPage() {
  const { dispatch, idAffidavit, applicantAffidavit } = useAppContext();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true });
    } else {
      dispatch({ type: relevantAffidavit, payload: false });
    }
  }

  return (
    <div className="leading-relaxed">
      <h2 className="text-center">
        {/* Enter information{" "} */}
        <span className="sm:hidden">
          {" "}
          Enter information and print all papers
        </span>
      </h2>
      <div className="text-center font-bold sm:hidden">
        Only available on laptop/desktop.
      </div>
      <article className="m-4 grid grid-cols-2 gap-4 sm:block">
        <div>
          <h3>The Applicant</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name</span>
            <DataInput prop="applicant" />
            <span>Address</span>
            <DataInput prop="applicantAddress" />
            <span>Affidavit?</span>
            <input
              type="checkbox"
              checked={applicantAffidavit}
              onChange={(e) => handleAffidavit("applicantAffidavit", e)}
              className="m-1"
            ></input>
          </div>
        </div>
        <div>
          <h3>The Solicitors</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name </span>
            <DataInput prop="solicitors" />
            <span>Solicitors' Address </span>
            <DataInput prop="solicitorsAddress" />
            <span>Phone </span> <DataInput prop="solicitorsPhone" />
            <span>Fax </span>
            <DataInput prop="solicitorsFax" />
          </div>
        </div>
        <div className="">
          <h3>Deponent on Identity</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name of Deponent </span> <DataInput prop="idDeponent" />
            Deponent Address <DataInput prop="idDeponent" />
            Affidavit?
            <input
              type="checkbox"
              checked={idAffidavit}
              onChange={(e) => handleAffidavit("idAffidavit", e)}
            ></input>
          </div>
        </div>

        <div>
          <h3>Other information</h3>
          <div className="grid grid-cols-2 gap-2">
            Mover <DataInput prop="mover" />
            Date of Certificate of Qualification for Admission{" "}
            <DataInput prop="certdate" />
          </div>
        </div>
      </article>
      <p className="">
        The year of application is fixed to this year, i.e.{" "}
        {new Date().getFullYear()}.
      </p>{" "}
      <div className="hidden">
        <ComponentToPrint ref={componentRef} />
      </div>
      <article className="m-1 text-center">
        <button
          onClick={handlePrint}
          className="m-2 hidden w-40 bg-slate-600 p-1 sm:inline-block "
        >
          Print
        </button>
      </article>
    </div>
  );
}

