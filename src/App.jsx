import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'


function App() {
  

  return (
    <>
      <div className=' w-full h-auto ' style={{backgroundColor:'#00001a'}}>
          <BrowserRouter>
              <NavBar/>
          </BrowserRouter>
      </div>

      
    </>
  )
}

export default App
