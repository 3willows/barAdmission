import { useAppContext } from "../context";


function LetterBody() {
  const { applicant, solicitors, mover, idAffidavit, applicantAffidavit } =
    useAppContext();

  return (
    <div className="leading-relaxed">
      <p className="text-right">[date]</p>
      <p>Dear Sirs,</p>
      <div className="text-center">
        <p>
          <u>Re: Application of {applicant}</u> <u>for admission as</u>
        </p>
        <p>
          <u>a Barrister of the High Court of the HKSAR</u>
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <p>
          Please be informed that an application by {applicant} for admission as
          a Barrister of the High Court of the Hong Kong Special Administrative
          Region has been filed in the High Court today. Enclosed please find a
          copy of the following documents for your perusal:
        </p>
        <ol className="m-5 list-decimal">
          <li>
            <p>Notice of Motion;</p>
          </li>
          <li>
            <p>
              {applicantAffidavit ? "Affidavit" : "Affirmation"} of {applicant};
              and
            </p>
          </li>
          <li>
            <p>{idAffidavit ? "Affidavit" : "Affirmation"} of Identity.</p>
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
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <p>Yours faithfully,</p>
        <p>{solicitors}</p>
      </div>
    </div>
  );
}

export default function CoverLetters() {
  return (
    <div className="leading-relaxed">
      <div className="m-5">
        <div>
          <p>The Registrar</p>
          <p>High Court</p>
          <p>38 Queensway</p>
          <p>Hong Kong</p>
        </div>
        <LetterBody />
      </div>

      <br className="pagebreak"></br>

      <div className="m-5">
        <p>The Honorary Secretary</p>
        <p>Hong Kong Bar Association</p>
        <p>LG2, High Court</p>
        <p>38 Queensway</p>
        <p>Hong Kong</p>
        <LetterBody />
      </div>

      <br className="pagebreak"></br>

      <div className="m-5">
        <p> The Secretary for Justice</p>
        <p>Department of Justice</p>
        <p>6/F, Main and East Wings</p>
        <p>Justice Place</p>
        <p>18 Lower Albert Road</p>
        <LetterBody />
      </div>

    </div>
  );
}
