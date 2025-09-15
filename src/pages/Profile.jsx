import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'



function Profile() {

   const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [currentweight, setCurrentweight] = useState("");
    const [height, setHeight] = useState("");

    const handleProfile = (e) => {
      const profile ={
        type: name,
        value: age,
        unit: currentweight,
        unit: height,
      };
    alert(`hello ${name} , Your Profile Updated Successfully!`) 
 console.log(profile);
  }
  
  return (
    <div className='flex min-h-screen bg-grey-100'>
         <aside className='w-65 bg-green-400 text-white flex flex-col justify-between p-6'>
           <div>
         <h2 className='text-2xl font-bold mb-8'>Admin</h2>
         <nav className='space y-4'>
               <li className='block hover:text-yellow-300 text-xl font-semibold' href=""><Link to = "/dashboard">Dashboard</Link></li>
                  <li className='block hover:text-yellow-300 text-xl font-semibold' href=""><Link to = "/profile">Profile</Link></li>
               <li className='block hover:text-yellow-300 text-xl font-semibold' href=""><Link to = "/goalsetting">GoalSetting</Link></li>
                   <li className='block hover:text-yellow-300 text-xl font-semibold' href=""><Link to = "/feedback">Feedback</Link></li>
         </nav>
   </div>
 <button className='w-full bg-red-500 cursor pointer text-white font-semibold px-4 py-2'><Link to ="/">Logout</Link></button>
</aside>


<main className='flex-1 p-6'>
 
<div className='bg-indigo-600 p-4 rounded-lg shadow mb-6'>
  <h1 className='text-lg font-semibold text-white'>Welcome</h1>

</div>

 <form onSubmit ={handleProfile}>
 <div className='grid grid-cols-1 md:grid-cols-1 w-150 ml-100 lg:grid-4 gap-10 mb-6 '>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold text-xl'>Enter Your Name</h2>
 <input placeholder='name' className='border p-2 w-full mb-3' type="text" value={name} onChange={(e) => setName(e.target.value)} />
  

</div>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold  text-xl'>Enter Your Age</h2>
   <input placeholder='age' className='border p-2 w-full mb-3' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
 
</div>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold  text-xl'>Enter Your CurrentWeight</h2>
   <input placeholder='weight' className='border p-2 w-full mb-3' type="number" value={currentweight} onChange={(e) => setCurrentweight(e.target.value)} />


</div>
<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold  text-xl'>Enter Your height</h2>
   <input placeholder='height' className='border p-2 w-full mb-3' type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>


</div>
</div>
  <button  type='submit' className='bg-green-400 align-center  text-xl font-bold hover:bg-green-800 cursor-pointer  text-black p-2 w-50 ml-150 rounded'>Submit</button>


</form>
<footer className='bg-white rounded-xl mt-140 shadow p-4 text-center text-grey-400'>
  <p>&copy: {new Date().getFullYear()}Fit Profile All rights recerved</p>
</footer>

</main>


</div>
  )
}

export default Profile