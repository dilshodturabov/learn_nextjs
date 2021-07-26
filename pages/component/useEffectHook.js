import React, { useState, useEffect } from "react";

export default function useEffectHook() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);
  return (
    <>
      <h1>Repository : {type}</h1>
      <button className="btn btn-primary mx-3" onClick={() => setType("users")}>
        User
      </button>
      <button
        className="btn btn-danger mx-3"
        onClick={() => setType("comments")}
      >
        Todo
      </button>
      <button
        className="btn btn-secondary mx-3"
        onClick={() => setType("Posts")}
      >
        Posts
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>
  );
}
