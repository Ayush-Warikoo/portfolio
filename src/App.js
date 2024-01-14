import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='header-to-about'/>
        <About/>
        <div className='about-to-resume'/>
        <Resume/>
        <div className='resume-to-projects'/>
        <Projects/>
        <Footer />
      </div>
  )
}

export default App;