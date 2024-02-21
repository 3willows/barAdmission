import React from "react";

export function PhilosophyPage() {
  return (
    <div>
      <article className="m-5">
        <ol className="leading-leisure m-5 flex list-decimal flex-col gap-3">
          <li>
            <p>
              This is part of an ongoing project to provide basic, boilerplate,
              information about Hong Kong litigation to the public.
            </p>
          </li>
          <li>
            <p>
              So that the public can come to an informed understanding of the value added by lawyers.
            </p>
          </li>
          <li>
            <p>
              In an ideal world, everyone should have an intuitive
              understanding of litigation the process.                Everyone should be able to put themselves in the shoes of the Judge, and have an intuitive feel for the kind of job the Court needs to do.

            </p>
          </li>
          <li>
            <p>
              Otherwise it is hard to see how informed public discussion about Law and the courts is possible.
            </p>
          </li>
          <li>
            <p>
              Feedback on user experience, design, or the{" "}
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
