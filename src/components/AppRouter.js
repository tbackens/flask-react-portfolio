import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/about' element={About} />
            <Route path='/portfolio' element={Portfolio} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter