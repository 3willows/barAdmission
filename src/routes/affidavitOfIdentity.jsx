import { useAppContext } from "../Context.js";
import Heading from "../components/CommonHeading.js";
import { Tab } from "../components/Tab.js";
import abbrev from "../helper/abbrev.js";
import Backsheet from "../components/Backsheet.js";
import Jurat from "../components/Jurat.js";

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
    <div className="m-5">
      <Heading />
      <p className="text-center">{documentTitle}</p>

      <p className="">
        I, {idDeponent} of {idDeponentAddress}, solemnly, sincerely and truly
        declare and affirm as follows:
      </p>
      <ol className="list-decimal m-5">
        <li>
          The photograph attached hereto and marked {abbreviation}-1 is a true
          likeness of {applicant} of {applicantAddress}, the Applicant herein.
        </li>
        <li>
          I have examined the Hong Kong Identity Card <Tab /> of the said
          {applicant} and I am satisfied that s/he is the Applicant in these
          proceedings.
        </li>
      </ol>
      <Jurat affidavit={idAffidavit} />
      <Backsheet documentTitle={documentTitle} />
    </div>
  );
}
