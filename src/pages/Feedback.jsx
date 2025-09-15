import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate , Link } from 'react-router-dom';


function Feedback() {
      const user = useSelector (data => data.user);
      const dispatch = useDispatch();
      
      const handleFeedback = (e) => {
        e.preventDefault();
        alert(`Thanks for your valuable feedback!`)
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
  <h1 className='text-lg font-semibold text-white'>Welcome </h1>
</div>
<form onSubmit={handleFeedback}>
   <div className='grid grid-cols-1 md:grid-cols-1  w-150 ml-100 mt-20 lg:grid-4 gap-10 mb-6'>
  <div>
    <label className='text-2xl font-semibold mb-5'>Type your feedback here:</label>

   <input placeholder='' className='border p-8 w-full mb-3 mt-5' type="text" />

            <button className='bg-green-500 p-2 px-2 py-2 rounded text-xl cursor-pointer hover:bg-green-800 ml-70' type="submit">SEND</button>
  </div>
  </div>
</form>


<footer className='bg-white rounded-xl shadow p-4  mt-140 text-center text-grey-400'>
  <p>&copy: {new Date().getFullYear()}Fit Feedback All rights recerved</p>
</footer>
</main>
</div>
  )
}

export default Feedback