import "./App.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaChevronDown } from "react-icons/fa";
import Projects from "./Projects";
import { useRef } from "react";

function App() {
  const contentRef = useRef(null);

  return (
    <>
      <div className="hero">
        <div className="mesh-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="hero-content">
          <img
            className="hero-avatar"
            src="https://i.ibb.co/V9Hfgqm/TM-Pic-Re-Size.jpg"
            alt="Tomer Shmul"
          />
          <h1 className="hero-name">Tomer Shmul</h1>
          <p className="hero-role">Software Engineer at Citadel</p>
          <p className="hero-sub">
            Georgia Tech BS CS '24 &middot; MS CS '25 &middot; Licensed Pilot &amp; Skydiver
          </p>
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
