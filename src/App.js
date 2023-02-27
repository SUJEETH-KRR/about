import React from 'react'
import Navbar from './pages/Navbar/Navbar'
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Project from './pages/Project/Project';
import Skill from './pages/Skill/Skill';
import { Routes, Route } from 'react-router-dom';

function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <About />
  //     break;
  //   case "/about":
  //     component = <About />
  //     break;
  //   case "/skill":
  //     component = <Skill />
  //     break;
  //   case "/project":
  //     component = <Project />
  //     break;
  // }
  return (
    <>
      <Navbar />
      {/* <About /> */}
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
    </>
  )
}

// class App extends React.Component {
//   render () {
//     return (
//       <Typical
//         steps={['Web developer', 1000, 'Front-end developer', 500]}
//         loop={Infinity}
//         wrapper="p"
//       />
//     )
//   }
// }

export default App
