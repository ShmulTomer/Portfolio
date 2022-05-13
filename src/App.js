
import './App.css';
import {FaLinkedin, FaAngleDown, FaInstagramSquare} from 'react-icons/fa';
import {ImMail} from 'react-icons/im'
import Typewriter from 'typewriter-effect'
import Projects from './Projects';
import { useRef } from 'react';
import ScrollUpButton from 'react-scroll-up-button';


function App() {

  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView({
    behavior: "smooth",
  });


  return (
    <>
    <div className="App">
      <header className="App-header">
          Tomer Shmul
      </header>
      <div className="App-header2">
      <Typewriter
        options={{
          strings: ['Georgia Tech Student', 'Software Engineer', 'Plane & Helicopter Pilot'],
          autoStart: true,
          loop: true,
        }}
      />
      </div>
      <div className="icons">
        <a className="icon" href="https://www.linkedin.com/in/tomer-shmul/">
            <FaLinkedin />
        </a>
        <a className="icon" href="mailto:tshmul@gatech.edu?subject=Hey%20Tomer!">
            <ImMail />
        </a>
        <a className="icon" href="https://www.instagram.com/tomershmul/">
            <FaInstagramSquare />
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
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{}}
      ToggledStyle={{}}
    />
    </>
  );
}

export default App;
