import React from 'react'
import { useState } from 'react';
import  {FcGoogle} from 'react-icons/fc'
import toast from 'react-hot-toast';

function SignUp() {

  
   const [formData, setFormData] = useState({
       email: "",
       password: ""
     });
   
     const changeHandler = (event) => {
       setFormData((prevData) => ({
         ...prevData,
         [event.target.name]: event.target.value
       }));
     };
   
     const handleSubmit = (event) => {
       event.preventDefault();
       // go to home page
       toast.success("Account created Successfully")
       // Add your navigation or authentication logic here
     };
   
     return (
       <div className=" h-screen overflow-hidden bg-gray-200 flex items-center ">
         <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg ml-20 ">
          <div className='bg-gray-200 rounded-lg py-1 ' >
           <h1 className="text-3xl font-bold  text-gray-800  ">Welcome To</h1>
           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
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
                 Sign up
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
                 className="w-full flex items-center justify-center bg-white border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200 "
               >
                 <FcGoogle className="w-5 h-5 mr-2" />
                 Sign up with Google
               </button>
             </div>
           </form>
           
           <p className="mt-8 text-xs text-center text-gray-500">
             By continuing with Google or Email, you agree to our 
             <a href="#" className="text-blue-600 hover:text-blue-800"> Terms of Service </a> 
             and 
             <a href="#" className="text-blue-600 hover:text-blue-800"> Privacy Policy</a>.
           </p>
         </div>
       </div>
     

      )
}

export default SignUp