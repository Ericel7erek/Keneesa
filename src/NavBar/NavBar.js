import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Services">Services</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <img
        className="smol"
        src="https://st2.depositphotos.com/5886116/8579/v/450/depositphotos_85790966-stock-illustration-holy-spirit-cross-dove-bible.jpg"
        alt=""
        width={50}
        height={50}
      />
    </nav>
  );
};

export default NavBar;
