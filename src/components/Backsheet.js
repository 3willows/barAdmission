import { useAppContext } from "../Context.js"
import { Tab } from "./Tab.js"

export default function Backsheet({ documentTitle }) {
  const {
    applicant,
    year,
    solicitors,
    solicitorsAddress,
    solicitorsPhone,
    solicitorsFax,
  } = useAppContext()
  return (
    <div className="flex flex-col">
      <div className="pagebreak"></div>
      <div className="text-right">
        <p>
          HCA <Tab />/{year}
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
        <p className="text-center">{documentTitle}</p>
      </div>
      <div className="text-center">
        <p>Dated:</p>
        <p> Filed on: </p> 
        <p>{solicitors}</p>
        <p>
          <> Solicitors for {applicant}</>
        </p>
        <p>{solicitorsAddress}</p>
        <p>Tel: {solicitorsPhone}</p>
        <p>Fax: {solicitorsFax}</p>
        <p>Reference: </p>
      </div>
    </div>
  )
}
