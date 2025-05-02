import React from 'react'
import "./Header.css";
import { FaDragon } from "react-icons/fa";
function Header() {
  return (
    <header className="header">
       <FaDragon className="header-icon" />
      <h1>Pokié-mon Explorer</h1>
      {/* <p>Catch 'em all!</p> */}
      </header>
  )
}

export default Header