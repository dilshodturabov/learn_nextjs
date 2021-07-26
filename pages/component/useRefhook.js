import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";

export default function index() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    // console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();
  return (
    <div>
      <h1>Renders: {renderCount.current}</h1>
      <h2>Previous condition: {prevValue.current} </h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button
        variant="contained"
        className="bg-success text-light"
        onClick={focus}
      >
        focus
      </Button>
    </div>
  );
}
