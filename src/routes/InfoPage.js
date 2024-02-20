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
    <div>
      <article className="m-2 grid grid-cols-2 gap-2">
        {" "}
        <div className="">
          <h3>The Applicant</h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="m-1">Applicant Name</span>
            <DataInput prop="applicant" />
            <span className="m-1">Applicant Address</span>
            <DataInput prop="applicantAddress" />
            <span className="m-1">Affidavit?</span>
            <input
              type="checkbox"
              onChange={(e) => handleAffidavit("applicantAffidavit", e)}
              className="m-1"
            ></input>
          </div>{" "}
        </div>
        <div className="m-1">
          <h3>The Solicitors</h3>
          <p className="m-1">
            Name of Solicitors for the Applicant <DataInput prop="solicitors" />
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
    </div>
  );
}
