import React from "react";
import { ime, prezime, imePrezime } from "../api/pozdrav";

export default function Header() {
  return (
    <div className='header'>
      <h1>Naslov stranice</h1>
      <p>{ime}</p>
    </div>
  );
}
