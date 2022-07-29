import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tzly from './pages/Tzly'
import './App.scss'
function App () {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Tzly />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
