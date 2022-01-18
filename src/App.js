import React from "react";
import randomstring from "randomstring";
//import B from "./components/Header";
import { Header, Footer } from "./components";
import B from "./components/Header/";

export default function App() {
  return (
    <div>
      <B />
      <Header />
      {randomstring.generate()}
      <Footer />
    </div>
  );
}
