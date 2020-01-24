import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/SLogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
     <div className="portofolio">
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
