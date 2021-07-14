import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
export default function index() {
  useEffect(() => {
    document.title = "This site is fake!!";
  });

  const [counter, setCounter] = useState(0);

  // function increment() {
  //   {
  //     setCtounter(() => counter +1)
  //   }
  // }

  return (
    <Fragment>
      <h1>Counter {counter}</h1>
      <Button
        variant="outlined"
        color="primary"
        className="mx-2"
        onClick={() => setCounter(counter + 1)}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className="mx-2"
        onClick={() => setCounter(counter - 1)}
      >
        Del
      </Button>
      <Button
        variant="contained"
        onClick={() => setCounter((pre) => (pre = 1))}
      >
        Reset
      </Button>
      {/* Shunchaki o`zim sinash maqsadida */}
      <IconButton
        color="primary"
        variant="outlined"
        component="span"
        aria-label="uploaded picture"
      ></IconButton>
    </Fragment>
  );
}
