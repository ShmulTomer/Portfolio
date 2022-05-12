
import './App.css';
import {FaLinkedin, FaAngleDown, FaInstagramSquare} from 'react-icons/fa';
import {ImMail} from 'react-icons/im'
import Typewriter from 'typewriter-effect'
import Projects from './Projects';
import { useRef } from 'react';


function App() {

  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView({
    behavior: "smooth",
  });


  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <meta name="theme-color" content="#5986fb"></meta> 
    <meta name="msapplication-TileColor" content="#da532c"></meta>
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
    </>
  );
}

export default App;
