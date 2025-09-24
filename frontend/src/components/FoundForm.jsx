import React, { useState } from "react";

export default function FoundForm({ onSubmit }) {
  const [form, setForm] = useState({ title: "", description: "", location: "", contact: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = { ...form, _id: Date.now() };
    onSubmit(found); // pass item to App state
    setForm({ title: "", description: "", location: "", contact: "" });
    alert(" Found item reported!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3> Report Found Item</h3>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input placeholder="Contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
      <button type="submit">Report</button>
    </form>
  );
}