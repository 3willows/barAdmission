import { useAppContext } from "../Context.js"
import Heading from "../components/AffirmationHeading.js"
import abbrev from "../helper/abbrev.js"

export default function AffidavitOfApplicant() {
  const { applicant, applicantAddress, certdate } = useAppContext()

  const abbreviation = abbrev(applicant)

  return (
    <>
      <Heading />
      <p className="">AFFIDAVIT OF {applicant}</p>
      <p className="">
        I, {applicant} of {applicantAddress}, MAKE OATH and say as follows:-
      </p>
      <ol>
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
          shown to me marked {abbreviation}-1, a certified true copy of the
          Certificate of Qualification for Admission dated {certdate} issued to
          me by the Hong Kong Bar Association.{" "}
        </li>
        <li>
          I have been ordinarily resident in Hong Kong for at least 7 years.
        </li>
        <li>
          I verily believe that I have satisfied the requirements of Section 27
          of the Legal Practitioners Ordinance, Cap. 159 and humbly pray that
          this Honourable Court will admit me as a barrister of the Honourable
          Court.{" "}
        </li>
      </ol>
      <p className="">This Affidavit is filed on behalf of the Applicant.</p>
    </>
  )
}
