import { useAppContext } from "../Context.js"
import { Tab } from "./Tab.js"

export default function Back({ documentTitle }) {
  const {
    applicant,
    year,
    solicitors,
    solicitorsAddress,
    solicitorsPhone,
    solicitorsFax,
  } = useAppContext()
  return (
    <>
      <div class="top-right">
        <p>
          HCA <Tab />/{year}
        </p>
      </div>
      <div className="centre">
        <p>IN THE HIGH COURT OF THE</p>
        <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
        <p>COURT OF FIRST INSTANCE</p>
        <p>
          MISCELLANEOUS PROCEEDINGS NO. <Tab /> OF {year}
        </p>
      </div>
      <div>
        <p className="">
          IN THE MATTER of the Application of {applicant} for admission as a
          Barrister of the High Court of the Hong Kong Special Administrative
          Region
        </p>
        <p className="">and</p>
        <p className="">
          IN THE MATTER of Section 27 of the Legal Practitioners Ordinance, Cap.
          159
        </p>
        <p>{documentTitle}</p>
      </div>
      <div className="centre">
        <p>Dated:</p>
        <p> Filed on: </p>
        <p>This affirmation is filed on behalf of the Applicant.</p>
        <p></p> <p></p> <p></p> <p>{solicitors}</p>
        <p>
          <> Solicitors for {applicant}</>
        </p>
        <p>{solicitorsAddress}</p>
        <p>{solicitorsPhone}</p>
        <p className="">{solicitorsFax}</p>
        <p>Reference: </p>{" "}
      </div>
    </>
  )
}
