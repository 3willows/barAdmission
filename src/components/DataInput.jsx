import React, { useState } from "react";
import { useAppContext } from "../context.jsx";

export function DataInput({ prop }) {
  const Context = useAppContext();
  const dispatch = Context.dispatch;
  const value = Context[prop];

  const [hasClicked, setHasClicked] = useState(false);

  const handleInputClick = (e) => {
    if (!hasClicked) {
      e.target.select();
      setHasClicked(true);
    }
  };

  return (
    <>
      <input
        type="text"
        className="bg-white text-black dark:bg-black dark:text-white"
        value={value}
        onClick={handleInputClick}
        onChange={(e) => dispatch({ type: prop, payload: e.target.value })}
      ></input>
    </>
  );
}
