// App.jsx
import React from 'react'
import './App.css'

import About from './components/About'
import { TypeAnimation } from 'react-type-animation'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Header2 from './components/Header2'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Header />
      {/* <Header2 /> */}

      {/* <NavBar /> */}

      <div className="main-container">
        {/* Home Section */}
        <Home />

        {/* Skills */}
        <Skills />

        {/* Projects Section */}
        <Project />

        {/* Contact Section */}
        <Contact />

        <Footer />
      </div>
    </div>
  )
}

export default App
