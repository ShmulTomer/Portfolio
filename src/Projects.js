import React, { useRef, useEffect, useState } from "react";
import "./App.css";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-item ${visible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

const EXPERIENCE = [
  {
    company: "Citadel",
    role: "Software Engineer",
    period: "2025 – Present",
    logo: "/logos/citadel.png",
  },
  {
    company: "Citadel",
    role: "Software Engineer Intern",
    period: "Summer 2024",
    logo: "/logos/citadel.png",
  },
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    period: "Summer 2023",
    logo: "/logos/capital-one.png",
  },
];

const Projects = () => (
  <div className="sections">
    <section className="sec sec-white">
      <div className="sec-inner">
        <Reveal>
          <h2 className="sec-heading">Experience</h2>
        </Reveal>
        <div className="exp-list">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="exp-row">
                <div className="exp-logo-wrap">
                  <img src={job.logo} alt={job.company} className="exp-logo" />
                </div>
                <div className="exp-info">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-role">{job.role}</span>
                  <span className="exp-period">{job.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="sec sec-muted">
      <div className="sec-inner">
        <Reveal>
          <h2 className="sec-heading">Education</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="edu-block">
            <p className="edu-school">Georgia Institute of Technology</p>
            <div className="edu-degrees">
              <div className="edu-degree-row">
                <div className="edu-degree-left">
                  <span className="edu-degree-title">MS in Computer Science</span>
                  <span className="edu-degree-conc">Concentration: Machine Learning</span>
                </div>
                <span className="edu-year">2025</span>
              </div>
              <div className="edu-degree-row">
                <div className="edu-degree-left">
                  <span className="edu-degree-title">BS in Computer Science</span>
                  <span className="edu-degree-conc">
                    Concentration: Artificial Intelligence &amp; Modeling and Simulation
                  </span>
                  <span className="edu-degree-minor">
                    Minor: Denning Technology and Management Program
                  </span>
                  <span className="edu-degree-minor">
                    Study Abroad, Universitat Politècnica de Catalunya (UPC), Barcelona
                  </span>
                </div>
                <span className="edu-year">2024</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="sec sec-white">
      <div className="sec-inner">
        <Reveal>
          <h2 className="sec-heading">Beyond Work</h2>
        </Reveal>
        <div className="beyond-grid">
          <Reveal delay={0}>
            <div className="beyond-card">
              <span className="beyond-icon">🛩️</span>
              <div>
                <p className="beyond-label">Licensed Pilot</p>
                <p className="beyond-sub">Airplane &amp; Helicopter  PPL</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="beyond-card">
              <span className="beyond-icon">🪂</span>
              <div>
                <p className="beyond-label">Licensed Skydiver</p>
                <p className="beyond-sub">USPA License Class A</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
