import React from "react";

export default function Landing({ setPage }) {
  return (
    <div className="m-4">
      <article className="m-5 text-center">
        <p className="m-5 text-center">
          Generate court papers for Hong Kong barrister admission in one click.
        </p>
        <p className="m-5 text-center">
          For pupils seeking admission in {new Date().getFullYear()}.
        </p>
      </article>
    </div>
  );
}
