import React from "react"
import { useAppContext } from "../Context.js"

export function DataInput({ prop }) {
  const { dispatch } = useAppContext()
  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: prop, payload: e.target.value })
        }
      ></input>
    </>
  )
}
