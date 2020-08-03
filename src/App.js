import React, { useContext } from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import "./App.css";
import { ThemeContext } from "./themeContext";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <header className={`App-header ${context.theme}-theme`}>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Button />
      </header>
    </div>
  );
}

export default App;
