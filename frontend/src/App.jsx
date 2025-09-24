import React, { useState } from "react";
import LostForm from "./components/LostForm";
import FoundForm from "./components/FoundForm";
import ItemList from "./components/ItemList";
import Suggestions from "./components/Suggestions";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);

  return (
    <div className="app">
  <h1> Lost & Found Portal</h1>
  
  <div className="forms">
    <LostForm onSubmit={(data) => setMatches(data.matches)} />
    <FoundForm />
  </div>

  <Suggestions matches={matches} />

  <div className="items">
    <ItemList type="lost" />
    <ItemList type="found" />
  </div>
</div>
  );
}

export default App;
