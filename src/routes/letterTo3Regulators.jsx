import { useAppContext } from "../Context.js"

export default function LettersTo3Regulators() {
  const { applicant, solicitors, mover } = useAppContext()
  return (
    <>
      <p>The Registrar</p>
      <p>High Court</p>
      <p>38 Queensway</p>
      <p>Hong Kong</p>
      <p>
      <p>The Honorary Secretary</p>
      <p>Hong Kong Bar Association</p>
      <p>LG2, High Court</p>
      <p>38 Queensway</p>
      <p>Hong Kong</p>

        <mark>[date]</mark>
      </p>
      <p>Dear Sirs,</p>
      <p>
        <u>Re: Application of {applicant}</u>{" "}
        <u>for admission as</u>
      </p>
      <p>
        <u>a Barrister of the High Court of the HKSAR</u>
      </p>
      <p>
        Please be informed that an application by {applicant} for admission as a Barrister of the High Court of the Hong Kong Special
        Administrative Region has been filed in the High Court today. Enclosed
        please find a copy of the following documents for your perusal:
      </p>
      <ol type="1">
        <li>
          <p>Notice of Motion;</p>
        </li>
        <li>
          <p>Affidavit of {applicant}; and</p>
        </li>
        <li>
          <p>Affirmation of Identity.</p>
        </li>
      </ol>
      <p>
        We are instructed that {mover} will be the mover of the applicant.
      </p>
      <p>
        Kindly let us know if you need further information or there are any
        outstanding matters in respect of the said proceedings that need to be
        dealt with.
      </p>
      <p>Thank you for your kind attention.</p>
      <p>Yours faithfully,</p>
      <p>{solicitors}</p>
    </>
  )
}
