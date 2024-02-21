import React from "react";

export function WelcomePage({ setPage }) {
  return (
    <div className="m-4">
      <article className="m-5 text-center">
        <p className="m-5 text-center">
          Generate court papers for Hong Kong barrister admission in one click.
        </p>
        <p className="m-5 text-center">
          For pupils seeking admission in {new Date().getFullYear()}.
        </p>
        <p className="m-1 text-center">
          <button
            onClick={() => setPage((prev) => "Info")}
            className="m-2 w-40 bg-slate-600 p-1"
          >
            Enter Information
          </button>
        </p>
      </article>
    </div>
  );
}
