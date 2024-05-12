import { useAppContext } from "../context.jsx";
import Heading from "../components/CommonHeading.jsx";
import Backsheet from "../components/Backsheet.jsx";
import abbrev from "../helper/abbrev.jsx";
import Jurat from "../components/Jurat.jsx";
import ExhibitCoverPage from "../components/ExhibitCoverPage.jsx";

export default function AffidavitOfApplicant() {
  const { applicantAffidavit, applicant, applicantAddress, certdate } =
    useAppContext();

  const abbreviation = abbrev(applicant);

  const documentTitle = `${
    applicantAffidavit ? "AFFIDAVIT" : "AFFIRMATION"
  } OF ${applicant.toUpperCase()}`;

  return (
    <div className="m-5 leading-relaxed">
      <Heading type="affirmation" deponent={applicant} />
      <div className="text-center">{documentTitle}</div>
      <p className="">
        I, {applicant} of {applicantAddress}, DO{" "}
        {applicantAffidavit ? "MAKE OATH" : "SOLEMNLY AFFIRM"} and say as
        follows:-
      </p>
      <ol className="m-5 list-decimal">
        <li>
          I am the Applicant in these proceedings. I make this Affidavit in
          support of my application to be admitted as a barrister under Section
          27 of the Legal Practitioners Ordinance, Cap. 159.
        </li>
        <li>
          I am not in practice as a solicitor either on my own account or as a
          partner or salaried employee in a firm of solicitors practising in
          Hong Kong.
        </li>
        <li>I have obtained a Postgraduate Certificate in Laws.</li>
        <li>
          I have completed at least 6 months of the period of approved pupillage
          specified in Section 10 of the Barristers (Qualification for Admission
          and Pupillage) Rules Cap. 159 sub. Leg AC. There is now produced and
          shown to me marked Exhibit {abbreviation}-1, a certified true copy of
          the Certificate of Qualification for Admission dated {certdate} issued
          to me by the Hong Kong Bar Association.
        </li>
        <li>
          I have been ordinarily resident in Hong Kong for at least 7 years.
        </li>
        <div style={{ pageBreakBefore: "always" }}></div>
        {/* observe the jurat rule */}
        <li>
          I verily believe that I have satisfied the requirements of Section 27
          of the Legal Practitioners Ordinance, Cap. 159 and humbly pray that
          this Honourable Court will admit me as a barrister of the Honourable
          Court.
        </li>
      </ol>
      <Jurat affidavit={applicantAffidavit} />
      <br className="pagebreak"></br>
      <ExhibitCoverPage
        documentTitle={documentTitle}
        certdate={certdate}
        description="Certified true copy of the
          Certificate of Qualification for Admission"
        abbreviation={abbreviation}
        exhibitNumber={1}
      />{" "}
      <br className="pagebreak"></br>
      <Backsheet documentTitle={documentTitle} />
    </div>
  );
}
