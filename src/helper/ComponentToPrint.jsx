import React from "react";
import AffidavitOfApplicant from "../pages/AffidavitOfApplicant.jsx";
import AffidavitOfIdentity from "../pages/AffidavitOfIdentity.jsx";
import NoticeOfMotion from "../pages/NoticeOfMotion.jsx";
import CoverLetters from "../pages/CoverLetters.jsx";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NoticeOfMotion />
      <br className="pagebreak"></br>
      <AffidavitOfApplicant />
      <br className="pagebreak"></br>
      <AffidavitOfIdentity />
      <br className="pagebreak"></br>
      <CoverLetters />
    </div>
  );
});
