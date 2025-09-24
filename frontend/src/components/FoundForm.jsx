import React, { useState } from "react";

export default function FoundForm() {
  const [form, setForm] = useState({ title: "", description: "", location: "", contact: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/found", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("✅ Found item reported!");
    setForm({ title: "", description: "", location: "", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>🔍 Report Found Item</h3>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input placeholder="Contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
      <button type="submit">Report</button>
    </form>
  );
}