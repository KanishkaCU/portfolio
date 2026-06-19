import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <a href="#home" className="nav-logo">
          Kanishka<span>.</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1pduytemPyohkxjgeS95SZhXAQq1TlwIR"
              className="resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
}