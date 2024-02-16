import { useAppContext } from "../Context.js"

export default function LettersTo3Regulators() {
  return (
    <div className="App">
      <p>The Registrar</p>
      <p>High Court</p>
      <p>38 Queensway</p>
      <p>Hong Kong</p>

      <LetterBody />
      <div className="pagebreak"></div>
      <p>The Honorary Secretary</p>
      <p>Hong Kong Bar Association</p>
      <p>LG2, High Court</p>
      <p>38 Queensway</p>
      <p>Hong Kong</p>

      <LetterBody />
      <div className="pagebreak"></div>

      <p> The Secretary for Justice</p>
      <p>Department of Justice</p>
      <p>6/F, Main and East Wings</p>
      <p>Justice Place</p>
      <p>18 Lower Albert Road</p>

      <LetterBody />
      <div className="pagebreak"></div>
    </div>
  )
}

function LetterBody() {
  const { applicant, solicitors, mover } = useAppContext()

  return (
    <div>
      <p>[date]</p>
      <p>Dear Sirs,</p>
      <div className="centre">
        <p>
          <u>Re: Application of {applicant}</u> <u>for admission as</u>
        </p>
        <p>
          <u>a Barrister of the High Court of the HKSAR</u>
        </p>
      </div>
      <p>
        Please be informed that an application by {applicant} for admission as a
        Barrister of the High Court of the Hong Kong Special Administrative
        Region has been filed in the High Court today. Enclosed please find a
        copy of the following documents for your perusal:
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
      <p>We are instructed that {mover} will be the mover of the applicant.</p>
      <p>
        Kindly let us know if you need further information or there are any
        outstanding matters in respect of the said proceedings that need to be
        dealt with.
      </p>
      <p>Thank you for your kind attention.</p>
      <p>Yours faithfully,</p>
      <p>{solicitors}</p>
    </div>
  )
}
