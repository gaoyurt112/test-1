import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//引入页面
import Tzly from './pages/Tzly'
import './App.scss'
function App () {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 路由 */}
          <Route path="/" element={<Tzly />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
