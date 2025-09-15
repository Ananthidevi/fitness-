import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import GoalSetting from './pages/GoalSetting';
import Feedback from './pages/Feedback';
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path ="/profile" element ={<Profile />} />
         <Route path ="/goalsetting" element ={<GoalSetting />} />
         <Route path = "/feedback" element ={<Feedback />} />

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App