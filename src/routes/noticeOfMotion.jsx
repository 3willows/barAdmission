import { useAppContext } from "../Context.js"
import { Tab } from "../components/Tab.js"
import Heading from "../components/AffirmationHeading.js"

export default function NoticeOfMotion() {
  const { applicant, solicitors, year } = useAppContext()
  return (
    <>
    <Heading />
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
