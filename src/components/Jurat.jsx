export default function Jurat({ affidavit }) {
  return (
    <>
      <p>{affidavit ? "SWORN" : "AFFIRMED"} at the office of</p>
      <p>at</p>
      <p>on this</p>
      <p>Before me</p>
      <p>
        This {affidavit ? "affidavit" : "affirmation"} is filed on behalf of the
        Applicant.
      </p>
    </>
  )
}
