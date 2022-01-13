import React from "react";
import useTimeTravel from "../hook/useTimeTravel";

export default function Date() {
  const { save, redo, undo, current } = useTimeTravel();

  return (
    <div>
      <input
        aria-label="input"
        type="date"
        value={current}
        onChange={save}
      ></input>
      <div> {current ? current : "Please enter a date above"}</div>
      <button aria-label="button-1" onClick={redo}>
        Redo
      </button>
      <button aria-label="button-2" onClick={undo}>
        Undo
      </button>
    </div>
  );
}
