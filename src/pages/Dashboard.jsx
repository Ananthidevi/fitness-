import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios'

function Dashboard() {
  const user = useSelector (data => data.user);
  const dispatch = useDispatch();

  return (
    <div className='flex min-h-screen bg-grey-100'>
      <aside className='w-65 bg-green-400 text-white flex flex-col justify-between p-6'>
        <div>
      <h2 className='text-2xl font-bold mb-8'>Admin</h2>
      <nav className='space y-4'>
        <li className='block hover:text-yellow-300 text-xl font-semibold' href=""> <Link to = "/dashboard">Dashboard</Link></li>
        <li className='block hover:text-yellow-300 text-xl font-semibold' href=""> <Link to = "/profile">Profile</Link></li>
      <li className='block hover:text-yellow-300 text-xl font-semibold' href=""> <Link to = "/goalsetting">GoalSetting</Link></li>
        <li className='block hover:text-yellow-300 text-xl font-semibold' href=""> <Link to = "/feedback">Feedback</Link></li>
      </nav>
</div>
 <button onClick = {() =>dispatch ({type: "LOGOUT"})} className='w-full bg-red-500 cursor pointer text-white font-semibold px-4 py-2'>Logout</button>
</aside>
<main className='flex-1 p-6'>
<div className='bg-indigo-600 p-4 rounded-lg shadow mb-6'>
  <h1 className='text-lg font-semibold text-white'>Welcome </h1>

</div>

{/* code */}
{/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-4 gap-10 mb-6'>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600'>Goal</h2>
  <p className='text-2xl fontbold text-indigo-400'></p>

</div>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600'>Current Weight</h2>
  <p className='text-2xl fontbold text-indigo-400'>85Kg</p>
</div>

<div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600'>Goal</h2>
  <p className='text-2xl fontbold text-indigo-400'>Aim</p>

</div>
</div> */}
{/* image section */}

<div className='bg-white rounded-xl shadow p-6 m-6'>
<h2 className=' text-2xl font-semibold mb-4 ' >Ready to Fit here</h2>
<img src = "https://www.heart.org/-/media/Images/Healthy-Living/Fitness/BreakingDownBarriersFitness.jpg?sc_lang=en" className='w-half '/>



</div>

{/* information sucees */}

<div className='br-white rounded-xl p-5 m-5'>
  <h2 className='text-xl font-semibold text-grey-600'>
    Information
  </h2>
  <p className='text-grey-500 leading-relax'>A fitness dashboard is a centralized platform that provides users with a comprehensive overview of their fitness journey. It typically displays key metrics such as workout history, progress tracking, and goal setting. With a fitness dashboard, users can easily monitor their daily activity, including steps taken, calories burned, and distance covered. The dashboard may also include features such as personalized coaching, workout planning, and social sharing. By providing a clear and concise view of their fitness progress, a fitness dashboard can help users stay motivated, focused, and committed to their fitness goals. Whether accessed through a mobile app or website, a fitness dashboard is an essential tool for anyone looking to take control of their health and wellness.</p>
</div>


{/* footer */}

<footer className='bg-white rounded-xl shadow p-4 text-center text-grey-400'>
  <p>&copy: {new Date().getFullYear()}Fit Dashboard All rights recerved</p>
</footer>
</main>
    </div>
   
  )
}

export default Dashboard