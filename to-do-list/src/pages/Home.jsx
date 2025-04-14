import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center text-white text-3xl min-h-[80vh]">
      <Link to='/login'>
      <p>Get started</p>
      
      </Link>
    </div>
  )
}

export default Home
