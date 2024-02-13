import { useAppContext } from "../Context.js"

export default function NoticeOfMotion() {
  const { applicant, solicitors, year } = useAppContext()
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
          ACTION NO. <Tab /> OF {year}
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
      <div className="">NOTICE OF MOTION</div>
      <div className="">
        <p
          className="
        "
        >
          TAKE NOTICE that the High Court of the Hong Kong Special
          Administrative Region will be moved before the Honourable <Tab /> on{" "}
          <Tab />, <Tab />
          <Tab />, <Tab /> at <Tab /> or so soon thereafter as Counsel can be
          heard on behalf of {applicant} the above-named Applicant for an Order
          that the said {applicant} be admitted and enrolled as a Barrister of
          the High Court of the Hong Kong Special Administrative Region.
        </p>
      </div>
      <div className="">
        <p className="">
          {" "}
          Dated this <Tab /> day of <Tab /> {year}
        </p>
        <p className="">Registrar</p>
      </div>
      <div className="">
        This Notice of Motion was issued by {solicitors}, [Solicitors' Address]
        Solicitors for the Applicant.
      </div>
    </>
  )
}

function Tab() {
  return <span>&emsp;</span>
}
