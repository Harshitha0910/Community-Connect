import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from  './pages/SignUpPage' 
import LoginPage from './pages/LoginPage'
import CompleteProfilePage from './pages/CompleteProfilePage' 
import ResidentDashboardpage from './pages/ResidentDashboardpage'
import ServicePage from './pages/ServicePage'
import MaintenancePage from './pages/MaintenancePage'
import NoticeBoardPage from './pages/NoticeBoardPage';
import ComplaintsPage from './pages/ComplaintsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path='/resident-dashboard' element={<ResidentDashboardpage />} />
        <Route path="/service-directory" element={<ServicePage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/notices" element={<NoticeBoardPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
      </Routes>
  ) 
}

export default App
