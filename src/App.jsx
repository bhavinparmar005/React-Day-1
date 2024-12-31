import { useState } from "react";
import Header from "./componets/Header";
import Card from "./componets/Card";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <h2 className="heading">RESPONSIVE CARDS CSS</h2>
      <Card />
    </>
  );
}

export default App;
