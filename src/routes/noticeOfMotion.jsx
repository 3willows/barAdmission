import { useAppContext } from "../Context.js";
import { Tab } from "../components/Tab.js";
import Heading from "../components/CommonHeading.js";
import Backsheet from "../components/Backsheet.js";

export default function NoticeOfMotion() {
  const { applicant, solicitors, solicitorsAddress, year } = useAppContext();

  const documentTitle = "NOTICE OF MOTION";

  return (
    <div className="justify-btween m-5 flex flex-col">
      <div>
        <Heading type="notice" />
        <p className="my-5 text-center">{documentTitle}</p>
        <div className="m-5">
          <p>
            TAKE NOTICE that the High Court of the Hong Kong Special
            Administrative Region will be moved before the Honourable <Tab /> on{" "}
            <Tab />, <Tab />
            <Tab />, <Tab /> at <Tab /> or so soon thereafter as Counsel can be
            heard on behalf of {applicant} the above-named Applicant for an
            Order that the said {applicant} be admitted and enrolled as a
            Barrister of the High Court of the Hong Kong Special Administrative
            Region.
          </p>
        </div>
        <div className="m-5">
          <p className="">
            {" "}
            Dated this <Tab /> day of <Tab /> {year}
          </p>
          <p className="">Registrar</p>
        </div>
      </div>
      <div className="pagebreak"></div>{" "}
      <div className="m-5">
        <br></br> This Notice of Motion was issued by {solicitors},{" "}
        {solicitorsAddress}, Solicitors for the Applicant.
        <div className="top-right">
          <p className="">{solicitors}</p>
          <p className=""> Solicitors for the Applicant</p>
        </div>
        <div className="flex">
          <p className="m-2">To:</p>
          <div className="">
            <div className="my-2">
              <p>The Registrar</p>
              <p>High Court</p>
              <p>38 Queensway</p>
              <p>Hong Kong</p>
            </div>
            <p>and</p>
            <div className="my-2">
              <p>The Honorary Secretary</p>
              <p>Hong Kong Bar Association</p>
              <p>LG2, High Court</p>
              <p>38 Queensway</p>
              <p>Hong Kong</p>
            </div>
            <p>and</p>{" "}
            <div className="my-2">
              <p> The Secretary for Justice</p>
              <p>Department of Justice</p>
              <p>6/F, Main and East Wings</p>
              <p>Justice Place</p>
              <p>18 Lower Albert Road</p>{" "}
            </div>
          </div>
        </div>
        <div className="pagebreak"></div>
        <Backsheet documentTitle={documentTitle} />
      </div>
    </div>
  );
}
