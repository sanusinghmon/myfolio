import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h2>Sanu Singh</h2>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button onClick={toggleTheme}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
