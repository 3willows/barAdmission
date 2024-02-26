import { useAppContext } from "../context.js";
import { Tab } from "./Tab.js";

export default function Backsheet({ documentTitle }) {
  const {
    applicant,
    year,
    solicitors,
    solicitorsAddress,
    solicitorsPhone,
    solicitorsFax,
  } = useAppContext();
  return (
    <div>
      <div className="m-5 flex flex-col justify-between">
        <div className="text-right">
          <p>
            HCMP <Tab />/{year}
          </p>
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
          <div className="my-4 grid grid-cols-2 gap-4">
            <span></span>
            <div className="">
              <p className="">
                IN THE MATTER of the Application of {applicant} for admission as
                a Barrister of the High Court of the Hong Kong Special
                Administrative Region
              </p>
              <p className="">and</p>
              <p className="">
                IN THE MATTER of Section 27 of the Legal Practitioners
                Ordinance, Cap. 159
              </p>
            </div>
          </div>
          <p className="mb-5 mt-5 text-center">{documentTitle}</p>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-4">
            <span></span>
            <div className="">
              {" "}
              <p>Dated:</p>
              <p> Filed on: </p>
            </div>
            <span></span>
          </div>

          <div className="mt-auto text-center">
            <p>{solicitors}</p>
            <p>Solicitors for the Applicant</p>
            <p>{solicitorsAddress}</p>
            <p>Tel: {solicitorsPhone}</p>
            <p>Fax: {solicitorsFax}</p>
            <p>Reference: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
