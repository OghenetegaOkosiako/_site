import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../App.css";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function Home() {
  const [menu, setMenu] = useState(true);

  function handleToggle() {
    if (menu) {
      document.querySelector("#nav_ul").style.display = "none";
    } else {
      document.querySelector("#nav_ul").style.display = "inline-block";
    }
    setMenu(!menu);
  }
  return (
    <>
      <div id="background">
        <div id="menu" onClick={handleToggle}>
          <hr id="hr" />
        </div>
        <nav id="nav_ul">
          <ul>
            <a href="#about">
              <li>
                {" "}
                <h4> About </h4>{" "}
              </li>
            </a>
            <li>
              <a href="#portfolio">
                <h4> Portfolio</h4>{" "}
              </a>{" "}
            </li>

            <li>
              <Link to="contact">
                {" "}
                <h4>Get In Touch</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="scroll">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>{" "}
      <About />
      <Portfolio />
    </>
  );
}

export default Home;
