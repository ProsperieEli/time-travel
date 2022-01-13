import { useState, useEffect } from "react";
import React from "react";

export default function useTimeTravel() {
  const [date, setDate] = useState([]);
  const [index, setIndex] = useState(null);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (index !== null) {
      setCurrent(date[index]);
    }
  }, [index]);

  const save = (event) => {
    setCurrent(event.target.value);
    setDate((prevState) => [...prevState, event.target.value]);
    setIndex(date.length);
  };
  const redo = () => {
    if (index < date.length - 1) {
      setIndex((prevState) => prevState + 1);
    }
  };

  const undo = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
    }
  };

  return { save, redo, undo, current };
}
