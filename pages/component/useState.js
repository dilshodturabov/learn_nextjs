import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import "../styles/Home.module.css";
import { Fragment } from "react";
export default function useStateHook() {
  const [state, setState] = useState({
    title: "New title",
    date: Date.now(),
  });
  function updateTitle() {
    setState((prev) => {
      if (state.title == "New title") {
        return {
          ...prev,
          title: "Second title",
        };
      } else {
        return {
          ...prev,
          title: "New title",
        };
      }
    });
  }
  return (
    <Fragment>
      <Button variant="contained" color="primary">
        Add
      </Button>
      <Button variant="outlined" color="default" onClick={updateTitle}>
        Change title:
      </Button>
      <p>{JSON.stringify(state, null, 2)}</p>
    </Fragment>
  );
}
