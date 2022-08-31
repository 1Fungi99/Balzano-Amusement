import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Navigation from "./Components/Navigation";
import Rules from "./Components/Rules";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
