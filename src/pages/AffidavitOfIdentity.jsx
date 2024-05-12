import { useAppContext } from "../context.jsx";
import Tab from "../helper/Tab.jsx"
import Heading from "../components/CommonHeading.jsx";
import Backsheet from "../components/Backsheet.jsx";
import abbrev from "../helper/abbrev.jsx";
import Jurat from "../components/Jurat.jsx";
import ExhibitCoverPage from "../components/ExhibitCoverPage.jsx";

export default function AffidavitOfIdentity() {
  const {
    idAffidavit,
    idDeponent,
    idDeponentAddress,
    applicant,
    applicantAddress,
  } = useAppContext();

  const abbreviation = abbrev(idDeponent);
  const documentTitle = `${
    idAffidavit ? "AFFIDAVIT" : "AFFIRMATION"
  } OF ${idDeponent.toUpperCase()}`;

  return (
    <div className="m-5 leading-relaxed	">
      <Heading type="affirmation" deponent={idDeponent} />
      <div className="text-center">{documentTitle}</div>
      <p>
        I, {idDeponent} of {idDeponentAddress}, solemnly, sincerely and truly
        declare and affirm as follows:
      </p>
      <ol className="m-5 list-decimal">
        <li>
          The photograph attached hereto and marked {abbreviation}-1 is a true
          likeness of {applicant} of {applicantAddress}, the Applicant herein.
        </li>
        <li>
          I have examined the Hong Kong Identity Card <Tab /> of the said{" "}
          {applicant} and I am satisfied that s/he is the Applicant in these
          proceedings.
        </li>
      </ol>
      <Jurat affidavit={idAffidavit} />
      <br className="pagebreak"></br>
      <ExhibitCoverPage
        documentTitle={documentTitle}
        description={`Photograph of ${applicant}`}
        abbreviation={abbreviation}
        exhibitNumber={1}
      />{" "}
      <br className="pagebreak"></br>
      <Backsheet documentTitle={documentTitle} />
    </div>
  );
}
