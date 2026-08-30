import { useEffect, useRef } from "react";
import { scroll } from "../lib/scroll";
import { EXIT_ALTITUDE, altitude, clamp, seg } from "../lib/timeline";

const PANELS = {
  hero: [0, 0, 0.05, 0.1],
  beyond: [0.17, 0.21, 0.34, 0.39],
  education: [0.55, 0.59, 0.72, 0.77],
  experience: [0.9, 0.945, 1.0, 1.0],
};

export default function Overlay() {
  const refs = useRef({});
  const altimeter = useRef(null);

  useEffect(() => {
    let raf;
    const tick = () => {
      const p = scroll.p;
      for (const [id, [a, b, c, d]] of Object.entries(PANELS)) {
        const el = refs.current[id];
        if (!el) continue;
        const opacity = clamp(Math.min(seg(p, a, b), 1 - seg(p, c, d)));
        el.style.opacity = opacity;
        el.style.transform = `translateY(${(1 - opacity) * 20}px)`;
        el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
      }
      if (altimeter.current) {
        const feet = Math.round((altitude(p) / EXIT_ALTITUDE) * 13500);
        altimeter.current.textContent = `${feet.toLocaleString()} ft`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const set = (id) => (el) => (refs.current[id] = el);

  return (
    <div className="overlay">
      <div className="hud">
        <span className="hud-label">ALT</span>
        <span className="hud-value" ref={altimeter}>
          13,500 ft
        </span>
      </div>

      <section className="panel panel-hero" ref={set("hero")}>
        <p className="eyebrow">Georgia Tech &middot; New York</p>
        <h1>Tomer Shmul</h1>
        <p className="lede">Quantitative Developer at Citadel</p>
        <p className="hint">scroll to jump</p>
      </section>

      <section className="panel panel-left" ref={set("beyond")}>
        <p className="eyebrow">In the air</p>
        <ul className="list">
          <li>
            <span>Airplane Pilot License</span>
            <em>FAA Private Pilot &middot; Single-Engine Land</em>
          </li>
          <li>
            <span>Helicopter Pilot License</span>
            <em>FAA Private Pilot &middot; Rotorcraft</em>
          </li>
          <li>
            <span>Skydiving License</span>
            <em>USPA A License</em>
          </li>
        </ul>
      </section>

      <section className="panel panel-right" ref={set("education")}>
        <p className="eyebrow">Education</p>
        <h2>Georgia Institute of Technology</h2>
        <ul className="list">
          <li>
            <span>MS Computer Science &middot; 2025</span>
            <em>Machine Learning</em>
          </li>
          <li>
            <span>BS Computer Science &middot; 2024</span>
            <em>Artificial Intelligence &middot; Modeling &amp; Simulation</em>
          </li>
          <li>
            <span>Study Abroad</span>
            <em>UPC Barcelona</em>
          </li>
        </ul>
      </section>

      <section className="panel panel-left panel-bottom" ref={set("experience")}>
        <p className="eyebrow">Experience</p>
        <ul className="list">
          <li>
            <span>Citadel &middot; 2025&ndash;present</span>
            <em>Quantitative Developer, EQR Platform Engineering</em>
          </li>
          <li>
            <span>Citadel &middot; 2024</span>
            <em>Software Engineer Intern</em>
          </li>
          <li>
            <span>Capital One &middot; 2023</span>
            <em>Software Engineer Intern</em>
          </li>
        </ul>
        <div className="links">
          <a href="https://www.linkedin.com/in/tomer-shmul/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ShmulTomer/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:shmul.tomer@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}
