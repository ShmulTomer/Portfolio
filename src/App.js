
import './App.css';
import {FaLinkedin, FaEnvelope, FaInstagramSquare} from 'react-icons/fa';
import {ImMail} from 'react-icons/im'
import Typewriter from 'typewriter-effect'
import Projects from './Projects';


function App() {



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
        <a className="icon" href="google.com">
            <FaLinkedin />
        </a>
        <a className="icon" href="google.com">
            <ImMail />
        </a>
        <a className="icon" href="google.com">
            <FaInstagramSquare />
        </a>
      </div>
      
    </div>
    <Projects />
    </>
  );
}

export default App;
