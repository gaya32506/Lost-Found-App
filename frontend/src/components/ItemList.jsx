import React from "react";

export default function ItemList({ items, title }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
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