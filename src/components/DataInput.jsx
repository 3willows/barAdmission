import React from "react";
import { useAppContext } from "../context.jsx";

export function DataInput({ prop }) {
  const Context = useAppContext();

  const dispatch = Context.dispatch;

  const value = Context[prop];

  return (
    <>
      <input
        type="text"
        className="bg-white text-black dark:bg-black dark:text-white"
        value={value}
        onChange={(e) => dispatch({ type: prop, payload: e.target.value })}
      ></input>
    </>
  );
}
