import { LetterBody } from "./letterBody.jsx";

export default function CoverLetters() {
  return (
    <div>
      <div className="m-5">
        <div>
          <p>The Registrar</p>
          <p>High Court</p>
          <p>38 Queensway</p>
          <p>Hong Kong</p>
        </div>
        <LetterBody />
      </div>

      <div className="pagebreak"></div>

      <div className="m-5">
        <p>The Honorary Secretary</p>
        <p>Hong Kong Bar Association</p>
        <p>LG2, High Court</p>
        <p>38 Queensway</p>
        <p>Hong Kong</p>
        <LetterBody />
      </div>

      <div className="pagebreak"></div>

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
