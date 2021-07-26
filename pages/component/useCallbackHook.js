import React, { useState, useCallback } from "react";
import ItemList from "./itemList";

export default function index() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  const styles = {
    color: colored ? "darkred" : "#000",
  };
  const generateItemFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 25}`);
  }, [count]);
  return (
    <div>
      <h1 style={styles}>Amount of elements: {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCount((pre) => pre + 1)}
      >
        add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setColored((pre) => !pre)}
      >
        change
      </button>
      <ItemList getItems={generateItemFromAPI} />
    </div>
  );
}
