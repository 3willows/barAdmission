import { useAppContext } from "../context.jsx";
import Tab from "../helper/Tab.jsx"

export default function ExhibitCoverPage({
  documentTitle,
  certdate,
  description,
  abbreviation,
  exhibitNumber,
}) {
  const { applicant, year } = useAppContext();
  return (
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
              IN THE MATTER of the Application of {applicant} for admission as a
              Barrister of the High Court of the Hong Kong Special
              Administrative Region
            </p>
            <p className="">and</p>
            <p className="">
              IN THE MATTER of Section 27 of the Legal Practitioners Ordinance,
              Cap. 159
            </p>
          </div>
        </div>
        <div className="text-center mb-5 mt-5 ">
          <p>
            THIS IS EXHIBIT {abbreviation}-{exhibitNumber} REFERRED TO
          </p>
          <p>IN THE {documentTitle}</p>
          <p>
            AFFIRMED ON THE <Tab /> DAY OF {year}
          </p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <p>Date</p>
            <p>{certdate}</p>
          </div>
          <div className="">
            <p>Description</p>
            <p> {description} </p>
          </div>
          <div className="">
            <p>Exhibit Marked</p>
            <p>
              {abbreviation}-{exhibitNumber}
            </p>
          </div>
          <div className="">
            <p>No. of pages</p>
          </div>
        </div>
        <div className="my-5 grid grid-cols-4 gap-4">
          <span></span>
          <span></span>
          <span></span>
          BEFORE ME,
        </div>
      </div>
    </div>
  );
}
