export default function Jurat({ affidavit }) {
  return (
    <>
      <p>{affidavit ? "SWORN" : "AFFIRMED"} at the office of</p>
      <p>at</p>
      <p className="">on this</p>
      <p className="">Before me</p>
      <p className="">
        This {affidavit ? "affidavit" : "affirmation"} is filed on behalf of the
        Applicant.
      </p>
    </>
  )
}
