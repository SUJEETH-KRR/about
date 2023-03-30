import React from 'react'
import Navbar from './pages/Navbar/Navbar'
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Project from './pages/Project/Project';
import Skill from './pages/Skill/Skill';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <About /> } />
          <Route path='/about' element={ <About /> }/>
          <Route path='/resume' element={ <Resume /> }/>
          <Route path='/skill' element={ <Skill /> }/>
          <Route path='/project' element={ <Project /> }/>
        </Routes> 
        {/* We Use routes in place of switch for reusement */}
      </div>
    </BrowserRouter>
  )
}


export default App
