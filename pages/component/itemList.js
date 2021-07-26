import React, { useState, useEffect } from "react";

export default function itemList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItem = getItems();
    setItems(newItem);
  }, [getItems]);
  return (
    <div>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
