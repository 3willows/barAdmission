import { useAppContext } from "../Context.js";
import { Tab } from "./Tab.js";

export default function Heading({ type, deponent }) {
  const { applicant, year } = useAppContext();
  return (
    <div className="m-5 flex flex-col justify-between">
      <div>
        {type === "affirmation" && (
          <>
            <div className="justify-between md:flex">
              <span>For filing</span>
              <div>
                <p>
                  Applicant:{deponent}:1st:
                  <Tab/>
                </p>
                <p>
                  HCMP <Tab />/{year}
                </p>
              </div>
            </div>
          </>
        )}
        {type === "notice" && (
          <>
            <div className="flex justify-between">
              <div className="text-left">
                <div className="border border-white"> Claim nature:</div>
                <div className="border border-white">
                  {" "}
                  A. Non-monetary cliam only
                </div>
                <div className="border border-white">
                  {" "}
                  B. Profession (Barristers)
                </div>
              </div>
              <div>
                HCMP <Tab />/{year}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="text-center">
        <p>IN THE HIGH COURT OF THE</p>
        <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
        <p>COURT OF FIRST INSTANCE</p>
        <p>
          MISCELLANEOUS PROCEEDINGS NO. <Tab /> OF {year}
        </p>
      </div>
      <div>
        <div className="my-5 grid grid-cols-2 gap-4">
          <span></span>
          <div className="">
            <p className="">
              IN THE MATTER of the Application of {applicant} for admission as a
              Barrister of the High Court of the Hong Kong Special
              Administrative Region
            </p>
            <p className="">and</p>
            <p className="">
              IN THE MATTER of Section 27 of the Legal Practitioners Ordinance,
              Cap. 159
            </p>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
