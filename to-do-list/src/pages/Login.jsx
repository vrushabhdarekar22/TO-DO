import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Main from './Main';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // go to home page
    toast.success("LoggedIn Successfully")
    navigate('/main')
    // Add your navigation or authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center  bg-gray-100">
      <div className="ml-180 mr-20 max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
      <div className='bg-gray-200 rounded-lg py-1 '>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={changeHandler}
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={changeHandler}
              name="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-black"
              required
            />
          </div>
          
          <div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Sign In
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>
          
          <div>
            <button 
              type="button" 
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-xs text-center text-gray-500">
          By continuing with Google, Apple, or Email, you agree to Todoist's 
          <a href="#" className="text-blue-600 hover:text-blue-800"> Terms of Service </a> 
          and 
          <a href="#" className="text-blue-600 hover:text-blue-800"> Privacy Policy</a>.
        </p>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? 
            <Link to='/signup' className="ml-1 text-blue-600 hover:text-blue-800 font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;