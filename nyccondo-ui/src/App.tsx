import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <a
          className="App-link"
          href="https://w3w.co/types.really.points"
          target="_blank"
          rel="noopener noreferrer"
        >
          ///types.really.points
        </a>
        <Hero />
      </main>
    </div>
  );
}

export default App;
