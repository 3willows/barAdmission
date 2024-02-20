import React, { useState } from "react";
// import { Link } from "react-router-dom"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import AffidavitOfApplicant from "./affidavitOfApplicant";
import AffidavitOfIdentity from "./affidavitOfIdentity";
import NoticeOfMotion from "./noticeOfMotion";
import CoverLetters from "./coverLetters";
import { InfoPage } from "./InfoPage.js";
import { WelcomePage } from "./WelcomePage";

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

export default function Root() {
  const [page, setPage] = useState("Welcome");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-100vh m-2 flex h-screen flex-col bg-slate-800 font-serif text-lg leading-relaxed text-white	">
      <header className="">
        <h1 className="sticky m-1 mt-2 text-center text-xl">
          Barrister Admission Bundle
        </h1>
        <nav className="m-1 flex grid-cols-3 flex-col justify-between gap-x-1 bg-slate-600 p-1 md:grid">
          {/*  */}{" "}
          <button
            className="border-2 border-white text-center md:border-0"
            onClick={() => setPage((prev) => "Welcome")}
          >
            About
          </button>
          <select
            onChange={(e) => setPage((prev) => e.target.value)}
            className="border-2 border-white bg-slate-600 text-center text-center md:border-0"
          >
            <option value="Info">Documents</option>
            <option value="Notice">Notice of Motion</option>
            <option value="Applicant">Affirmation of the Applicant</option>
            <option value="ID">Affirmation of Identity</option>
            <option value="Letters">Cover letters</option>
          </select>
          <button
            className="border-2 border-white text-center  md:border-0"
            onClick={() => setPage((prev) => "Philosophy")}
          >
            Philosophy
          </button>
        </nav>
      </header>
      <main>
        {page === "Welcome" && <WelcomePage setPage={setPage} />}
        {page === "Info" && <InfoPage />}
        {page === "Philosophy" && <PhilosophyPage />}

        {page === "Notice" && <NoticeOfMotion />}
        {page === "Applicant" && <AffidavitOfApplicant />}
        {page === "ID" && <AffidavitOfIdentity />}
        {page === "Letters" && <CoverLetters />}
        <div className="hidden">
          <ComponentToPrint ref={componentRef} />
        </div>
        <article className="m-1 text-center">
          <button onClick={handlePrint} className="m-2 bg-slate-600 p-2">
            Print {page === "Info" ? `Bundle` : `Sample`}
          </button>{" "}
        </article>
      </main>
      <footer className="mt-auto  bg-slate-600 text-center">
        <p className="">MIT License</p>
      </footer>
    </div>
  );
}

function PhilosophyPage() {
  return (
    <div>
      <article className="m-5">
        <ol className="leading-leisure m-5 flex list-decimal flex-col gap-3">
          <li>
            <p>
              My long term ambition is to make a website that takes the user
              through the steps of a Hong Kong litigation, giving her the basic,
              boilerplate advice about how much time it will take, how eventual
              judgments can be enforced etc.
            </p>
          </li>
          <li>
            <p>
              The aim is not to replace human expertise. But to let the lawyers
              to focus on the tailor-made, often philosophical advice about the
              costs and benefits of litigation.
            </p>
          </li>
          <li>
            <p>
              Ideally, the litigant should have an intuitive understanding of
              the process, what documents at each stage is going to look like,
              helping the user place herself in the shoes of the Judge who needs
              to decide all the issues. Only then is a truly informed decision
              possible and the user fully able to appreciate the benefit of
              legal advice.
            </p>
          </li>
          <li>
            <p>
              But let’s see if future barristers find the information here
              useful first! Feedback on user experience, design, or the{" "}
              <u>
                <a
                  href="https://github.com/3willows/barAdmission"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  source code{" "}
                </a>
              </u>
              are welcome.
            </p>
          </li>
        </ol>
      </article>
    </div>
  );
}
