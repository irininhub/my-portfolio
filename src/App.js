import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/SLogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from "react-particles-js";

const particlesOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 650
      }
    }
  }
};


function App() {
  return (
    <div className="App">
     <div className="portofolio">
       <Particles className='particles' params = {particlesOpt}/>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Slogan/>
    <Contacts/>
    <Footer/>
     </div>
    </div>
  );
}

export default App;
