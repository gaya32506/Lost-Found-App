import React, { useState } from "react";
import LostForm from "./components/LostForm";
import FoundForm from "./components/FoundForm";
import ItemList from "./components/ItemList";
import Suggestions from "./components/Suggestions";

function App() {
  // Local state to store lost/found items
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [matches, setMatches] = useState([]);

  // Called when LostForm submits
  const addLostItem = (item) => {
    setLostItems([item, ...lostItems]);

    // Optional: check for matches in found items
    const matched = foundItems.filter(f =>
      f.title.toLowerCase().includes(item.title.toLowerCase()) &&
      f.location.toLowerCase().includes(item.location.toLowerCase())
    );
    setMatches(matched);
  };

  // Called when FoundForm submits
  const addFoundItem = (item) => {
    setFoundItems([item, ...foundItems]);
  };

  return (
    <div className="app">
      <h1> Lost & Found Portal</h1>
      <LostForm onSubmit={addLostItem} />
      <Suggestions matches={matches} />
      <FoundForm onSubmit={addFoundItem} />
      <ItemList items={lostItems} title=" Lost Items" />
      <ItemList items={foundItems} title=" Found Items" />
    </div>
  );
}

export default App;