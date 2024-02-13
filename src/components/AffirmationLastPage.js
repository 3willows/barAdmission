import { useAppContext } from "../Context.js"
import { Tab } from "./Tab.js"

export default function LastPage() {
  const { applicant, year } = useAppContext()
  return (
    <>
      <div >
        <p>This Affidavit is filed on behalf of the Applicant.
        </p>
      </div>
    </>
  )
}
