import React from "react";
import { useAppContext } from "../Context.js";

export function DataInput({ prop }) {
  const Context = useAppContext();

  const dispatch = Context.dispatch;

  const value = Context[prop];

  return (
    <>
      <input
        type="text"
        className="text-black bg-white dark:text-white dark:bg-black"
        value={value}
        onChange={(e) => dispatch({ type: prop, payload: e.target.value })}
      ></input>
    </>
  );
}
