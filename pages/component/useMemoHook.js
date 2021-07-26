import React, { useState, useMemo, useEffect } from "react";
import Button from "@material-ui/core/Button";
function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}
export default function useMemoHook() {
  const [number, setNumber] = useState(45);
  const [colored, setColored] = useState(false);
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);
  const styles = useMemo(
    () => ({ color: colored ? "red" : "black" }),
    [colored]
  );
  useEffect(() => {
    console.log("styles changed");
  }, [styles]);
  return (
    <div>
      <p style={styles}>Computed property: {computed}</p>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setNumber((pre) => pre + 1)}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setNumber((pre) => pre - 1)}
      >
        Del
      </Button>
      <Button variant="outlined" onClick={() => setColored((pre) => !pre)}>
        Change
      </Button>
    </div>
  );
}
