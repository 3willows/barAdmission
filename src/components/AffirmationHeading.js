import { useAppContext } from "../Context.js"
import { Tab } from "./Tab.js"

export default function Heading() {
  const { applicant, year } = useAppContext()
  return (
    <>
      <div class="top-right">
        <p>
          HCA <Tab />/{year}
        </p>
      </div>
      <div>
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
      </div>
    </>
  )
}
