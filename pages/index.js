import React, { useEffect, useState } from "react";
import "../styles/Home.module.css";
import { Fragment } from "react";

let renderCount = 1;
export default function Home() {
  // useEffect hook
  useEffect(() => {
    document.title = "This site is fake!!";
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);
  // end useEffect hook

  // other hook
  const [value, setValue] = useState("default");
  useEffect(() => {
    renderCount++;
  });
  return (
    <Fragment>
      {/* useState hook */}
      <div className="forUse container text-center ">
        {JSON.stringify(position, null, 2)}
      </div>
      {/* end useEffect hook */}

      {/* other hook */}
      <h1>Amount of rendering {renderCount}</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {/* end other hook */}
    </Fragment>
  );
}
