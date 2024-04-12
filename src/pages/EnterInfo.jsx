import React, { useRef } from "react";
import { useAppContext } from "../context.jsx";
import { DataInput } from "../components/DataInput.jsx";

import AffidavitOfApplicant from "./AffidavitOfApplicant.jsx";
import AffidavitOfIdentity from "./AffidavitOfIdentity.jsx";
import NoticeOfMotion from "./NoticeOfMotion.jsx";
import CoverLetters from "./CoverLetters.jsx";


const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* <style>{getPageMargins()}</style> */}
      <NoticeOfMotion />
      {/* <div className="pagebreak"></div> */}
      <AffidavitOfApplicant />
      {/* <div className="pagebreak"></div> */}
      <AffidavitOfIdentity />
      {/* <div className="pagebreak"></div> */}
      <CoverLetters />
    </div>
  );
});

export default function EnterInfo() {
  const { dispatch, idAffidavit, applicantAffidavit } = useAppContext();
  const sourceRef = useRef(null);

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true });
    } else {
      dispatch({ type: relevantAffidavit, payload: false });
    }
  }

  function exportHTML() {
    const sourceHTML = sourceRef.current.innerHTML;

    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";

    const fullHTML = header + sourceHTML + footer;
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(fullHTML);

    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }

  return (
    <div className=" flex	h-full flex-col justify-between leading-relaxed">
      <h2 className="m-4 text-left sm:hidden">
        Changes are immediately reflected in the "Select Document" Tab.
      </h2>
      <div className="m-4 text-left sm:hidden">
        Printing only available on laptop/desktop.
      </div>
      <article className="m-4 grid-cols-2 gap-4 md:grid ">
        <div>
          <h3 className=" my-1 font-bold">The Applicant</h3>
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
          <h3 className="my-1 font-bold">The Solicitors</h3>
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
          <h3 className="my-1 font-bold">The ID Deponent</h3>
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
          <h3 className="my-1 font-bold">Other information</h3>
          <div className="grid grid-cols-2 gap-2">
            Mover <DataInput prop="mover" />
            Date of Certificate of Qualification for Admission
            <DataInput prop="certdate" />
          </div>
        </div>
      </article>

      <div className="m-4">
        <p className="hidden sm:block">
          {" "}
          Changes are immediately reflected in the "Select Document" Tab.
        </p>
        <p className="hidden sm:block">
          Printing only available on laptop/desktop. (Not available on Firefox
          Android)
        </p>
        <div className="hidden">
          <ComponentToPrint ref={sourceRef}  id="source-html"/>
        </div>
        <button
          onClick={exportHTML}
          className="my-1 hidden w-40 bg-slate-600 p-1 text-white sm:inline-block "
        >
          Print Word
        </button>
      </div>
    </div>
  );
}
