import { useState } from 'react'
import Header from './component/header.jsx'
import About from './component/about.jsx'
import Projects from './component/project.jsx'
import Skills from './component/skills.jsx'
import Education from './component/education.jsx'
import Hobbies from './component/hobbies.jsx'
import Activity from './component/activity.jsx'
import Contact from './component/contact.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className="p-50 bg white">
   <Header/>
      <Projects/>
      <Skills/>
      <Education/>
      <Hobbies/>
      <Activity/>
      <Contact/>
    </div>
    </>
  )
}

export default App
