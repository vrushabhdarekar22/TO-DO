import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex  items-center py-4 w-full gap-x-15'>
        <div className='navb'>
            <nav>
                            <ul className='flex gap-4'>
                                <li>
                                 <Link to="/">Home</Link>
                                </li>
                                <li>
                                 <Link to="/">About</Link>
                                </li>
                            </ul>

            </nav>
        </div>
        <div className='logSign flex ml-3 mr-3 gap-x-4'>
                        <Link to='/login'>
                        <button>Login</button>
                        </Link>
                        <Link to='/signup'>
                        <button>SignUp</button>
                        </Link>
        </div>
       
      
    </div>
  )
}

export default NavBar
