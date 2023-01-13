import "./App.css";
import {
  FaLinkedin,
  FaAngleDown,
  FaInstagramSquare,
  FaEnvelopeSquare,
  FaGithubSquare
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";
import { useRef } from "react";
import ScrollUpButton from "react-scroll-up-button";
import ReactGA from "react-ga";
import {ShowPlane} from "./components/ShowPlane.jsx"
import {ShowCessna} from "./components/ShowCessna.jsx"
import {ShowCloud} from "./components/ShowCloud.jsx"
import { Cloud, Plane } from '@react-three/drei';


ReactGA.initialize("G-300CPG4KSC");

function App() {
  const testRef = useRef(null);
  const scrollToElement = () =>
    testRef.current.scrollIntoView({
      behavior: "smooth",
    });
 /*
    propeller spinning
    clouds

    rocket ship on the bottom

    lags behind the mouse
    follows it slowly

    
 */
  return (
    <>
      <div className="App">
      {/* <div className="Dcube">
      <ShowPlane /> 
      </div> */}
      <div className="Dplane">
      <ShowCessna />
      </div>
      <div className="Dcloud1">
      <ShowCloud />
      </div>
      <div className="Dcloud2">
      <ShowCloud />
      </div>
      
        <header className="App-header">Tomer Shmul</header>
        <div className="App-header2">
          <Typewriter
            options={{
              strings: [
                "Georgia Tech Student",
                "Plane & Helicopter Pilot",
                "Data Structures & Algorithms TA",
                "Software Engineer",
              ],
              autoStart: true,
              loop: true,
              delay: 64,
              deleteSpeed: 50,
              pauseFor: 70,
            }}
          />
        </div>
        <div>
          
        </div>
        <div className="icons">
          <a className="icon" href="https://www.linkedin.com/in/tomer-shmul/">
            <FaLinkedin />
          </a>
          <a
            className="icon"
            href="mailto:tshmul@gatech.edu?subject=Hey%20Tomer!"
          >
            <FaEnvelopeSquare />
          </a>
          <a className="icon" href="https://github.com/ShmulTomer/">
            <FaGithubSquare />
          </a>
        </div>

        <div className="arrow">
          <button onClick={scrollToElement}>
            <FaAngleDown />
          </button>
        </div>
      </div>
      <div className="proj" ref={testRef}>
        <Projects />
      </div>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{}}
      />
    </>
  );
}

export default App;
