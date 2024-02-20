import React from "react";
import { useAppContext } from "../Context.js";
import { DataInput } from "../components/DataInput";

export function InfoPage() {
  const { dispatch } = useAppContext();

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true });
    } else {
      dispatch({ type: relevantAffidavit, payload: false });
    }
  }
  return (
    <div className="leading-relaxed	">
      <h2 className="text-center">Enter information</h2>
      <article className="m-4 grid grid-cols-2 gap-4">
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
       <p className="">
        The year of application is fixed to this year, i.e. {new Date().getFullYear()}.
      </p></article>
     
    </div>
  );
}
