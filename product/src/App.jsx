import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import RoadmapPage from './pages/RoadmapPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
        <Route path='/roadmap' element={<RoadmapPage/>}/>
      </Routes>
        
      </main>
    </div>
  )
}

export default App
