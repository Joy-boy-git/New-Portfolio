import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'


function App() {
  

  return (
    <>
      <div className=' w-full h-auto ' style={{backgroundColor:'#00001a'}}>
          <BrowserRouter>
              <NavBar/>
             <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          </BrowserRouter>
        
      </div>

      
    </>
  )
}

export default App
