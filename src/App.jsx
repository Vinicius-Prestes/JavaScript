import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./routes/Home";
import MathPage from "./routes/MathPage";
import DatePage from "./routes/DatePage";
import ArrayPage from "./routes/ArrayPage";
import ObjectPage from "./routes/ObjectPage";
import LocalStoragePage from "./routes/LocalStoragePage";
import APIFetchPage from "./routes/APIFetchPage";

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/dates" element={<DatePage />} />
          <Route path="/arrays" element={<ArrayPage />} />
          <Route path="/objects" element={<ObjectPage />} />
          <Route path="/localstorage" element={<LocalStoragePage />} />
          <Route path="/api" element={<APIFetchPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;