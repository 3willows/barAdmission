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
              In an ideal world, everyone should have an intuitive
              understanding of litigation the process.                Everyone should be able to put themselves in the shoes of the Judge, and have a feel for the kind of job the Court needs to do.
            </p>
          </li>
          <li>
            <p>
              This will help the public appreciate the value added by lawyers, and  inform discussions about the place of law in a civilised society.
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
