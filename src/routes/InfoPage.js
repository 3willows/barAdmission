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
  const { dispatch, idAffidavit, applicantAffidavit, year } = useAppContext();
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
      <div className="text-center bold sm:hidden">
        Only available on laptop/desktop.
      </div>
      <article className="md:grid m-4 grid-cols-2 gap-4 ">
        <div>
          <h3 className=" my-1 uppercase">The Applicant</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name</span>
            <DataInput prop="applicant" />
            <span>Address</span>
            <DataInput prop="applicantAddress" />
            <span>Affidavit?</span>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={applicantAffidavit}
              onChange={(e) => handleAffidavit("applicantAffidavit", e)}
            ></input>
          </div>
        </div>
        <div>
          <h3 className="uppercase my-1">The Solicitors</h3>
          <div className="grid grid-cols-2 gap-2">
            <span> Name </span>
            <DataInput prop="solicitors" />
            <span>Solicitors' Address </span>
            <DataInput prop="solicitorsAddress" />
            <span>Phone </span> <DataInput prop="solicitorsPhone" />
            <span>Fax </span>
            <DataInput prop="solicitorsFax" />
          </div>
        </div>
        <div className="">
          <h3 className="uppercase my-1">ID Deponent</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name of Deponent </span> <DataInput prop="idDeponent" />
            Deponent Address <DataInput prop="idDeponentAddress" />
            Affidavit?
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={idAffidavit}
              onChange={(e) => handleAffidavit("idAffidavit", e)}
            ></input>
          </div>
        </div>

        <div>
          <h3 className="uppercase my-1">Other information</h3>
          <div className="grid grid-cols-2 gap-2">
            Mover <DataInput prop="mover" />
            Date of Certificate of Qualification for Admission{" "}
            <DataInput prop="certdate" />
          </div>
        </div>
      </article>
      <p className="">
        The year of application is fixed to this year, i.e. {year}.
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
