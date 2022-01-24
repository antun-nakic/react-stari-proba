import React from "react";
import { Homepage } from "./components/Homepage/";
import { Homepage as Expenses } from "./components/Homepage/";
import { Homepage as Invoices } from "./components/Homepage/";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Homepage sadrzaj='Ovo je website za vježbati React!' />}
        />
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} />
      </Routes>
    </Router>
  );
}
