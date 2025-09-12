import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function GoalSetting() {
   const [goalType, setGoalType] = useState("");
  const [goalValue, setGoalValue] = useState("");
  const [goalUnit, setGoalUnit] = useState("");
  const [goalDeadline, setGoalDeadline] = useState("");


  const handleGoalTypeChange = (e) => {
    setGoalType(e.target.value);
  };

   const handleGoalValueChange = (e) => {
    setGoalValue(e.target.value);
  };

  const handleGoalUnitChange = (e) => {
    setGoalUnit(e.target.value);
      e.preventDefault();
   
  };

  const handleGoalDeadlineChange = (e) => {
    setGoalDeadline(e.target.value);
    
  };
  
   

   const handleSubmitGoal = (e) => {
    e.preventDefault();
    const goal = {
      type: goalType,
      value: goalValue,
      unit: goalUnit,
      deadline: goalDeadline,
    };
    alert(`updated`);
    console.log(goal);

    


    if(goalType.trim() === ""){
alert(`Fill the goal here`)
    }
    const newItem =document.createElement("div");
    newItem.innerText = [goalType ,goalValue, goalUnit, goalDeadline]
    document.getElementById("taskList").appendChild(newItem);
    document.getElementById("taskInput").value="";
    form.reset();


    console.log(goal);
    // Add logic to save goal to database or state
  };
      




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
 <button className='w-full bg-red-500 cursor pointer text-white font-semibold px-4 py-2'><Link to ="/login">Logout</Link></button>
</aside>

<main className='flex-1 p-6'>
<div className='bg-indigo-600 p-4 rounded-lg shadow mb-6'>
  <h1 className='text-lg font-semibold text-white'>Welcome </h1>

</div>

<div className="goal-setting">
      <h2 className='text-2xl font-bold ml-140'>Set Your Fitness Goal Here</h2>
      <form onSubmit={handleSubmitGoal}>
         <div className='grid grid-cols-1 md:grid-cols-1 mt-10 w-150 ml-100 lg:grid-4 gap-1 mb-6'>


        <div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold text-xl'>Goal Type</h2>
 {/* <input placeholder='name' className='border p-2 w-full mb-3' type="text"  /> */}
        <select value={goalType} onChange={handleGoalTypeChange}>          
          <option value="">Select a goal type</option>
          <option  value="Weight Loss">Weight Loss</option>
          <option value="Muscle gain">Muscle Gain</option>
          <option value="Endurance">Endurance</option>
        </select></div>
        <br />
          <div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold text-xl'>Goal </h2>
        <input
          type="number"
          value={goalValue}
          onChange={handleGoalValueChange}
        />
        <br />
        </div>

         <div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold text-xl'>Goal Unit</h2>
       
        <select value={goalUnit} onChange={handleGoalUnitChange}>
          <option value="">Select a unit</option>
          <option value="kg">Kilograms</option>
          <option value="lbs">Pounds</option>
          <option value="km">Kilometers</option>
        </select></div>
        <br />
           <div className='bg-white p-6 rounded-xl shadow text-center'>
  <h2 className=' text-grey-600 font-semibold text-xl'>Goal Deadline</h2>
       
        <input
          type="date"
          value={goalDeadline}
          onChange={handleGoalDeadlineChange}
        />
        </div>
        <br />
       <button onclick = "GoalSetting()" className = 'bg-pink-400 rounded p-2 w-50 ml-50 mt-5 text-xl font-semibold cursor-pointer hover:bg-pink-800' type="submit">Set Goal</button>
         
       </div>
        </form>
         
    </div>
    <div id = "taskList" className=' bg-orange-300 p-3 rounded text-black w-80 text-xl ml-135'>

    </div>
  





<footer className='bg-white rounded-xl mt-140 shadow p-4 text-center text-grey-400 '>
  <p>&copy: {new Date().getFullYear()}Fit Goalsetting All rights recerved</p>
</footer>
</main>
</div>
  )
}

export default GoalSetting