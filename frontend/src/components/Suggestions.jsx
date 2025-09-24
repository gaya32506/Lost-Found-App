import React from "react";

export default function Suggestions({ matches }) {
  if (!matches || matches.length === 0) return null;

  return (
    <div>
      <h4> Possible Matches Found</h4>
      <ul>
        {matches.map((m) => (
          <li key={m._id}>
            <b>{m.title}</b> — {m.location} ({m.contact})
          </li>
        ))}
      </ul>
    </div>
  );
}
