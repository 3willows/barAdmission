import React from "react";

export function PhilosophyPage() {
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
              the process. They should know in advance what the document
              templates at each stage looks like, so that they fully understand
              how much work lawyers put in to explain their story succiently to
              a total stranger.
            </p>
          </li>
          <li>
            <p>
              Even better, litigants should have sight of papers in a factually
              contested case, so that she can place herself in the shoes of the
              Judge, who has the difficult job of having to decide whose version
              is true as best she can. Only then is a truly informed decision
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
