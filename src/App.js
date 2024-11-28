import "./App.css";
import {
  FaLinkedin,
  FaAngleDown,
  FaInstagramSquare,
  FaEnvelopeSquare,
  FaGithubSquare
} from "react-icons/fa";
// import { Avatar } from "flowbite-react";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";
import { useRef } from "react";
import ScrollUpButton from "react-scroll-up-button";
import ReactGA from "react-ga";
// import {ShowPlane} from "./components/ShowPlane.jsx"
// import {ShowCessna} from "./components/ShowCessna.jsx"
// import {ShowCloud} from "./components/ShowCloud.jsx"
// import { Cloud, Plane } from '@react-three/drei';
import "./styles.scss";

ReactGA.initialize("G-300CPG4KSC");

function App() {
  const testRef = useRef(null);
  const scrollToElement = () =>
    testRef.current.scrollIntoView({
      behavior: "smooth",
    });


    window.onload = function() {
      const title = document.querySelector('.error_title');

      if (title) {
        // your code for mousemove event handlers
      }
      else {
        console.log('Title element not found.');
      }
    
      document.onmousemove = function(e) {
        let x = e.pageX - window.innerWidth/2;
        let y = e.pageY - window.innerHeight/2;
        
        title.style.setProperty('--x', x + 'px')
        title.style.setProperty('--y', y + 'px')
      }
      
      ////////////// Shadow ///////////////////
      title.onmousemove = function(e) {
        let x = e.pageX - window.innerWidth/2;
        let y = e.pageY - window.innerHeight/2;
      
        let rad = Math.atan2(y, x).toFixed(2); 
        let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/20); 
      
        let x_shadow = Math.round(length * Math.cos(rad));
        let y_shadow = Math.round(length * Math.sin(rad));
      
        title.style.setProperty('--x-shadow', - x_shadow + 'px')
        title.style.setProperty('--y-shadow', - y_shadow + 'px')
      
      }
    }
    
//////// Light //////////

 /*
    propeller spinning
    clouds

    rocket ship on the bottom

    lags behind the mouse
    follows it slowly


    name in front of everything
    go the other way
    add one or two more clouds in the bottom
    
    few layers of hills and on each put a couple projects

    plane flies off when u click arrow and then screen goes down

    maybe house on the hills

    change image and text being different sizes

    make each house (project), two windows/3/4 and each window you see something else
    
    put some form of resume

    
    */
  return (
    <>
      <div className="App">
      {/* <div className="Dcube">
      <ShowPlane /> 
      </div> */}
      
      {/* <div className="Dcloud1">
      <ShowCloud />
      </div>
      <div className="Dcloud2">
      <ShowCloud />
      </div> */}
      {/* <div className="Dplane">
      <ShowCessna />
      </div> */}
      <header className="App-header">
        <div className="avatar">
      
  {/* <Avatar
    img="https://media.licdn.com/dms/image/C5603AQFvg932RnYBeA/profile-displayphoto-shrink_800_800/0/1652957459745?e=1681948800&v=beta&t=uoBGBZrhdRi_3AazlZPpWc6BFgO9o67wJQwBiotH1WY"
    rounded={true}
    bordered={true}
    size="xl"
    className="avatar"
  /> */}

{/* // ring-1 ring-gray-300 dark:ring-gray-500 */}


<img class="rounded" src="https://i.ibb.co/V9Hfgqm/TM-Pic-Re-Size.jpg" alt="Default avatar">
</img> 

</div>
      </header>
        <header className="App-header">
        <section class="error_section">
      
      <h1 class="error_title">
        
        Tomer Shmul
      </h1>
    </section>
        </header>
        <div className="App-header2">
          <Typewriter
            options={{
              strings: [
                "Georgia Tech Student",
                "Plane & Helicopter Pilot",
                "Automata & Complexity TA",
                "Software Engineer",
              ],
              autoStart: true,
              loop: true,
              delay: 64,
              deleteSpeed: 50,
              pauseFor: 300,
            }}
          />
        </div>
        <div>
          
        </div>
        <div className="icons">
          <a className="icon" href="https://www.linkedin.com/in/tomer-shmul/" target="_blank">
            <FaLinkedin />
          </a>
          <a
            className="icon"
            href="mailto:shmul.tomer@gmail.com?subject=Hey%20Tomer!" target="_blank"
          >
            <FaEnvelopeSquare />
          </a>
          <a className="icon" href="https://github.com/ShmulTomer/" target="_blank">
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
