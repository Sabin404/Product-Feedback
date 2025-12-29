import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import RoadmapPage from './pages/RoadmapPage'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <main>
        {/* <HomePage/> */}
        {/* <DetailPage/> */}
        <RoadmapPage/>
      </main>
    </div>
  )
}

export default App
