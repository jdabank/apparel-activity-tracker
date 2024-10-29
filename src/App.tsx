import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Wardrobe from './components/Wardrobe'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </>
  )
}

export default App
