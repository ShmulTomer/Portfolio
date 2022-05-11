import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import {FaLinkedin, FaEnvelope, FaInstagramSquare} from 'react-icons/fa';
import {ImMail} from 'react-icons/im'


function App() {

  const names = [
    'Software Engineer', 'Plane & Helicopter Pilot', 'Georgia Tech Student'
  ]

  const [newName, setnewName] = useState("Software Engineer");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1500);
        return () => clearInterval(intervalID);
    }, [shuffle])


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
        {newName}
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
    </>
  );
}

export default App;
