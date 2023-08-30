import './App.css'
import LineBar from './components/LineBar/LineBar'
import Home from './sections/home/Home'
import Skills from './sections/skills/Skills'
import Works from './sections/works/Works'
function App() {
  return   <div className='app'>
      <LineBar></LineBar>
     
      <Home></Home>
      <Skills></Skills>
      <Works></Works>


  </div>
}

export default App


