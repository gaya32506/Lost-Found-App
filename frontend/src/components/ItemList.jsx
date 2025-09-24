import React, { useEffect, useState } from "react";
export default function ItemList({ type }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/${type}')
      .then((res) => res.json())
      .then(setItems);
  }, [type]);

  return (
    <div>
      <h3>{type === "lost" ? " Lost Items" : "Found Items"}</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <b>{item.title}</b> — {item.location} <br />
            {item.description} <br />
             {item.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}
