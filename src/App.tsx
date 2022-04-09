import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
