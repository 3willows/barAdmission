import { useAppContext } from "../Context.js"
import Header from "../components/Header.js"

export default function LettersTo3Regulators() {
  const { applicant, solicitors, year } = useAppContext()
  return (
    <>
      <Header />
    </>
  )
}
