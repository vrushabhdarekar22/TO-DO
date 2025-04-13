import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className=''>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
    
  )
}

export default App
