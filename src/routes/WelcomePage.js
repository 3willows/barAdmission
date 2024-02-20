import React from "react";

export function WelcomePage({ setPage }) {
  return (
    <div>
      <article className="">
        <p className="py-4">
          This is a webpage designed to let you create all the necessary Court
          documents for barrister admission in Hong Kong in one go.
        </p>
        <p className="m-1 text-center">
          <button
            onClick={() => setPage((prev) => "Info")}
            className="m-2 bg-slate-600 p-2"
          >
            Enter information
          </button>
        </p>
      </article>
    </div>
  );
}
