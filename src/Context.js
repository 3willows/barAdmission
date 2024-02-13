import React, { createContext, useReducer, useContext } from "react"

const initialState = {
  applicant: "Applicant",
  solicitors: "Solicitors",
  year: new Date().getFullYear(),
  mover: "[Pupil Master]",
}

const Context = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "applicant":
      return { ...state, applicant: action.payload }
    case "solicitors":
      return { ...state, solicitors: action.payload }
    case "year":
      return { ...state, year: action.payload }
    case "mover":
      return { ...state, mover: action.payload }
    default:
      return state
  }
}

// Context provider
const ContextProvider = ({ children }) => {
  const [{ applicant, solicitors, year, mover }, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <Context.Provider value={{ applicant, solicitors, year, mover, dispatch }}>
      {children}
    </Context.Provider>
  )
}

// Custom hook to use the context
const useAppContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

export { ContextProvider, useAppContext }
