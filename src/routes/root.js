import React, { useState } from "react";
// import { Link } from "react-router-dom"

// import { PhilosophyPage } from "./PhilosophyPage";
import AffidavitOfApplicant from "./affidavitOfApplicant";
import AffidavitOfIdentity from "./affidavitOfIdentity";
import NoticeOfMotion from "./noticeOfMotion";
import CoverLetters from "./coverLetters";
import { InfoPage } from "./InfoPage.js";
import { WelcomePage } from "./WelcomePage";

export default function Root() {
  const [page, setPage] = useState("Welcome");

  return (
    <div className="min-h-100vh text-normal m-2 flex h-screen flex-col bg-slate-800 font-serif leading-relaxed text-white md:text-lg">
      <header className="">
        <h1 className="sticky m-1 mt-2 text-center text-xl">
          Barrister Admission Bundle
        </h1>
        <h2 className="sticky m-1 mt-2 text-center text-xl">
          (beta version)
        </h2>
        <nav className="m-1 flex grid-cols-3 flex-col justify-between gap-x-1 bg-slate-600 p-1 md:grid">
          {/*  */}{" "}
          <button
            className="border-2 border-white text-center md:border-0"
            onClick={() => setPage((prev) => "Welcome")}
          >
            About
          </button>{" "}
          <button
            className="border-2 border-white text-center  md:border-0"
            onClick={() => setPage((prev) => "Info")}
          >
            Enter Information
          </button>
          <select
            onChange={(e) => setPage((prev) => e.target.value)}
            className="border-2 border-white bg-slate-600 text-center md:border-0"
          >
            <option value="Info">Select Document</option>
            <option value="Notice">Notice of Motion</option>
            <option value="Applicant">Affirmation of the Applicant</option>
            <option value="ID">Affirmation of Identity</option>
            <option value="Letters">Cover letters</option>
          </select>
        </nav>
      </header>
      <main>
        {page === "Welcome" && <WelcomePage setPage={setPage} />}
        {page === "Info" && <InfoPage />}
        {/* {page === "Philosophy" && <PhilosophyPage />} */}

        {page === "Notice" && <NoticeOfMotion />}
        {page === "Applicant" && <AffidavitOfApplicant />}
        {page === "ID" && <AffidavitOfIdentity />}
        {page === "Letters" && <CoverLetters />}
       
      </main>
      <footer className="mt-auto  bg-slate-600 text-center">
        <p className="">MIT License</p>
      </footer>
    </div>
  );
}
