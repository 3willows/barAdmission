import { useAppContext } from "../Context.js"

export default function Jurat({affidavit}) {

  return (
    <>
      <div >{affidavit? "SWORN" : "AFFIRMED"} OF {idDeponent.toUpperCase()}</div>
        <p>
        </p>
      </div>
    </>
  )
}
