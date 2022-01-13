import React from "react";
import useTimeTravel from "../hook/useTimeTravel";

export default function Date() {
  const { save, redo, undo, current } = useTimeTravel();

  return (
    <div>
      <input type="date" value={current} onChange={save}></input>
      <div> {current ? current : "Please enter a date above"}</div>
      <button onClick={redo}>Redo</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
}
