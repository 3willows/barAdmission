import { LetterBody } from "./letterBody.jsx";

export default function CoverLetters() {
  return (
    <div>
      <div className="m-5">
        <div className="">
          <p>The Registrar</p>
          <p>High Court</p>
          <p>38 Queensway</p>
          <p>Hong Kong</p>
        </div>
        <LetterBody />
      </div>

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
    </div>
  );
}
