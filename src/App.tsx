import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import ImagePage from "./Components/ImagePage/imagePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/img" Component={ImagePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
