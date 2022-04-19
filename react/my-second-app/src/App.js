import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import "./App.css";
import Navbar from "./Navbar";
import ViewEmployee from "./ViewEmployee";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<ViewEmployee />} />
          <Route path="add" element={<AddEmployee />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
