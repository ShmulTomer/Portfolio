import "./App.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaChevronDown } from "react-icons/fa";
import Projects from "./Projects";
import { useRef } from "react";

function App() {
  const contentRef = useRef(null);

  return (
    <>
      <div className="hero">
        <svg className="hero-noise" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="hero-content">
          <div className="hero-avatar-wrap">
            <img
              className="hero-avatar"
              src="https://i.ibb.co/V9Hfgqm/TM-Pic-Re-Size.jpg"
              alt="Tomer Shmul"
            />
          </div>
          <h1 className="hero-name">Tomer Shmul</h1>
          <p className="hero-role">Software Engineer at Citadel</p>
          <div className="hero-links">
            <a
              href="https://www.linkedin.com/in/tomer-shmul/"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shmul.tomer@gmail.com"
              className="hero-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/ShmulTomer/"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <button
          className="scroll-btn"
          onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <FaChevronDown />
        </button>
      </div>
      <div ref={contentRef}>
        <Projects />
      </div>
    </>
  );
}

export default App;
